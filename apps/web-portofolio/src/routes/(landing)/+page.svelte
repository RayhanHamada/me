<script lang="ts">
  import { CVURL, links } from 'src/utils/constants';

  export let data;
</script>

<div class="w-full flex flex-col items-center space-y-4 lg:px-10">
  <img
    src={data.avatarURL}
    alt="Foto Profil"
    class="w-[120px] max-w-[200px] h-auto rounded-full md:w-[200px]"
  />
  <p class="text-white md:text-2xl font-bold text-center">
    Muhammad Rayhan Hamada Budiman
  </p>
  <p class="text-xs md:text-base">Student - Software Engineer - Programmer</p>
  <div class="flex flex-row space-x-4">
    {#each links as lo}
      <a href={lo.link} target="_blank" rel="noreferrer">
        <img class="h-[25px] md:h-[45px]" src={lo.logo} alt={lo.logo} />
      </a>
    {/each}
  </div>
  <a
    href={CVURL}
    target="_blank"
    rel="noreferrer"
    class="font-bold underline underline-offset-4">My CV</a
  >
</div>
