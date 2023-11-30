<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >

    <div class="flex flex-col max-lg:items-center max-lg:text-center lg:justify-center h-[80vh] gap-5 xl:gap-10">
      <PrismicRichText :field="slice.primary.title" class="font-marker text-4xl xl:text-7xl"/>
      <PrismicRichText :field="slice.primary.content" class="text-light-200 text-sm xl:text-xl lg:w-[400px] xl:w-[600px]"/>
      <div class="flex gap-5 xl:gap-10">
        <Button buttonLink="/extras" buttonText="S'INSCRIRE"/>
        <Button buttonLink="/extras" buttonText="ESPACE PRO"/>
      </div>
    </div>
    

  </section>
</template>
