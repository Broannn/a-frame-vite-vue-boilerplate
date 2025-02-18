<script setup>
  import { ref } from 'vue';

  import TheCameraRig from './TheCameraRig.vue';
  import '../aframe/tessaletion-square.js';
  import '../aframe/emit-when-near.js'

  const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene
    stats
  >

    <a-assets @loaded="allAssetsLoaded = true">
      <img id="firewatch-bg" src="/assets/firewatch-background.png" crossorigin="anonymous" />
    </a-assets>

    <template v-if="allAssetsLoaded">

      <a-sphere position="0 0 -5" emit-when-near="distance: 2"></a-sphere>
      <a-sky src="#firewatch-bg" radius="5000"></a-sky>
      
      <!-- Lumière ambiante générale -->
      <a-entity light="type: ambient; color: #445451; intensity: 0.7"></a-entity>
      
      <!-- Gradient de lumière pour la transition -->
      <a-entity light="type: hemisphere; color: #ff8533; groundColor: #445451; intensity: 0.5"></a-entity>
      <a-entity light="type: point; intensity: 0.5; distance: 50" position="0 10 -10"></a-entity>

      <a-ocean
        width="100"
        depth="100"
        amplitude="0.2"
        density="100"
        amplitudeVariance="0.1"
      ></a-ocean>


      <a-entity 
        tesseletion-square="
          boxSize: 1; 
          gap: 0.2; 
          rows: 5; 
          cols: 5;
          baseHue: 30;
          baseSaturation: 80;
          minLightness: 30;
          maxLightness: 70"
        position="0 0 -5"
      ></a-entity>
    </template>
    <TheCameraRig />

  </a-scene>
</template>