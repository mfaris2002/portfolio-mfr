<template>
  <div class="relative w-full aspect-square max-w-[500px] flex items-center justify-center mx-auto">
    <canvas
      ref="canvasRef"
      style="width: 100%; height: 100%; object-fit: contain; cursor: grab; opacity: 0; transition: opacity 1s ease;"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @pointerout="onPointerUp"
      @pointermove="onPointerMove"
    ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let globe = null

onMounted(async () => {
  // Dynamically import cobe
  const createGlobe = (await import('cobe')).default

  if (!canvasRef.value) return

  let phi = 0

  globe = createGlobe(canvasRef.value, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [0.3, 0.3, 0.3],
    markerColor: [0.1, 0.8, 1],
    glowColor: [1, 1, 1],
    markers: [
      { location: [-6.9175, 107.6191], size: 0.1 } // Bandung
    ],
    onRender: (state) => {
      state.phi = phi
      phi += 0.005
    }
  })

  setTimeout(() => {
    if (canvasRef.value) canvasRef.value.style.opacity = '1'
  }, 100)
})

onUnmounted(() => {
  if (globe) globe.destroy()
})
</script>
