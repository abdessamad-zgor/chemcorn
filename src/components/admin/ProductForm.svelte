<script lang="ts">
import {creatProduct, editProduct} from "$lib/stores/admin"

function addEntryToArray(propertyName: string, initValue:any){
	return ()=>{
		product = {
			...product,
			[propertyName]: [...product[propertyName], initValue]}
	}
}

function removeEntryFromArray(propertyName: string, index: number){

	if(index<produit[propertyName].length ){
		product = {
			...product,
			 [propertyName]: [
			...product[propertyName].slice(0, index),
			index!=product[propertyName].length-1 &&
			...product[propertyName].slice(index+1)
			]
		}
	}
}

async function handleSubmit(){
	try{
		let {sucess, err: error} = edit ? 
			await editProduct(product) :
			await createProduct(product);
		if (error) {
			throw error
		}
		successMessage = edit ? 
			"Ce produit est bien met à jour." :
			"Ce produit a éte bien créer." 
	}catch(err){
		if (typeof err == "string"){
			errorMessage = err
		}else {
			errorMessage = err.message 
		}
	}
}
let successMessage: string;
let errorMessage: string;
export let edit: boolean = false;
export let product: Product = new Product()
</script>

<form on:submit|preventDefault = {!edit ? createProduct: editProduct}>
	{#if errorMessage}
		<p class="bg-red-200 text-red-900 rounded p-4 text-xl">
			{errorMessage}
		</p>
	{/if}
	{#if successMessage}
		<p class="bg-green-200 text-green-900 rounded p-4 text-xl">
			{successMessage}
		</p>
	{/if}
	<div class="flex flex-col py-2">
		<label>Titre</label>
		<input bind:value={product.titre} type="text" name="titre">
	</div>

	<div class="flex flex-col py-2">
		<label>slug</label>
		<input bind:value={product.slug} type="text" name="titre">
	</div>
	
	<div class="flex flex-col py-2">
		<label>INCI</label>
		<input bind:value={product.inci} type="text" name="inci"/>
	</div>
	
	<div class="flex flex-col py-2">
		<label>Description</label>
		<textarea bind:value={product.description} name="description"/>
	</div>
	<div class="flex flex-col py-2">
		<label>Variantes</label>
		{#each product.variantes as _, i}
			<div class="flex items-center gap-4 group">
				<input 
					type="text"
					bind:value={produit.variantes[i].prix}/>
				<input 
					type="text"
					value={produit.variantes[i].volume}/>
				<button 
					class="hidden group-hover:block
					 w-[2em] h-[2em] bg-stone-300
					  text-zinc-800 font-bold"
					on:click={removeEntryFromArray("variantes", i)}>
					  -
				</button>
			</div>
		{/each}
		<div>
			<button 
				on:click={
					addEntryToArray(
						"variantes", 
						{images: "", prix: "", volume: ""}
					)
				} 
				class="w-[2em] h-[2em] bg-stone-300
				 text-zinc-800 font-bold">
				+
			</button>
		</div>
	</div>
</form>
