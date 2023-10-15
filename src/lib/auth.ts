import type { RequestEvent } from "@sveltejs/kit";
import {auth as admin_auth} from "./config";
import {error} from "@sveltejs/kit"

export function AuthMiddleware<T>(f:(e:RequestEvent)=>Promise<T>, admin: boolean = false){
    if(admin){
        return async (event: RequestEvent)=> {
            try {
                let {request} = event;
                let token = request.headers.get("Authorization")?.split("Bearer ")[1]
                if(!token){
                    throw error(402, "No auth token provided in Request")
                }
                let decodedIdToken = await admin_auth.verifyIdToken(token)
                let user = await admin_auth.getUser(decodedIdToken.uid)
                if (user?.customClaims?.admin) {
                    try{
                        let response = await f(event)
                        return response
                    } catch (error) {
                        throw error
                    }
                }else {
                    throw error(402, "user does not have sufficient provillegss")
                }
            } catch (err) {
                throw error(500, (err as Error).message)
            }
        }
    } else {
          return async (event: RequestEvent)=> {
                try {
                    let {request} = event;
                    let token = request.headers.get("Authorization")?.split("Bearer ")[1]
                    if(!token){
                        throw error(402, "No auth token provided in Request")
                    }
                    await admin_auth.verifyIdToken(token)
                    try{
                        let response = await f(event)
                        return response
                    } catch (error) {
                        throw error
                    }     
                } catch (err) {
                    // @ts-ignore
                    if (err?.code == "auth/id-token-revoked"){
                        throw error(405, "session expired")
                    }
                    throw error(500, (err as Error).message)
                }
        }
    }

}
