import type { Produit } from "$lib/types";
import { error, type RequestEvent } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
//@ts-ignore
export const load:PageLoad = async ({params, fetch}:RequestEvent) =>{
    try{
        let response = await fetch(`/api/produits/${params.slug}`);
        if(response.status==200){
            let produit = await response.json() as Produit
            return {produit}
        } else {
            throw await response.json()
        }
    } catch(err) {
        throw error(500, "error fetching data")
    }
}
