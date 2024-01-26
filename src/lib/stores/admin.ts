import type { User } from "firebase/auth"
import {writable} from "svelte/store"

type AdminStore = {
  user: User|null
}

export const admin = writable<AdminStore>({

}) 


