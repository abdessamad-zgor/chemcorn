import {error, json} from "@sveltejs/kit"
import { Zcommand, type Item, type Command } from "$lib/types"
import { AuthMiddleware } from "$lib/auth"
import type {RequestHandler} from "@sveltejs/kit"
import {db} from "$lib/config"

export const GET : RequestHandler = AuthMiddleware(async ({url})=>{
    try{
        let snapshot = await db.collection("command").get()
        // @ts-ignore
        let commandes = (snapshot.docs.map(d=>({...d.data(), cid: d.id})) as Command[])
        if (url.searchParams.has("status")) {
            let status = url.searchParams.get("status") as string
            commandes = commandes.filter(c=> c.status != status)
        }
        if (url.searchParams.has("date")) {
            let date = new Date(parseInt(url.searchParams.get("date") as string))
            commandes = commandes.filter(c=>{
                let com_date = new Date(c.date_de_command)
                if (date.getDay()==com_date.getDay() &&
                    date.getMonth()==com_date.getMonth() &&
                    date.getFullYear()==com_date.getFullYear()
                   ) {
                       return false
                   } else {
                       return true
                   }
            })
        }
        return json(commandes)
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
}, true)

export const POST : RequestHandler = AuthMiddleware(async({request})=>{
    try{
        let body = await request.json()
        if (Zcommand.safeParse(body).success) {
            await db.collection("command").add(body)
            return json({success: true})
        } else {
            throw error(402, "Corrupt request body.")
        }
    } catch(err) {
        throw error(500, "Unknown error : "+(err as Error).message)
    }
}, true)
