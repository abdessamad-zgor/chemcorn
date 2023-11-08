<script>
  import "../../app.css"
  import Appbar from "../../components/app/appbar.svelte";
</script>

<main class="w-full min-h-screen">
    <Appbar/>
    <slot/>
</main>
