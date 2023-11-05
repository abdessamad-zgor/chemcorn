<script lang="ts">
    import {page} from "$app/stores"
    let segs = $page.route.id?.split("/").filter(s=>s!="") || [] 
    function capitalize(s: string){
        return s.charAt(0).toUpperCase()+s.slice(1); 
    }
</script>

<div class="flex flex-row justify-center px-4 fixed top-0 left-0 pt-8 pb-4 items-center ">
</div>
