<script lang="ts">
import {Produit} from "$lib/types"

let selectedVariante = 0
export let produit: Produit
</script>

{#if produit}
	<div 
		class="
		border border-stone-200 rounded-lg shadow p-4 flex flex-row">
		<img 
			src={produit.variants[selectedVariante].images}
			class="basis-1/2 rounded-lg"
			alt="">
		<div>
			<h1 class="text-3xl font-bold">{produit.titre}</h1>
			<p class="flont-light">{produit.origine}</p>
			<div>
				<p>{produit.description}</p>
				<
				<p>volume: 
					<select bind:value={selectedVariante}>
						{#each produit.variantes as vr, i}
							<option value={i}>{vr.volume}</option>
						{/each}
					</select>
				</p>
				<h1 class="text-lg text-green-700 font-bold">
					{produit.variantes[selectedVariante].prix}
				</h1>
			</div>
			<div class="flex">
				<button 
				on:click={addToCart(produit.toItem(selectedVarient, 1))}>
					+
				</button>
				<button 
				on:click={addToWishlist(produit.toItem(selectedVarient))}>
					<3
				</button>
			</div>
		</div>
	</div>
{/if}
