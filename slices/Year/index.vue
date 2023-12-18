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
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="xl:px-[10%]">
      <div class="bg-dark-200 px-[28px] py-[34px] text-sm flex flex-col gap-3 font-poppins font-normal text-light-200 max-md:w-full lg:p-[50px] md:max-w-[600px] lg:rounded-xl lg:gap-5">
        <div>
          <PrismicRichText :field="slice.primary.year" class="font-marker text-light-200 text-base lg:text-xl"/>
          <PrismicRichText :field="slice.primary.title" class="max-w-max font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-xl lg:text-4xl"/>
        </div>
        <PrismicRichText :field="slice.primary.content" class="font-normal text-sm lg:text-base"/>
      </div>
    </div>
  </section>
</template>


.footericon__container {
  display: flex;
  gap: 10px;
}