<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('contact', () =>
  prismic.client.getByUID('informative', 'contact')
)

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>

<template>
  <Header />
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
  <div class="px-[6%] xl:px-[10%] flex flex-col gap-6 py-16 lg:py-32 lg:gap-12 lg:items-center lg:text-center">
    <div class="flex flex-col gap-6 lg:gap-10">
      <div class="flex flex-col gap-2 lg:gap-4">
        <h3 class="uppercase max-w-max font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-xl lg:text-5xl">CONTACT</h3>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-6 text-light-100 lg:text-xl">
      <h2 class="font-semibold">DÉPARTEMENT MÉTIERS DU MULTIMÉDIA & DE L'INTERNET DE MONTBÉLIARD</h2>
      <div class="text-[#B0B0B0]">
        <a class="underline" href="https://www.google.fr/maps/place/4+Pl.+Lucien+Tharradin+25+200,+25200+Montb%C3%A9liard/@47.4945922,6.7992135,17z/data=!3m1!4b1!4m5!3m4!1s0x479216d875036401:0xf4ceda1a2755d37f!8m2!3d47.4945922!4d6.8017884?entry=ttu">4, place Tharradin - 25200 Montbéliard</a>
        <p>Tél. <a href="tel:03 81 99 47 34">+33 3 81 99 47 34</a></p>
      </div>
      <p class="text-[#B0B0B0]">Mail BUT MMI : <a class="underline" href="mailto:dut-mmi-montbeliard@univ-fcomte.fr">dut-mmi-montbeliard@univ-fcomte.fr</a></p>
    </div>
  </div>
  <Footer />
</template>
