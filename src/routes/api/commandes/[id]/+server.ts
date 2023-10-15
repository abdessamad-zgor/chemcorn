import {error, json, type RequestHandler} from "@sveltejs/kit"
import {db} from "$lib/config"
import type { Command} from "$lib/types"
import { Zcommand } from "$lib/types"
import {AuthMiddleware} from "$lib/auth"

export const GET: RequestHandler =  AuthMiddleware(async ({params})=>{
    try{
        let doc = await db.collection("command").doc(params.id as string).get()
        if (doc.exists){
            // @ts-ignore
            let data = {id: doc.id, ...doc.data()} as Command
            return json(data)
        } else {
            throw error(403, "no document found with id "+params.id)
        }
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
})

export const  PUT = AuthMiddleware(async ({params, request})=>{
    try {
        let docRef = db.collection("command").doc(params.id as string)
        let payload = request.json()
        if (Zcommand.deepPartial().safeParse(payload).success && (await docRef.get()).exists){
            await docRef.set(payload, {merge:true})
            return json({success:true})
        } else {
            throw error(400, "currupt payload.")
        }
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
})


export const DELETE = AuthMiddleware(async ({params})=>{
    try {
        let docRef = db.collection("command").doc(params.id as string)
        if ((await docRef.get()).exists) {
            await docRef.delete()
            return json({success: true})
        } else {
            throw error(400, "no document found with id "+params.id)
        }
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
})
