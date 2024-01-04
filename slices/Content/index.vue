<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ContentSlice>([
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
    <div class="px-[6%] xl:px-[10%] flex flex-col gap-12 py-16 lg:gap-20 lg:py-32">
      <section v-for="(item, index) in slice.items" :key="index" class="flex flex-col gap-2 lg:gap-4">
        <PrismicRichText :field="item.title" class="text-light-100 text-base max-w-[600px] lg:text-2xl"/>
        <PrismicRichText :field="item.content" class="font-normal text-light-200 text-sm max-w-[600px] lg:text-xl"/>
      </section>
    </div>
  </section>
</template>
