<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageRightSlice>([
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
    <div class="px-[6%] xl:px-[10%] flex flex-col h-screen items-center gap-20 lg:justify-between lg:flex-row">
      <div class="flex flex-col gap-3 lg:gap-5">
        <PrismicRichText :field="slice.primary.title" class="max-w-max py-2 font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-xl lg:text-5xl"/>
        <PrismicRichText :field="slice.primary.content" class="text-light-200 text-sm lg:text-xl max-w-[800px]"/>
      </div>
      <PrismicImage :field="slice.primary.image" class="object-cover w-[600px]"/>
    </div>
  </section>
</template>
