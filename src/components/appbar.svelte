<script lang="ts">
    import { onMount } from "svelte";
    let userDrawer = false;
    let cartDrawer = false;
    let searchDrawer = false;
    let languageDrawer = false;

    let cart = [
        {
            title: "acide nilic",
            prix: 300,
            quantity: 4,
            image: "https://picsum.photos/100"
        }, 
        {
            title: "acide tobic",
            prix: 400,
            quantity: 3,
            image: "https://picsum.photos/100"
        }
    ]

    let header: HTMLElement
    onMount(()=>{
        // emplement logic to make the logo bigger ond rounder and make the rest
        // of the off bar hide on scroll and show when the logo is clicked
    })
</script>

<header bind:this={header} class="flex fixed z-10 right-0 flex-row rounded-s-full items-center shadow bg-stone-200">
    <img src="logo-chem.png" class="w-[100px]" alt="">
    <button class="text-3xl px-4 py-2 relative text-center" on:click={()=>userDrawer=!userDrawer}>
        👤
        <div class={`${userDrawer?'absolute right-0 top-[100%]':'hidden'} w-max bg-stone-200 border-4 border-zinc-600 rounded-2xl p-2 flex flex-col gap-4`}> 
            <button class="bg-blue-600 rounded-md px-4 py-2 text-xs">s'isncrire avec facebook</button>
            <button class="bg-white rounded-md px-4 py-2 text-xs">s'inscrire avec google</button>
        </div>
    </button>
    <button class="text-3xl px-4 py-2 relative text-center" on:click={()=>cartDrawer=!cartDrawer}>
        🛒
        <div class={`${cartDrawer?'absolute right-0 top-[100%]':'hidden'}  w-max bg-stone-200 border-4 border-zinc-600 rounded-2xl p-2 flex flex-col gap-4`}>
          {#each cart as item}
            <div class="p-2 border border-zinc-300 rounded flex flex-row items-center">
                <img src={item.image} alt="">
                <div class="flex-1 px-4">
                    <h1 class="text-xl">{item.title}</h1>
                    <p class="text-xs font-light">{item.prix} DH</p>
                </div>
                <div class="">
                    <p class="text-xs font-light">qte</p>
                    <p class="text-xl">{item.quantity}</p>
                </div>
            </div>
          {/each}  
          {#if cart.length!=0}
            <a href="" class="px-4 py-2">checkout</a>
          {/if}
        </div>
    </button>
    <button class="text-3xl px-4 py-2 relative text-center" on:click={()=>searchDrawer=!searchDrawer}>
        🔎
        <div class={searchDrawer?'':''}></div>
    </button>
    <button class="text-3xl px-4 py-2 relative text-center" on:click={()=>languageDrawer=!languageDrawer}>
        🌐
        <div class={languageDrawer?'':''}></div>
    </button>
</header>
