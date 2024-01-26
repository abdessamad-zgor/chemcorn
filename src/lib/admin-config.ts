import { initializeApp, cert, type ServiceAccount } from "firebase-admin/app";
import * as env from "$env/static/private"

const serviceAccount: ServiceAccount = {
  //@ts-ignore
  clientEmail: env.FIREBASE_CLIENT_EMAIL,
  //@ts-ignore
  projectId: env.FIREBASE_PROJECT_ID,
  //@ts-ignore
  privateKey: env.FIREBASE_PRIVATE_KEY
}

export const app = initializeApp({
    credential: cert(serviceAccount)
})
