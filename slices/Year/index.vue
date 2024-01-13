<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.YearSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section class="mx-[6%] xl:mx-[10%] py-16 lg:py-32" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <div class="flex flex-col gap-20">
      <div class="flex flex-col gap-3 lg:gap-5">
        <PrismicRichText :field="slice.primary.title" class="max-w-max py-2 font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-xl lg:text-5xl"/>
        <PrismicRichText :field="slice.primary.content" class="text-light-200 text-sm lg:text-xl max-w-[800px]"/>
      </div>
      
      <div class="grid gap-5 lg:grid-cols-3">
        <div v-for="(item, index) in slice.items" :key="index" class="bg-dark-200 px-[28px] py-[34px] text-sm flex flex-col gap-3 font-poppins font-normal text-light-200 lg:p-[32px] lg:rounded-xl lg:gap-5">
          <div>
            <PrismicRichText :field="item.year" class="font-marker text-light-200 text-base lg:text-xl"/>
            <PrismicRichText :field="item.title" class="max-w-max py-2 font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-xl lg:text-4xl"/>
          </div>
          <PrismicRichText :field="item.content" class="font-normal text-sm lg:text-base"/>
        </div>
      </div>
    </div>
  </section>
</template>


