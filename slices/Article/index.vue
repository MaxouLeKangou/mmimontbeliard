<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ArticleSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="mx-[6%] xl:mx-[10%] grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-10">
    <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      class="col-span-1"
    >
      <NuxtLink :to="'students/' + slice.primary.link.uid" class="block bg-dark-200 rounded-b-md lg:rounded-b-xl">
        <PrismicImage :field="slice.primary.image" class="object-cover w-full h-[100px] rounded-t-md sm:h-[150px] md:h-[200px] lg:rounded-t-xl"/>
        <div class="p-3 lg:p-6">
          <div class="flex flex-col gap-1 lg:gap-2">
            <PrismicRichText :field="slice.primary.place" class="text-[10px] text-light-200 lg:text-sm"/>
            <PrismicRichText :field="slice.primary.title" class="text-sm font-semibold lg:text-xl"/>
          </div>
          <p class="text-[10px] text-light-200 pt-4 lg:pt-6 lg:text-sm">000 vues ・ {{ slice.primary.date }}</p>
        </div>
      </NuxtLink>
    
    </section>
  </div>
</template>
