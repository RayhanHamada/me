<script>
  import "src/app.css";
  import Main from "src/layouts/Main.svelte";
  import { avatarURL } from "src/utils/constants";
</script>

<svelte:head>
  <link rel="shortcut icon" href={avatarURL} type="image/x-icon" />
</svelte:head>

<Main>
  <slot />
</Main>
