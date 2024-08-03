<script lang="ts">
  import { CVURL, avatarURL, links } from "src/utils/constants";
</script>

<div class="w-full flex flex-col items-center space-y-4 lg:px-10">
  <img
    src={avatarURL}
    alt="Foto Profil"
    width="200"
    height="200"
    class="w-[120px] rounded-full md:w-[200px]"
  />
  <p class="text-white md:text-2xl font-bold text-center">
    Muhammad Rayhan Hamada Budiman
  </p>
  <p class="text-xs md:text-base">Student - Software Engineer - Programmer</p>
  <div class="flex flex-row space-x-4">
    {#each links as lo}
      <a href={lo.link} target="_blank" rel="noreferrer">
        <img
          width="25"
          height="25"
          class="size-[25px] md:size-[45px]"
          src={lo.logo}
          alt={lo.logo}
        />
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
