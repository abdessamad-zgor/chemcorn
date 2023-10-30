<script>
    import Crums from "../../components/crums.svelte";
    let produits = [
        {
            title: "acide nilic",
            prix: 300,
            image: "https://picsum.photos/300",
            slug: "acide-nilic"
        }, 
        {
            title: "acide tobic",
            prix: 400,
            image: "https://picsum.photos/300",
            slug: "acide-tobic"
        }
    ]
</script>

<Crums/>

<section class="flex flex-col min-h-screen justify-center py-32">

<div class="m-auto w-8/12">
    <input type="text" placeholder="need something ..." class="rounded-full w-full p-4 border-4 border-zinc-300 text-xl">
    <div class="flex flex-row justify-center py-4 items-center gap-4">
        <a href="/shop/matiere" class="border rounded-xl border-sky-400 text-3xl font-ubuntu py-2 px-4">Matière 🪻</a> 
        <a href="/shop/materiel" class="border rounded-xl border-sky-400 text-3xl font-ubuntu py-2 px-4">Matériel 🥽</a>
        <a href="/debutant">Packet debutant</a>
    </div>
</div>

<div class="w-full pt-20">
    <h1 class="text-4xl font-bold px-12">🔥 Produits populaire</h1>
    <div class="flex flex-row justify-center items-center gap-8 pt-10">
        {#each produits as prod}
            <a href={'/shop/'+prod.slug} class="rounded-xl relative flex flex-col md:w-1/3 lg:w-1/6">
                <img src={prod.image} class="w-full rounded-t-xl" alt="">
                <div class="">
                    <h2 class="text-3xl decoration-zinc-300">{prod.title}</h2>
                    <span class="text-xs">{prod.prix} DH</span>
                </div>
            </a>
        {/each}
    </div>
</div>
</section>


