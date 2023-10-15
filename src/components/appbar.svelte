<script lang="ts">
    import { onMount } from "svelte";
    import {store} from "$lib/store"
    import Searchbar from "./searchbar.svelte";
    let show = false;
    let drawerName = "";
    let expand = true;
    let scroll = 0;
    let mobExpand = false;
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
        window.onscroll = ()=>{
            console.log(window.scrollY, "is scrolling")
            scroll = window.scrollY;
        }
    })

    function setDrawerName(name: string) {
        return ()=>{
            drawerName = name
            show=true
        }
    }

    $: (()=>{
        if (scroll == 0) expand = true;
        else expand = false;
    })()
</script>

<header bind:this={header} class="fixed hidden md:block z-10 right-0 ">
    <div class={`icons ${expand? "no-hide":"hide"} flex bg-stone-200 py-4 shadow relative flex-row items-center`}>
        
        <div id="logo" on:click={()=>expand=!expand} class={`top-0 absolute ${expand?"no-scale": "scale"} bottom-0 bg-stone-200 shadow rounded-s-full right-[99%] w-1/5 py-4`}>
            <img src="logo-chem.png" class="w-full bg-stone-200 rounded-s-full" alt="">
        </div>
        <button class="text-3xl px-4 py-2 relative text-center" on:click={setDrawerName("user")}>
        👤
        </button>
        <button class="text-3xl px-4 py-2 relative text-center" on:click={setDrawerName("cart")}>
        🛒
        </button>
        <button class="text-3xl px-4 py-2 relative text-center" on:click={setDrawerName("search")}>
            🔎
        </button>
        <button class="text-3xl px-4 py-2 relative text-center" on:click={setDrawerName("languages")}>
            🌐
        </button>
    </div>
    <div id="drawer" class={`absolute origin-top-left top-[100%] left-0 rounded-lg ${show?'show':"no-show"}`}>
        {#if drawerName =="user" }
            {#if $store.user} 
                <div class="w-full p-2 flex flex-row ">
                    <div class="w-1/4 flex flex-col">
                        <span class="text-3xl">👤</span>
                    </div>
                    <div class="w-3/4 flex flex-col divide-y">
                        <div class=""></div>
                        <a class="text-xl font-light py-2 px-px" href="/commandes">Mes commandes</a>
                        <a  class="text-xl font-light py-2 px-px" href="/profile">Profile</a>
                        <a class="text-xl font-light py-2 px-px" href="/wishlist">Ma wishlist</a>
                    </div>
                </div>   
            {:else}
                <div class="flex flex-col w-full">
                    <button class="bg-blue-600 font-light">
                    S'inscrire au Facebook
                    </button>
                    <button class="bg-blue-600 font-light">
                    S'inscrire au Google
                    </button>
                </div>
            {/if}
        {:else if drawerName=="cart"}
            <div class="flex flex-col items-center">
             {#if $store.cart.length !=0}   
                {#each $store.cart as item }
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
                <a href="/checkout" class="font-bold">checkout -;&gt;</a>
            {:else} 
                <div class="flex flex-row justify-center items-center"> 
                    <p>Rien a voir!  <a href="/shop"> Aller ici </a></p>
                </div>
            {/if}

            </div>
        {:else if drawerName=="search"}
            <Searchbar mini={true}/>
        {:else if drawerName=="languages"}
 <a href=""></a>

        {:else}
         ""
        {/if}
    </div>
</header>


<header class="fixed top-0 right-0 bg-stone-200 md:hidden">
    
        <div id="logo" on:click={()=>mobExpand=!mobExpand} class= "bg-stone-200 shadow rounded-bl-full w-1/5 py-4 relative">
            <img src="logo-chem.png" class="w-full bg-stone-200 rounded-s-full" alt="">
            <div class={`icons ${mobExpand? "":""}`}>

            </div>
        </div>
</header>

<style>
@keyframes hide {
    0%{
        right: 0%;
    }
    100%{
        right: -100%;
    }
}

@keyframes mob-hide{
    0%{
        bottom: 0%;
    }
    100%{
        bottom: -100%
    }
}

@keyframes scale {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.8);
    }
}

@keyframes show {
    0%{
        transform: rotate(-90deg);
    }
    100%{
        transform: rotate(0);
    }
}


.show{
    animation: 0.5s 1 forwards show;
}
.no-show{
    animation: 0.5s 1 forwards reverse show;
}

#drawer{
    transform: rotate(-90deg);
}

.hide{
    animation: 0.5s 1 forwards hide;
}
.no-hide{
    animation: 0.5s 1 forwards reverse hide;
}

.scale{
    transform-origin: top right;
    animation: 0.5s 1 forwards scale;
}
.no-scale{
    transform-origin: top right;
    animation: 0.5s 1 forwards reverse scale;
}

</style>
