<script>
  import "../../app.css"
  import Adminbar from "../../components/admin/adminbar.svelte";
</script>

<main class="w-full min-h-screen bg-zinc-100">
  <Adminbar/>
  <slot/>
</main>
