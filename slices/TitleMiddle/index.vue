<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TitleMiddleSlice>([
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
    <div class="px-[6%] xl:px-[10%] h-screen flex flex-col justify-center gap-3 items-center text-center lg:gap-8">
      <PrismicRichText :field="slice.primary.title" class="max-w-max font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-3xl lg:text-7xl"/>
      <PrismicRichText :field="slice.primary.content" class="font-normal text-light-100 text-sm max-w-[600px] lg:text-xl"/>
      <Button class="mt-8" buttonLink="/registration" buttonText="REJOINDRE LES LICORNES"/>
    </div>
  </section>
</template>
