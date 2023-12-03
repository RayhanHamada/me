<script>
  import 'src/app.css';
  import Header from 'src/layouts/Header.svelte';
  import Footer from 'src/layouts/Footer.svelte';
  import Main from 'src/layouts/Main.svelte';
</script>

<Main>
  <slot />
</Main>
<Footer />
