<script lang="ts">
    import {page} from "$app/stores"
    let segs = $page.route.id?.split("/").filter(s=>s!="") || [] 
    function capitalize(s: string){
        return s.charAt(0).toUpperCase()+s.slice(1); 
    }
</script>

<div class="flex flex-row justify-center px-4 fixed top-0 left-0 pt-8 pb-4 items-center border-b-8 border-sky-400">
    <a href="/" class="text-4xl">🏠</a>
    {#if segs.length!=0} 
        {#each segs  as seg }
            <span class="text-3xl font-bold px-2">&gt;</span>
            <a href="/" class="text-3xl font-ubuntu font-light">{seg.charAt(0)=="["?capitalize($page.params[seg.slice(1,seg.length-1)]):capitalize(seg)}</a>
        {/each}
    {/if}
</div>
