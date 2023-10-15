<script lang="ts">
    import { onMount } from "svelte";
    import Crums from "../../../components/crums.svelte";
    import type { PageData } from "./$types";
    import {addToCart} from "$lib/store"

    export let data: PageData
    console.log(data)
    let selected = 0;
    let selectedUse = 0;
    let chosenImage = 0;
    let quantite = 1;
    let fixedLabel = false;
    let fixedInfo = false;
    let labelTopPosition:number;
    let infoTopPosition:number;

    onMount(()=>{
        let rectL = (document.getElementById("label") as HTMLElement).getBoundingClientRect()
        let rectI = (document.getElementById("info") as HTMLElement).getBoundingClientRect()
        labelTopPosition = rectL.y + window.scrollY;
        infoTopPosition = rectI.y + window.scrollY;

        window.onscroll = ()=>{
            if(window.innerWidth > 700){

            if(labelTopPosition -1 == window.scrollY){
                fixedLabel = false;
            } else if(labelTopPosition == window.scrollY) {
                fixedLabel = true
            }

            if(infoTopPosition -1 == window.scrollY){
                fixedInfo = false;
            } else if(infoTopPosition == window.scrollY) {
                fixedInfo = true
            }
            }
        }
    })
    
</script>

<Crums/>
<section class="pt-32 w-full" id="expo">
    <div class="flex flex-row justify-center ">
        <div id="images" class="w-1/2"> 
            <img class="w-full rounded-md border-2 border-sky-500" src={data.produit.variants[selected].images[chosenImage]} alt="">
            <div class="flex flex-row items-center p-px gap-2">
                {#each data.produit.variants[selected].images as link}
                    <img src={link} alt="" class="w-1/6">
                {/each}
            </div>
<div class="hidden md:block">
            <ul id="info" class="flex flex-row justify-evenly items-center divide-x">
                <li>Propriétes</li>
                <li>Utilisations</li>
                <li>En pratique</li>
            </ul>
            <div class="">
                <h1>Proprietes</h1>
                <ul>
                    {#each data.produit.details.proprietes as propriete}
                        <li>{propriete}</li>
                    {/each}
                </ul>
            </div>
            <div>
                <h1>Utilisations</h1>
                <div class="flex flex-row items-center w-full">
                    {#each data.produit.details.utilisations.map(v=>v.categorie) as categorie, index}
                        <span class="w-1/5" on:click={()=>selectedUse=index}>
                            <img src={categorie+".png"} alt="">
                            <p class="font-light text-sm">{categorie}</p>
                        </span>
                    {/each}
                </div>
                <div class="bg-sky-500 rounded-lg p-4">{Array.isArray(data.produit.details.utilisations[selectedUse].use)?data.produit.details.utilisations[selectedUse].use.reduce((acc,cur)=>acc+=".\n"+cur, ""): data.produit.details.utilisations[selectedUse].use}</div>
            </div>
            <div>
                <h1>En Pratique</h1>

            </div>
        </div>

        </div>
        <div class="lib" id="label">
           <h1>{data.produit.titre}</h1>
           <div class="border-bottom-2 border-stone-200 w-full"></div>
           <p>{data.produit.details?.description}</p>
           <div class="border-bottom-2 border-stone-200 w-full"></div>
           <select name="" id="" on:change={(v)=>selected=parseInt(v.currentTarget.value)}>
                {#each data.produit.variants.map(v=>v.volume) as vlm, index}
                    <option value={index}>{vlm}</option>
                {/each}
           </select>
           <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row justify-center rounded-lg">
                    <button class="text-center p-4 text-2xl font-bold" on:click={()=>quantite=quantite-1==0?quantite:quantite-1}>-</button>
                    <span class="text-center font-bold text-3xl">{quantite}</span>
                    <button class="text-center p-4 text-2xl font-bold" on:click={()=>quantite+=1}>+</button>
                </div>
           </div>
           <div class="flex flex-row gap-4">
                <button class="" on:click={addToCart({titre: data.produit.titre, prix: data.produit.variants[selected].prix, image: data.produit.variants[selected].images[chosenImage], quantite: quantite, type: data.produit.type, volume: data.produit.variants[selected].volume})}></button>
           </div>
        </div>
    </div>


</section>


