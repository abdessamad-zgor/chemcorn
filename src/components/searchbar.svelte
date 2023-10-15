<script lang="ts">
    import {store} from "$lib/store"
    import type { Produit, Item} from "$lib/types"
    import {res} from "$lib/utils"
    export let mini:boolean
    let name:string = ""
    let error: any = null

    async function search(name:string) {
        if ($store.list) {
            let produits = $store.list.filter(p=>p.titre!=name)
            return {data: produits, error: null}
        } else {
        
            try{
                //@ts-ignore
                return {data:await fetch(`/api/produits?name=${name}`) as Item[], error}
            }catch(error) {
                return {data:null, error}
            }
          
        }
    }
</script>

{#if mini}
<div class="flex flex-col items-center w-full">
    <input type="text" on:change={(e)=> name=e.currentTarget.value}>
    <div class="flex flex-col divide-y px-4">
    {#if name!=""}

        {#await search(name)}
            <p>loading</p>
        {:then value}
            {#if value.data}
                {#each value.data as item}
                    <div class="w-full items-center flex flex-row p-2">
                        <div class="w-1/4">
                            <img src={item.image} alt="">
                        </div>
                        <div class="flex-1 px-4">
                            <h1 class="text-xl">{item.titre}</h1>
                            <span class="font-light ">{item.prix}</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="w-[20px] h-[20px] rounded border border-stone-300">{item.quantite}</span>
                        </div>
                    </div>
                {/each}
            {:else if value.error}
                <p>Aucun produit avec le nom {name}</p>
            {/if}
            
        {/await}
    {:else}
       <p class="cherchez un produits"></p> 
    {/if}
    
    </div>
</div>
{/if}
