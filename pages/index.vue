<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home')
)

useHead({
  title: prismic.asText(page.value?.data.title)
})

  // import { Scene } from 'three';
  // import * as THREE from 'three';

  // let renderer: THREE.WebGLRenderer;
  // const experience: Ref<HTMLCanvasElement | null> = ref(null);

  // const scene = new Scene();
  // const camera = new THREE.PerspectiveCamera( 75, 800 / 600, 0.1, 1000 );
  // camera.position.set(0, 0, 2);
 
  // scene.add(camera);

  // const sphere = new THREE.Mesh(
  //   new THREE.SphereGeometry(1, 16, 16),
  //   new THREE.MeshBasicMaterial({ color: 0xffffff })
  // );

  // scene.add(sphere);

  // function setRenderer() {
  //   if(experience.value) {
  //     renderer = new THREE.WebGLRenderer({ canvas: experience.value });
  //     renderer.setSize(800, 600);
  //   }
  //   renderer.render(scene, camera);
  // }


  // onMounted(() => {
  //   setRenderer();
  // });

</script>


<template>
  <Header/>
  
    <main class="min-h-[80vh]">
      <SliceZone class="text-light-100"
        wrapper="main"
        :slices="page?.data.slices ?? []"
        :components="components"
      ></SliceZone>
      <!-- <canvas ref="experience"/> -->
    </main>

    <Footer/>
</template>