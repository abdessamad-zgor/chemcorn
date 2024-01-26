<script lang="ts">
import {
	loginUserWithGoogle,
	loginUserWithFacebook,
	loginUserWithEmailAndPassword,	
} from "$lib/stores/user";
import {AuthErrorCodes} from "firebase/auth"
import {FirebaseError} from "firebase/app"


let email: string = ""
let password: string = ""

let error = "";
let success = false;

let handleSubmit = async()=>{
	try{
		await loginUserWithEmailAndPassword(email, password)
		success = true;
	}catch(error){
		if(error instanceof FirebaseError){
			if(error.code == AuthErrorCodes.INVALID_EMAIL){
				error = "invalid email"
			} else if(error.code == AuthErrorCodes.INVALID_EMAIL){
				error = "Something went wrong, please try again later."
			} else if(error.code == AuthErrorCodes.INVALID_EMAIL){
				error = "Something went wrong, please try again later."
			}else {
				error = "Something went wrong, please try again later."
			}
		}else {
			error = "Something went wrong, please try again later."
		}
	}
}

$: if(success){

}
</script>

<div class="m-auto lg:w-1/5 md:w-1/4 
	w-10/12 bg-white border rounded-lg shadow-lg">
	<form method="POST" on:submit|preventDefault={handleSubmit}>
		<div class="flex flex-col-reverse gap-2 ">
			<input class="peer border focus:border-green-500 rounded"
				 type="text" name="email" bind:value={email}/>
			<label class="text-xl text-stone-700 peer-focus:text-green-500">
        Email
      </label>
		</div>
		<div class="flex flex-col-reverse gap-2 ">
			<input class="peer border focus:border-green-500 rounded"
				 type="text" name="email" bind:value={password}/>
			<label class="text-xl text-stone-700 peer-focus:text-green-500">
        Email
      </label>
		</div>
		<div class="">
			<input type="submit" 
				class="rounded-lg shadow text-white bg-" 
				value="Connexion"/>
		</div>
	</form>
	<div class="flex flex-col gap-2 w-full">
		<p class="font-light text-md">
			Vous n'avez pas un compte ? <a href="/s'inscrire">s'inscrire</a>
		</p>
		_______________or_________________
		<div class="flex flex-col gap-2">
			<button on:click={loginUserWithGoogle} 
				class="bg-stone-100 rounded w-full py-2 text-xl text-zinc-700">
				Connexion avec Google 
			</button>
			<button on:click={loginUserWithFacebook} 
				class="bg-stone-100 rounded w-full py-2 text-xl text-zinc-700">
				Connexion avec Facebook 
			</button>
		</div>
	</div>	
</div>
