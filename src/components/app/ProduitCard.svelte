<script lang="ts">
import type {Produit} from "$lib/types"
import {addToCart} from "$lib/stores/cart"

export let product: ProductSchema;
</script>

<a class=" flex flex-col w-full
	rounded-lg border border-stone-300 shadow-lg
	hover:border-green-300
	hover:shadow-green-100
	" href={`/produits/${product.id}`}>
	<img src={product.varients[0].images} alt={product.titre}/>
	<div class="p-2">
		<h1 class="text-xl text-stone-600 py-2
			hover:underline
			hover:decoration-green-600
			hover:text-green-600">{produit.titre}</h1>
		<div class="flex justify-between gap-2">
			<span class="text-green-600">{produit.varient[0].prix}</span>
			<div class="flex gap-2">
				<button on:click={addToCart(product)} 
					class="text-center p-2 w-[4em] h-[4em] rounded-full
					bg-stone-200
					hover:bg-green-200
					hover:text-green-800"
				>
					<AddToCartIcon/>
				</button>
				<button on:click={addToWishlist(product)}><HeartIcon/></button>
			</div>
		</div>
	</div>
</a>
