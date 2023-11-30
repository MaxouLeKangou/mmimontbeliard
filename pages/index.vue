<script setup lang="ts">
  import { components } from '~/slices'
  import { useWindowSize } from '@vueuse/core'
  

  const prismic = usePrismic()
  const { data: page } = useAsyncData('index', () =>
    prismic.client.getByUID('page', 'home')
  )

  useHead({
    title: prismic.asText(page.value?.data.title)
  })

  import { Scene } from 'three';
  import * as THREE from 'three';

  let renderer: THREE.WebGLRenderer;
  const experience: Ref<HTMLCanvasElement | null> = ref(null);

  const { width, height } = useWindowSize();
  const aspectRatio = computed(() => width.value / height.value);


  const bgColor = new THREE.Color(0x0C0C0D);
  const scene = new Scene();
  scene.background = bgColor;

  const camera = new THREE.PerspectiveCamera( 75,  aspectRatio.value, 0.1, 1000 );
  camera.position.set(0, 0, 2);
 
  scene.add(camera);

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x633484 })
  );

  scene.add(sphere);

  function updateRender() {
    renderer.setSize((width.value - 20), height.value);
    renderer.render(scene, camera);
  }

  function updateCamera() {
    camera.aspect = aspectRatio.value;
    camera.updateProjectionMatrix();
  }

  function setRenderer() {
    if(experience.value) {
      renderer = new THREE.WebGLRenderer({ canvas: experience.value, alpha: true });
      updateRender();
    }
  }


  watch(aspectRatio, () => {
    updateRender();
    updateCamera();
  });


  onMounted(() => {
    setRenderer();
  });

</script>


<template>
  <Header/>
  
    <main class="h-[200vh]">
      <div class="px-[6%] xl:px-[10%] absolute">
        <SliceZone class="text-light-100" wrapper="main" :components="components" :slices="page?.data.slices ?? []" />
      </div>
      <canvas ref="experience"/>
    </main>

    <Footer/>
</template>