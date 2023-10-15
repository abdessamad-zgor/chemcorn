const admin = require("firebase-admin")

const serviceAccount = require("./service.json")

let app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

app.firestore().recursiveDelete(app.firestore().collection("produit")).then(()=>{

const products = [
    {
        slug: "vitamine-e",
        titre: "Vitamine E",
        type: "actif",
        variants: [{images: ["https://picsum.lorem/500"], volume: "10ml", prix: 50  }],
        details: {
            proprietes: ["conservateur des phases huileux", "antioxydant", "amelioration du microcirculation cutané"],
            utilisations: [{categorie: "conservation", use: ["pour toutes preparation contenant une phase huileuse", "toute preparation exclusivement huileuse"]}],
            enPratique: {
                nom_INCI: "Vitamin E",
                origin: "organique",
                dosage: {"anti-oxydant":"0.02% ~ 0.2%","actif":"0.1% ~ 0.5%"},
                solubilite: ["eau", "huile", "emulsion"]
            }

        }
    },
    {
        slug: "bicarbonate-soude",
        titre: "Bicarbounate de soude",
        type: "detergent",
        varients: [{images: "https://picsum.lorem/600", volume: "100g", prix: 40}, {images: ["https://picsum.lorem/500"], volume: "500g", prix: 100}],
        details: {
            proprietes: ["agent alcalinisant", "agent deodorant", "abrasif et exfoliant doux", "blachissuers des dents"],
            utilisations: [{categorie: "detergent", use: "produits de bain effervescents"}, {categorie: "blanchisseur", use: "dentifrices et bains de douche"}, {categorie: "cosmetique", use: "deodorant"}, {categorie: "divers", use: "crémes, baumes ou toutes emulsions"}, {categorie: "divers", use: "pour augmenter le PH d'une préparation"}],
            enPratique: {
                nom_INCI: "Sodium Bicarbonate",
                origin: "syntitique, menirale",
                dosage: {"toutes":"selon l'utilisation"},
                solubilite: ["eau"]
            }
        }
    }
]


  for (let product of products) {
    app.firestore().collection("produit").doc(product.slug).set(product).then(res=>console.log(product.titre + "added to Firestore"))
  }
});

let admin_uid = "chemco_admin"

let {getAuth, FirebaseAuthError} = require("firebase-admin/auth")
let auth = getAuth(app)
auth.getUser(admin_uid).then(()=>{
    
        console.log("all good.")
    
}).catch(err=>{
    if (err.code == "auth/user-not-found") {
        auth.createUser({
            uid: admin_uid,
            email: "zgor.smf1@gmail.com",
            emailVerified: true,
            phoneNumber: "+212704902415",
            password: "Ccox@10113",
            displayName: "Abdessamad Zgor",
        }).then((user)=>{
            auth.setCustomUserClaims(admin_uid, {admin: true}).then(()=>console.log("Admin in now privileged.")
            .catch(err=>console.log("Error setting custom claims. "+err.message)))
        }).catch(err=>console.log("Error creating user. "+err.message))
    } else {
        console.log("Unknown error : "+err.message)
    }
})





