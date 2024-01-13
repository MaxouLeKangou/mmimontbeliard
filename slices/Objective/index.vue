<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ObjectiveSlice>([
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
    <div class="px-[6%] xl:px-[10%] flex flex-col h-screen justify-center items-center gap-10 bg-[#221F28] lg:flex-row lg:justify-between">
      <div class="flex flex-col gap-6 lg:gap-10">
        <div class="flex flex-col gap-2 lg:gap-4">
          <PrismicRichText :field="slice.primary.title" class="max-w-max py-2 font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-xl lg:text-5xl"/>
          <PrismicRichText :field="slice.primary.content" class="text-light-200 text-sm lg:text-xl max-w-[800px]"/>
        </div>
      </div>
      <PrismicImage :field="slice.primary.image" class="object-cover h-[30vh] lg:h-[50vh]"/>
    </div>
  </section>
</template>
