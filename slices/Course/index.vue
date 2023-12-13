<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CourseSlice>([
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
    <div class="bg-dark-200 px-[28px] py-[34px] text-sm flex flex-col gap-3">
      <PrismicRichText :field="slice.primary.title" class="max-w-max font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-2xl"/>
      
      <div class="flex gap-4 w-full text-center font-light">
        <PrismicRichText :field="slice.primary.tag_1" class="py-1 bg-dark-100 w-full rounded-md"/>
        <PrismicRichText :field="slice.primary.tag_2" class="py-1 bg-dark-100 w-full rounded-md"/>
      </div>
      <PrismicRichText :field="slice.primary.content" class="font-normal"/>
    </div>
  </section>
</template>
