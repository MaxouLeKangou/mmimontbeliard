<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('registration', () =>
  prismic.client.getByUID('informative', 'registration')
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
  <div class="px-[6%] xl:px-[10%] h-screen flex flex-col justify-center gap-3 items-center text-center lg:gap-8">
    <h2 class="max-w-max font-marker bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text text-3xl lg:text-7xl">POSTULER EN MMI</h2>
    <p class="font-normal text-light-100 text-sm max-w-[600px] lg:text-xl">Pour s’inscrire, il est indispensable de constituer un dossier de candidature et de valider toutes les étapes du processus d'inscription préalable sur Parcoursup</p>
    <Button class="mt-8" buttonLink="https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=3587&typeBac=0" buttonText="DÉPOSER UNE CANDIDATURE"/>
  </div>
  <Footer />
</template>
