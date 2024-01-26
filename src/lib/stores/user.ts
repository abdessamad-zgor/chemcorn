import {app} from "$lib/client-config"
import {writable} from "svelte/store"
import {type User, getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import {getFirestore, doc} from "firebase/firestore"
import type { InfoContact } from "$lib/types"

type UserState = {
	user: User|null,
	info: InfoContact 
}

let userStore = writable({user: null});

export async function loginUserWithEmailAndPassword(email: string, password: string) {
	let auth = getAuth(app)
	try{
		let userCredentials = await signInWithEmailAndPassword(auth, email, password);
		userStore.update((s)=>({user: userCredentails}));
		return {success: true, error: null}
	}catch(error){
		return {success: false, error: null}
	}
}

export async function loginUserWithGoogle() {
	let auth = getAuth(app)
	let provider = new GoogleProvider()
	try{
		let result = await signInWithPopUp(auth)
		userStore.update((s)=>({user: result.user}));
		return {success: true, error: null}
	}catch(error){
		return {success: false, error: null}
	}
}

export async function loginUserWithFacebook(){
	let auth = getAuth()
	let provider = new FacebookProvider()
	try{
		let result = await signInWithPopup()
		userStore.update((s)=({user: result.user}))
		return {success: true, error: null}
	}catch(error){
		return {success: false, error: error}
	}
}

export async function signOut(){
	let auth = getAuth()
	await signOut(auth)
	userStore.update(s=>({user: null}))
}

export async function updateContactInfo(info: Partial<InfoContact>){
	let store = getFirestore(app);
	try{
		let result = await doc
		return {success: true, error: null}
	}catch (error) {
		{success: false, error: error}
	}
}

