const admin = require("firebase-admin")

const serviceAccount = require("./service.json")

let app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

app.firestore().recursiveDelete(app.firestore().collection("products")).then(()=>{

const products = [
    {
        titre: "bicaronat de soude"
    },
    {
        titre: "cosgard"
    },
    {
        titre: "sel d'epsom"
    },
    {
        titre: "oxyde de zinc"
    },
    {
        titre: "nila poudre"
    },
    {
        titre: "acide salicylique"
    },
    {
        titre: "amidon de mais"
    },
    {
        titre: "pottas K-OH"
    },
    {
        titre: "protiene de soie"
    },
    {
        titre: "mica colorant rose "
    },
    {
        titre: "mica colorant or nacre"
    },
    {
        titre: "mica colorant orange"
    },
    {
        titre: "mica colorant blanc"
    },
    {
        titre: "mica colorant rouge"
    },
    {
        titre: "eumulgin co 40"
    }
]


for (let product of products) {
    app.firestore().collection("products").add(product).then(res=>console.log(product.titre + "added to Firestore"))
}

});





