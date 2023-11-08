<script lang="ts">
  import {Produit} from "$lib/types";
  let produit = new Produit();

  function generateSlug(){
    produit.slug = produit.titre.toLowerCase().replace(" ", "-")
  }

  const types = ["actif", "emulsifiant", "multi-fontions", "conservateur", "texture"];
  const solubilites = ["en huile", "en eau", "en emulsion"]
  const utilisations = ["cheveaux","peau","cosmitique","detergent"]

  let selectedVarient:number = 0;

  function addVariant(){
    produit.variants = [...produit.variants, {images: "", prix: 0, volume: ""}]
  }

  function handleSubmit (e:Event){
    e.preventDefault()
    console.log(produit)
  }
  function addProperty(){
    produit.properties = [...produit.properties, ""]
  }
  function addUse(){
    produit.utilisations = [...produit.utilisations, {categorie: "peau", use: ""}]
  }
</script>

<form class="md:w-3/5 m-auto bg-white flex flex-col rounded-xl py-4 px-8 border shadow-lg " action="" on:submit={handleSubmit}>
  <!--Titre-->
  <div class="py-px">   
    <label class="font-light text-stone-600" for="">Titre</label>
    <input type="text" class="w-full" bind:value={produit.titre}>
  </div>
  <!---->
  <!--Slug-->
  <div class="py-px">   
    <label class="font-light text-stone-600" for="">Slug</label>
    <div class="flex flex-row gap-2">
      <input type="text" bind:value={produit.slug} class="basis-4/5">
      <button on:click={generateSlug} class="basis-1/5 border rounded-lg py-[2px] border-stone-200 text-zinc-500">genrate-slug</button>
    </div>
  </div>
  <!---->
  <div class="flex flex-row gap-2 items-center py-px">
    <!--Type-->
    <div class="basis-1/2">   
      <label class="font-light text-stone-600" for="">Type</label>
      <select bind:value={produit.type} class="w-full p-2">
        {#each types as type}
          <option value={type}>{type.charAt(0).toUpperCase()+type.slice(1)}</option>
        {/each}
      </select>
    </div>
    <!---->
    <!--Solubilite-->
    <div class="basis-1/2">
      <label  class="font-light text-stone-600" for="">Solubilité</label>
      <select multiple bind:value={produit.solubilite} class="w-full p-2">
        {#each solubilites as op, i}
          <option value={op} selected={i==0}>{op.charAt(0).toUpperCase()+op.slice(1)}</option>
        {/each}
      </select>
    </div>
    <!---->
  </div>
  <!--Varients-->
  <div>   
    <label class="font-light text-stone-600" for="">Varients</label>
    <div class="flex mb-2 font-thin py-px flex-row bg-gradient-to-b from-stone-200 to-zinc-300 text-sky-900 px-4 border-b-2 border-sky-900">
      <h4 class="basis-1/3">Images</h4>
      <h4 class="basis-1/3">Prix</h4>
      <h4 class="basis-1/3">Quantite/Volume</h4>
    </div>
    {#each produit.variants as variant, i}
      <div class="flex flex-row gap-2 py-px">
        <div class="basis-1/3">
          <input multiple type="file" bind:value={produit.variants[i].images}>
        </div>
        <div class="basis-1/3">
          <input type="number" bind:value={produit.variants[i].prix}>
        </div>
        <div class="basis-1/3">
          <input type="text" class="w-full" bind:value={produit.variants[i].volume}>
        </div>
      </div>
    {/each}
    <div class="flex flex-row justify-end py-2">
      <button class="px-4 py-2 bg-zinc-600 text-white rounded-lg" on:click={addVariant}>ajouter varient</button>
    </div>
  </div>
  <!---->
  <!--Proprietes-->
  <div>
    <label class="mb-2 font-light text-stone-600" for="">Proprietes</label>
    {#each produit.properties as propriete, i }
      <div class="flex flex-row gap-4 py-px">
        <span class="bg-stone-300 rounded-lg px-2 py-px text-xl text-white">{i}</span>
        <input type="text" bind:value={produit.properties[i]}>
      </div>
    {/each}
    <div class="flex flex-row justify-end py-px">
      <button on:click={addProperty} class="rounded-lg py-2 px-4 bg-zinc-600 text-white">ajouter propriete</button>
    </div>
  </div>
  <!---->
  <div class="flex flex-row gap-4 py-2">
    <!--Designation-->
    <div class="basis-1/2">
      <label class="font-light text-stone-600" for="">Désignation INCI</label>
      <input type="text" bind:value={produit.inci} class="w-full">
    </div>
    <!---->
    <!--Origine-->
    <div class="basis-1/2">
      <label class="font-light text-stone-600" for="">Origine</label>
      <input type="text" bind:value={produit.origin} class="w-full">
    </div>
    <!---->
  </div>
  <!--Utilisations-->
  <div>
    <label class="font-light text-stone-600" for="">Utilisations</label>
    {#each produit.utilisations as util, i}
      <div class="flex flex-row gap-2 items-center">
        <span class="bg-stone-300 rounded-lg px-2 py-px text-xl text-white">{i}</span>
        <select class="basis-1/5 p-2" bind:value={produit.utilisations[i].categorie}>
          {#each utilisations as cat}
            <option value={cat}>{cat.charAt(0)+cat.slice(1)}</option>
          {/each}
        </select>
        <input type="text" bind:value={produit.utilisations[i].use}>
      </div>
    {/each}
    <div class="flex flex-row justify-end py-px">
      <button on:click={addUse} class="rounded-lg py-2 px-4 bg-zinc-600 text-white">ajouter utilisation</button>
    </div>
  </div>
  <!---->
  <!--Description-->
  <div class="py-2">
    <label class="font-light text-stone-600" for="">Description</label>
    <textarea name="" style="resize: none;" bind:value={produit.description} class="rounded-lg border border-stone-500 w-full"></textarea>
  </div>
  <div class="flex flex-row justify-end gap-4">
    <input type="submit" value="Annuler" class="basis-1/4 px-4 rounded py-2 text-white bg-stone-600 shadow">
    <input type="submit" value="Enregistrer" class="basis-1/4 px-4 rounded py-2 text-white bg-sky-600 shadow">
  </div>
  <!---->
</form>

<style>
  label {
    display: block;
  }
  input {
    width: 100%;
    border: 0.1em gray solid;
    border-radius: 0.5em;
    padding-inline: 1em;
    padding-block: 0.5em;
  }
</style>
