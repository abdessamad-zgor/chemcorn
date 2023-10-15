<script>

const icons = ['🧪','⚗️','🥽','🪻','🌺','🫧', '🔬', '📝']

let counter = 0;

$:(()=>{
        setTimeout(()=>{
            if(counter == icons.length-1) counter = 0;
            else counter +=1
        }, 500)
    })()

</script>


<section class="w-full shadow bg-stone-100" id="bonjour">
    <h1 class="text-4xl md:text-8xl md:pl-12 lg:pl-20 md:pt-20 lg:pt-32 font-ubuntu text-zinc-800"> Bonjour 👩‍🔬 </h1>
    <p class="font-play text-4xl md:pl-12 lg:pl-20 py-8">viens vior ce que nous avons a partagé</p>
    <div class="flex flex-rox gap-8 justify-end md:pl-12 lg:pl-20 lg:px-20 pb-12"> 
        <a href="#" class="font-ubuntu py-4 text-sky-600 text-2xl">Je suis debutant -&gt;</a>
        <a href="/recettes" class="bg-sky-400 font-ubuntu px-8 py-4 rounded-xl text-2xl"> 🗒️ Voir nos recettes</a>
    </div>
</section>

<section class="w-full shadow bg-stone-900 rounded" id="zin">
    <div class="flex flex-row justify-end px-12">
        <h1 class=" text-white text-5xl font-ubuntu md:pl-20 lg:pl-32 md:pt-12 lg:pt-16">Vous avez besion de {icons[counter]} ?</h1>
    </div>
    <div class="flex flex-row px-8 py-12 items-center relative">
        
        <div class="flex-1 flex flex-row">
            <div class="w-1/3 flex flex-col items-center">
                <img src="chem-illus-1/1.png" class="border-4 w-2/3 p-2 border-zinc-200 rounded-full" alt="">
                <h1 class="text-center font-light text-2xl text-zinc-200">Matériel</h1>
            </div>
            <div class="w-1/3 flex flex-col items-center">
                <img src="chem-illus-1/2.png" class="border-4 w-2/3 p-2 border-zinc-200 rounded-full" alt="">
                <h1 class="text-center font-light text-2xl text-zinc-200">Matière</h1>
            </div>
        </div>
    <div class="flex flex-row justify-end">
            <a class="float-right bg-sky-400 text-2xl rounded-xl px-8 py-4 font-ubuntu" href="/shop">Voir notre Shop 🛍️</a>
        </div>
    
    </div>
</section>

<div class="flex flex-col rounded-tr-3xl absolute bottom-0 left-0 bg-sky-300 ">
    <h1 class="text-3xl px-4 pt-8 font-play">S'inscrire pour recevior des nouvoutés </h1>
    <div class="flex flex-row justify-end px-4 pb-4">
        <button class="bg-stone-900 px-4 py-2 text-xl rounded-xl text-white font-ubuntu font-bold">S'inscrire</button>
    </div>
</div>

<section class="bg-sky-200 rounded pt-4 md:pt-8 lg:pt-12 px-32">
<div class="w-full">

<div class=" border-r-[35px] border-sky-500 md:w-10/12 lg:w-8/12 w-11/12 backdrop-blur bg-white/70 shadow p-4 md:p-8 lg:px-10 lg:py-4 flex flex-row items-center">
    <img src="logo-chem.png" class="w-3/12" alt="">
    <div class="flex-col flex gap-4 w-9/12">
        <h1 class="font-bold font-ubuntu border-l-[12px] border-l-sky-500 text-4xl pl-2">Qui sommes nous ?</h1>
        <p class="text-center font-play"> Nous sommes des specialites on cosmetiques et parfumerie notre mission est de partager l'info sur ce domain et facilite l'access au recources et informations .</p>
    </div>
</div>
</div>


<div class="w-full flex flex-row justify-end">
<div class=" border-l-[35px] border-sky-500 md:w-10/12 lg:w-8/12 w-11/12 backdrop-blur bg-white/70 shadow p-4 md:p-8 lg:px-10 lg:py-4 flex flex-row items-center">
    <div class="flex-col flex gap-4 w-9/12">
        <h1 class="font-bold font-ubuntu border-l-[12px] border-l-sky-500 text-4xl pl-2">Nos recettes .</h1>
        <p class="text-center font-play"> Des recettes bien crées et rechereche d'origine traditionelle et autres rédiges aprés la recherce scientifiques .</p>
    </div>
    <img src="recipe.png" class="w-3/12" alt="">
</div>
</div>
<div class="w-full">
<div class=" border-r-[35px] border-sky-500 md:w-10/12 lg:w-8/12 w-11/12 backdrop-blur bg-white/70 shadow p-4 md:p-8 lg:px-10 lg:py-4 flex flex-row items-center">
<div class="w-3/12 text-8xl text-center"> 🛍️</div>
    <div class="flex-col flex gap-4 w-9/12">
        <h1 class="font-bold font-ubuntu border-l-[12px] border-l-sky-500 text-4xl pl-2">Notre shop</h1>
        <p class="text-center font-play">Une devirsité de materiel et matieres premieres que est indespensable pour tes expresions geniaux de beuaté .</p>
    </div>
</div>
</div>
</section>

<style>
#bonjour{
    background-image: url("bg-bonjour.png");
    background-size: cover;
}
#zin{
    background-image: url("zin.png");
    background-attachment: fixed;
}
</style>
