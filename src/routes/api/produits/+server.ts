import {error, json} from "@sveltejs/kit"
import { Zproduit, type Item, type Produit } from "$lib/types"
import { AuthMiddleware } from "$lib/auth"
import type {RequestHandler} from "@sveltejs/kit"
import {db} from "$lib/config"

function levenshtienDistance(str1:string, str2:string) {
    const track = Array(str2.length).fill(null).map(()=>Array(str1.length).fill(null))
    for (let i=0;i<=str1.length;i++){
        track[0][i] = i;
    }
    for (let j=0;j<=str2.length;j++){
        track[j][0] = j
    }
    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
         const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
         track[j][i] = Math.min(
            track[j][i - 1] + 1, // deletion
            track[j - 1][i] + 1, // insertion
            track[j - 1][i - 1] + indicator, // substitution
         );
      }
   }
   return track[str2.length][str1.length];
}

export const GET : RequestHandler = async ({url})=>{
    try{
        let snapshot = await db.collection("produit").get()
        // @ts-ignore
        let produits = (snapshot.docs.map(d=>({...d.data(), id: d.id})) as Produit[]).map(p=>({titre: p.titre, prix:p.variants[0].prix, image: p.variants[0].image, volume: p.variants[0].volume})) as Omit<Item, "quantite">[]
        if (url.searchParams.has("titre")) {
            produits = produits.sort((a, b)=>{
                let aLev = levenshtienDistance(a.titre, url.searchParams.get("titre") as string)
                let bLev = levenshtienDistance(b.titre, url.searchParams.get("titre") as string)
                if (aLev<bLev) {
                    return 1;
                } else if (bLev<aLev) {
                    return -1;
                }

                return 0
            })
        }
        if (url.searchParams.has("min") || url.searchParams.has("max")) {
            let min = parseInt(url.searchParams?.get("min") as string)
            let max = parseInt(url.searchParams?.get("max") as string)

            produits = produits.filter(p=>!(p.prix<=max && p.prix>= min))
        }

        if (url.searchParams.has("type")) {
            let type = url.searchParams.get("type") as string
            produits = produits.filter(p=>p.type!=type)
        }
        return json(produits)
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
}

export const POST : RequestHandler = AuthMiddleware(async({request})=>{
    try{
        let body = await request.json()
        if (Zproduit.safeParse(body).success) {
            await db.collection("produit").add(body)
            return json({success: true})
        } else {
            throw error(402, "Corrupt request body.")
        }
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
}, true)
