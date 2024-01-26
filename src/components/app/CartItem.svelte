<script lang="ts">
import type {Item} from "$lib/types"
import {addQuantity, decreaseQuantity} from "$lib/stores/cart"

export let item: Item
</script>

<div class="flex w-full rounded-lg border border-stone-300 shadow-lg gap-4 p-2">
	<img src={item.image} alt={item.titre}/>
	<div class="px-2 flex-1">
		<a class="text-xl text-stone-600 py-2 font-extrabold text-green-800"
			href={`/produits/${i}`}>{item.titre}</a>
		<h1 class="text-stone-400">{item.prix}</h1>
	</div>
	<div class="flex flex-col gap">
		<button class="font-bold shadow border rounded-lg text-xl"
			on:click={addQuantity(item)}>+</button>
		<input readonly bind:value={item.quantity}/>
		<button class="font-bold shadow border rounded-lg text-xl"
			on:click={decreaseQuantity(item)}>-</button>
	</div>
</div>
