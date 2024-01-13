<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.QualitySlice>([
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
    <div class="px-[6%] xl:px-[10%] flex flex-col gap-10 lg:gap-20 py-16 lg:py-32 bg-[#221F28]">
      <div class="flex flex-col gap-6 lg:gap-10">
        <div class="flex flex-col gap-2 lg:gap-4">
          <PrismicRichText :field="slice.primary.title" class="uppercase max-w-max py-2 font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-xl lg:text-5xl"/>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-16 text-light-100 lg:grid-cols-3 lg:gap-20">
        <section v-for="(item, index) in slice.items" :key="index" class="col-span-1">
          <div class="text-light-200 flex flex-col gap-2 w-full">
            <PrismicRichText :field="item.title" class="text-light-100 text-lg lg:text-2xl"/>
            <PrismicRichText :field="item.content" class=" text-sm lg:text-base"/>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
