<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.StudentSlice>([
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
    <div class="px-[6%] xl:px-[10%] flex flex-col gap-10 py-16 lg:py-32 bg-[#221F28]">
      <div class="flex flex-col gap-6 lg:gap-10">
        <div class="flex flex-col gap-2 lg:gap-4">
          <PrismicRichText :field="slice.primary.title" class="uppercase max-w-max py-2 font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-xl lg:text-5xl"/>
          <PrismicRichText :field="slice.primary.content" class="text-light-200 text-sm lg:text-xl max-w-[800px]"/>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 text-light-100 lg:grid-cols-4 lg:gap-10">
        <section v-for="(item, index) in slice.items" :key="index" class="col-span-1">
          <NuxtLink :to="item.linkedin.url" class="flex flex-col h-full">
            <PrismicImage :field="item.image" class="object-cover rounded-md w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px]"/>
            <div class="flex-1 flex flex-col justify-between">
              <div class="flex flex-col gap-3">
                <div class="flex flex-col pt-2">
                  <PrismicRichText :field="item.name" class="font-marker text-sm md:text-lg lg:text-xl"/>
                  <div class="flex gap-2 text-xs lg:text-base">
                    <PrismicRichText :field="item.work"/>
                    <div class="flex">
                      <span>@</span>
                      <PrismicRichText :field="item.companie"/>
                    </div>
                  </div>
                </div>
                <div class="flex items-center">
                  <p class=" text-light-100 font-semibold text-xs lg:text-sm">LINKEDIN</p>
                  <Arrow class="h-3 lg:h-4"/>
                </div>
              </div>
            </div>
          </NuxtLink>
        </section>
      </div>
    </div>
  </section>
</template>
