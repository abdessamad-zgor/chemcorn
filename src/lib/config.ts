import { initializeApp, cert } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore"
import {getAuth} from "firebase-admin/auth"
import {resolve, dirname} from "path"
import {fileURLToPath} from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

let app = initializeApp({
    credential: cert(resolve(__dirname, "../../config/service.json"))
})

export const db = getFirestore(app);
export const auth = getAuth(app)

