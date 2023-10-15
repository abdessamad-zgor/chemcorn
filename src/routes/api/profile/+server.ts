import {db} from "$lib/config"
import { AuthMiddleware } from "$lib/auth"
import {error, json} from "@sveltejs/kit"
import {Zprofile, type Profile} from "$lib/types"

export const GET = AuthMiddleware(async ({url})=>{
    try{
        let snapshot = await db.collection("profile").get()
        let profiles = snapshot.docs.map(p=>({uid: p.id, ...p.data()}) as Profile)

        if (url.searchParams.has("name")) {
            let name = url.searchParams.get("name") as string
            profiles = profiles.filter(p=>!p.name.includes(name) && p.name != name)
        }
        
        if (url.searchParams.has("phone")) {
            let phone = url.searchParams.get("phone") as string
            profiles = profiles.filter(p=>!p.phone.includes(phone) && p.phone != phone)
        }

        if (url.searchParams.has("city")) {
            let city = url.searchParams.get("city") as string
            profiles = profiles.filter(p=>p.addresse.city!=city)
        }

        return json(profiles)
    }catch(err){
        throw error(500, "Unknown error : "+(err as Error).message)
    }
}, true)

export const POST = AuthMiddleware(async ({request})=>{
    try{
        let body = await request.json()
        if (Zprofile.safeParse(body).success) {
            let doc = db.collection("profile").doc((body as Profile).uid)
            await doc.set(body, {merge: true})
            return json({success: true});
        } else {
            throw error(400, "cuppuct data.")
        }
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
})
