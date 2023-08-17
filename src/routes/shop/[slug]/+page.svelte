<script>
    import Crums from "../../../components/crums.svelte";
    let produit = {
        titre: "Acide Nilic",
        prix: 400,
        unite: "KG",
        image: "https://picsum.photos/400"
    }
</script>

<Crums/>
<section class="pt-32 w-full">
    <div class="border-4 border-zinc-300 rounded-xl w-11/12 p-2 md:w-10/12 m-auto flex flex-row lg:w-8/12">

        
        <img src={produit.image} class="w-1/2 rounded-xl" alt="">
        

        <div class="w-1/2 p-10 relative">
            <h1 class="border-l-[16px] border-sky-400 text-6xl">{produit.titre}</h1>
            <p class="font-light text-2xl">{produit.prix} DH</p>
            <div class="absolute bottom-0 left-0 right-0 px-8 py-10 gap-4 flex flex-row items-center">
                <button class="bg-sky-500 rounded-lg shadow px-4 py-2 text-lg">Ajouter au panier</button>
                <button class="bg-green-500 rounded-lg shadow px-4 py-2 text-lg">Consulter sur Whatsapp</button>
            </div>
        </div>
    </div>
</section>


