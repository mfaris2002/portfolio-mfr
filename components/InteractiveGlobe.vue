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
let phi = 4.2 // Center on Indonesia
let theta = -0.1 // Tilt slightly to center Bandung (-6.9 lat)

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
  // Dynamically import cobe
  const createGlobe = (await import('cobe')).default

  if (!canvasRef.value) return

  const isDark = document.documentElement.classList.contains('dark') || true

  globe = createGlobe(canvasRef.value, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 4.2,
    theta: -0.1,
    dark: 1, // Force dark mode for contrast
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 8, // Boost brightness
    // In dark:1, baseColor [0.1,0.1,0.1] produces [0.9,0.9,0.9] (Bright White) dots!
    baseColor: [0.1, 0.1, 0.1], 
    markerColor: [0.23, 0.51, 0.96], // Accent blue
    glowColor: [0.2, 0.2, 0.2], // Subtle glow so it doesn't wash out dots
    markers: [
      { location: [-6.9175, 107.6191], size: 0.1 } // Bandung
    ],
    onRender: (state) => {
      if (pointerInteracting === null) {
        phi += 0.003
      }
      state.phi = phi
      state.theta = theta
      
      // Pulsing effect
      const time = Date.now() / 1000
      const pulseSize = 0.08 + Math.sin(time * 5) * 0.04
      state.markers = [
        { location: [-6.9175, 107.6191], size: pulseSize }
      ]
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
