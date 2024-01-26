<script lang="ts">
  import type {Produit} from "$lib/types"
  import {deleteProduct} from "$lib/stores/admin"

  export let produit: Produit;
</script>

<div class=" flex flex-col w-full
	rounded-lg border border-stone-300 shadow-lg
	hover:border-green-300
	hover:shadow-green-100
	">
	<img src={product.varients[0].images} alt={product.titre}/>
	<div class="p-2">
		<h1 class="text-xl text-stone-600 py-2
			hover:underline
			hover:decoration-green-600
			hover:text-green-600">{produit.titre}</h1>
		<div class="flex justify-end">
			<div class="flex gap-2">
				<a href={`/admin/produits/${produit.id}/edit`}><EditIcon/></a>
				<div on:click={deleteProduct(product)}><HeartIcon/></div>
			</div>
		</div>
	</div>
</div>
