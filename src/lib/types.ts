import {z} from "zod"

type ProduitTypes = "actif"|"emulsifiant"|"multi-fonctions"|"conservateur"|"texture" 

type Variant = { 
  images:URL|string,
  prix:number,
  volume: string
}

type Utilisation = { 
  categorie:  "cheveaux"|"peau"|"cosmitique"|"detergent",
  use: string|string[]
}

type Dosage = { [key: string]: string }

type Solubilite = ("eau"|"huile"|"emulsion")

export class Item {
  id: string
  titre: string
  volume: string
  prix: number
  image: string | URL
  quantite: number
  type: string;
  
  constructor(
    id: string,
    titre: string,
    volume: string,
    prix: number,
    image: string|URL,
    quantite: number,
    type: string,
  ) {
    this.id = id
    this.titre = titre
    this.volume = volume
    this.prix = prix
    this.image = image
    this.quantite = quantite
    this.type = type
    this.image = image
  }
}

export let ItemSchema = z.instanceof(Item)

export class Produit {
  id: string;
  slug: string;
  type: ProduitTypes;
  titre: string;
  variants: Variant[];
  proprietes: string[];
  utilisations: Utilisation[];
  inci: string;
  origine: string;
  dosage: Dosage;
  solubilite: Solubilite[];
  description: string;

  constructor(
    id: string="",
    slug: string="",
    type: ProduitTypes="actif",
    titre: string="",
    variants: Variant[]=[{images: "", prix: 0, volume: ""}],
    proprietes: string[]=[],
    utilisations: Utilisation[]=[{categorie: "peau", use: ""}],
    inci: string="",
    origine: string="",
    dosage: Dosage={},
    solubilite: Solubilite[]=["eau"],
    description: string=""
  ){
	this.id = id
    this.slug = slug
    this.type = type
    this.titre = titre
    this.variants = variants
    this.proprietes = proprietes
    this.utilisations = utilisations
    this.inci = inci
    this.origine = origine
    this.dosage = dosage
    this.solubilite = solubilite
    this.description = description
  }
  
  static fromJson(json: any){
	  if(ProduitSchema.safeParse(json).success){
		 return new Produit(
			 json.id,
			 json.slug,
			 json.type,
			 json.titre,
			 json.variants,
			 json.proprietes,
			 json.utilisations,
			 json.inci,
			 json.origine,
			 json.dosage,
			 json.solubilite,
			 json.description
		 ) 
	  }
	  return;
  }
  
  toItem(variantsIndex=0, quantite=1){
	  let variant = this.variants[variantsIndex]
	  return new Item(
		  this.id,
		  this.titre,
		  variant.volume,
		  variant.prix,
		  variant.images,
		  quantite,
		  this.type
		)
  }
}

export const ProduitSchema = z.instanceof(Produit)


export class Adresse {
  ville: string
  quartier: string
  rue: string
  
  constructor(
    ville: string="",
    quartier: string="",
    rue: string=""
  ) {
	this.ville = ville
	this.quartier = quartier
	this.rue = rue
  }
}

export const AdresseSchema = z.instanceof(Adresse)

export class InfoContact {
  tele: string
  email: string
  prenom: string
  nom: string
  adresse: Adresse

  constructor(
    tele: string ="",
    email: string = "",
    prenom: string = "",
    nom: string = "",
    adresse: Adresse = new Adresse()
  ) {
    this.tele = tele
    this.email = email
    this.prenom = prenom
	this.nom = nom
	this.adresse = adresse
  }
}

export const InfoContactSchema = z.instanceof(InfoContact)
