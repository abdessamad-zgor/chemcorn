import { writable } from "svelte/store"
import { auth } from "./client-config"
import type { User } from "firebase/auth"
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import type { Produit, Profile, Command, Item } from "./types";


type AppState = {
    user: User | null,
    search: Item[],
    profile: Profile | null,
    list: Item[],
    cart: Item[],
    commandes: Command[],
    recettes: Produit[]
}

export let store = writable<AppState>({
    cart: [],
    user: null,
    search: [],
    list: [],
    commandes: [],
    profile: null,
    recettes: []
})

export function addToCart(item: Item) {
    return ()=>store.update(
        s=>{
            if (! s.cart.map(i=>i.titre).includes(item.titre))
                return ({...s, cart: [...s.cart, item]})
            else
                return s
    })
}

export function removeFromCart(titre: string){
    return ()=>store.update(s=>({...s, cart: s.cart.filter(p=>p.titre==titre)}))
}

export async function loginUserFacebook(){
    try{
        let provider = new FacebookAuthProvider()
        let result = await signInWithPopup(auth, provider);
        store.update(s=>({...s, user: result.user}))
    } catch (err) {
        alert(err)
    }
}


export async function loginUserGoogle(){
    try{
        let provider = new GoogleAuthProvider()
        let result = await signInWithPopup(auth, provider);
        store.update(s=>({...s, user: result.user}))
    } catch (err) {
        alert(err)
    }
}
