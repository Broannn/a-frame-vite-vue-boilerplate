<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import '../aframe/tessaletion-square.js';

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    stats
    fog="type: linear; color: #a3d0ed; near: 30; far: 60"
    background="color: #a3d0ed;"
  >

    <a-assets @loaded="allAssetsLoaded = true">

    </a-assets>

    <template v-if="allAssetsLoaded">
      <a-entity light="type: ambient; color: #445451"></a-entity>
      <a-entity light="type: point; intensity: 2" position="0 2 -10"></a-entity>

      <a-ocean
        width="100"
        depth="100"
        amplitude="0.2"
        density="100"
        amplitudeVariance="0.1"
      ></a-ocean>


      <a-entity tesselation-square="tileSize: 1.5; cols: 5; rows: 5; offset: 0.1"></a-entity>
    </template>

    <TheCameraRig />

  </a-scene>
</template>