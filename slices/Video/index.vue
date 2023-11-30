<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.VideoSlice>([
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
    <div class="flex flex-col max-lg:items-center max-lg:text-center lg:justify-center h-[100vh] gap-5 xl:gap-10">
      <PrismicRichText :field="slice.primary.title" class="max-w-max font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-4xl xl:text-5xl"/>
      <PrismicRichText :field="slice.primary.content" class="text-light-200 text-sm xl:text-xl lg:w-[600px] xl:w-[1000px]"/>
      <PrismicImage :field="slice.primary.video"/>
    </div>
  </section>
</template>
