<script lang="ts">
    import {auth} from "$lib/client-config"
    import {store} from "$lib/store"
    import { signInWithEmailAndPassword } from "firebase/auth";
    async function handleSubmit(this: HTMLFormElement, event: SubmitEvent){
        event.preventDefault()
        try{
            let data = new FormData(this)
            let credentials = await signInWithEmailAndPassword(auth, data.get("email")?.toString() as string, data.get("password")?.toString() as string);
            let tokenResult = await credentials.user.getIdTokenResult()
            if(tokenResult.claims?.admin){
                store.update(s=>({...s, user: credentials.user}))
            }
        } catch(err) {

        }
    }
</script>

<div class="w-full min-h-screen flex flex-row justify-center items-center bg-sky-100" on:submit={handleSubmit}>
    <form action="" class="rounded-lg p-4 w-10/12 m-auto md:w-4/12 shadow bg-white/80">
        <div class="py-2">
            <label for="">Email</label>
            <input type="email" name="email" required class="py-2 px-px w-full bg-transparent border-b-2 border-stone-200 focus:border-sky-300" placeholder="Entrez votre email">
        </div>

        <div class="py-2">
            <label for="">Password</label>
            <input type="password" name="password" required class="py-2 px-px w-full bg-transparent border-b-2 border-stone-200 focus:border-sky-300" placeholder="Entrez votre email">
        </div>
        <div class="flex flex-row justify-center py-px">
            <input type="submit" value="Login" class="text-xl text-white bg-sky-500 rounded-lg shadow w-4/12 py-2 text-center">
        </div>
    </form>
</div>
