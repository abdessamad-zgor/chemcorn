import {z} from "zod"

type ProduitTypes = "actif"|"emulsifiant"|"multi-fontions"|"conservateur"|"texture" 

export class Produit {
  slug: string;
  type: ProduitTypes;
  titre: string;
  variants: { images:URL|string, prix:number, volume: string }[];
  properties: string[];
  utilisations: { categorie:  "cheveaux"|"peau"|"cosmitique"|"detergent", use: string|string[] }[];
  inci: string;
  origin: string;
  dosage: { [key: string]: string };
  solubilite: ("eau"|"huile"|"emulsion")[];
  description: string;
  constructor(
    slug: string="",
    type: ProduitTypes="actif",
    titre: string="",
    variants: { images:URL|string, prix:number, volume: string }[]=[{images: "", prix: 0, volume: ""}],
    properties: string[]=[],
    utilisations: { categorie:  "cheveaux"|"peau"|"cosmitique"|"detergent", use: string|string[] }[]=[{categorie: "peau", use: ""}],
    inci: string="",
    origin: string="",
    dosage: { [key: string]: string }={},
    solubilite: ("eau"|"huile"|"emulsion")[]=["eau"],
    description: string=""
  ){
    this.slug = slug
    this.type = type
    this.titre = titre
    this.variants = variants
    this.properties = properties
    this.utilisations = utilisations
    this.inci = inci
    this.origin = origin
    this.dosage = dosage
    this.solubilite = solubilite
    this.description = description
  }
}

export const ProduitSchema = z.instanceof(Produit)

export class Item {
  titre: string
  volume: string
  prix: number
  image: string
  quantite: number
  type: string
  constructor(
    titre: string,
    volume: string,
    prix: number,
    image: string,
    quantite: number,
    type: string
  ) {
    this.titre = titre
    this.volume = volume
    this.prix = prix
    this.image = image
    this.quantite = quantite
    this.type = type
  }
}

export let ItemSchema = z.instanceof(Item)

