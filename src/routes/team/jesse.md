---
dir: team
title: 'Jesse'
---

<script>
  import { Img, Heading, P, Blockquote } from 'flowbite-svelte';
</script>

<Heading class="p-8" tag="h1" customSize="text-3xl">{title}</Heading>
<Blockquote class="px-8 py-4">Stay a while.. and listen.</Blockquote>

<P class="px-8 py-4">
I've been an avid video gamer from an early age. Starting with Super Mario and Tetris on Nintendo's Gameboy. From this I graduated onto PC gameing, where I fell in love with Heroes of Might & Magic 2 & 3, Civilzations and Terminal Velocity
</P>
<div class="container mx-auto px-8 py-4 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/tides_of_darkness.jpg"/>
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="terminal velocity video game by 3D Realms"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/terminal_velocity.jpg" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/hom3.jpeg" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/diablo1.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/monkey_island.jpeg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="/images/mario.jpeg" />
      </div>
    </div>
  </div>
</div>




