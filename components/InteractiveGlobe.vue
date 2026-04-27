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
let pointerInteracting = null
let pointerInteractionMovement = 0
let phi = 4.2
let theta = 0

const onPointerDown = (e) => {
  pointerInteracting = e.clientX - pointerInteractionMovement
  if (canvasRef.value) canvasRef.value.style.cursor = 'grabbing'
}

const onPointerUp = () => {
  pointerInteracting = null
  if (canvasRef.value) canvasRef.value.style.cursor = 'grab'
}

const onPointerMove = (e) => {
  if (pointerInteracting !== null) {
    const delta = e.clientX - pointerInteracting
    pointerInteractionMovement = delta
    phi = delta / 200
  }
}

onMounted(async () => {
  // Dynamically import cobe to prevent SSR issues
  const createGlobe = (await import('cobe')).default

  if (!canvasRef.value) return

  // Check theme
  const isDark = document.documentElement.classList.contains('dark')

  globe = createGlobe(canvasRef.value, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: isDark ? 1 : 0,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: isDark ? [0.3, 0.3, 0.3] : [0.9, 0.9, 0.9],
    markerColor: [0.23, 0.51, 0.96], // Accent blue
    glowColor: isDark ? [1, 1, 1] : [0.1, 0.1, 0.1],
    markers: [
      { location: [-6.9175, 107.6191], size: 0.1 } // Bandung
    ],
    onRender: (state) => {
      if (pointerInteracting === null) {
        phi += 0.003
      }
      state.phi = phi
      state.theta = theta
      // We set width and height every frame just in case
      state.width = 1000
      state.height = 1000
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
