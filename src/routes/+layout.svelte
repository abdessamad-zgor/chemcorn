<script>
    import "../app.css"
    import Appbar from "../components/appbar.svelte";
</script>

<main class="w-full min-h-screen relative">
    <Appbar/>
    <slot/>
</main>
