<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HerosSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);


const scrollDown = () => {
  const windowHeight = window.innerHeight;
  window.scrollBy({
    top: windowHeight * 1.1,
    behavior: 'smooth',
  });
};
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="px-[6%] xl:px-[10%] flex flex-col gap-5 justify-center text-center items-center h-[100vh] lg:gap-10 py-10">
      <PrismicRichText :field="slice.primary.title" class="max-w-max py-2 font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-3xl lg:text-7xl"/>
      <PrismicRichText :field="slice.primary.content" class="font-normal text-light-100 text-sm max-w-[600px] lg:text-xl"/>
      <div class="inline-block bg-dark-200 text-light-100 rounded-xl border border-width-2 border-dark-100 p-0.5 mt-3 lg:mt-5 hover:border-light-200">
        <button @click="scrollDown" class="cursor-pointer py-3 px-6 text-sm lg:text-base lg:py-3 lg:px-10">en découvrir plus</button>
      </div>
    </div>
  </section>
</template>
