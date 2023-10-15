import {json, error} from "@sveltejs/kit"
import {Zprofile, type Profile} from "$lib/types"
import {db} from "$lib/config"
import {AuthMiddleware} from "$lib/auth"

export const GET = AuthMiddleware(async ({params})=>{
    try{
        let doc = await db.collection("profile").doc(params.id as string).get()
        if (doc.exists){
            return json({uid: doc.id, ...doc.data()} as Profile)
        } else {
            throw error(400, "no document found with id "+doc.id)
        }
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
})

export const PUT = AuthMiddleware(async ({params, request})=>{
    try{
        let body = await request.json()
        let doc = db.collection("profile").doc(params.id as string)
        if ((await doc.get()).exists && Zprofile.deepPartial().safeParse(body).success) {
            await doc.set(body, {merge:true})
            return json({success: true})
        } else {
            throw error(400, "invalid id or currupt payload.")
        }
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
})
