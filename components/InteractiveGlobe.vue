<template>
  <div class="relative w-full aspect-square max-w-[500px] flex items-center justify-center mx-auto" ref="containerRef">
    <canvas
      ref="canvasRef"
      class="w-full h-full object-contain cursor-grab active:cursor-grabbing"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @pointerout="onPointerUp"
      @pointermove="onPointerMove"
      style="opacity: 0; transition: opacity 1s ease;"
    ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import createGlobe from 'cobe'

const canvasRef = ref(null)
const containerRef = ref(null)

let globe = null
let phi = 4.2 // Initial rotation to face Indonesia
let theta = 0.2
let pointerInteracting = null
let pointerInteractionMovement = 0
let width = 0
let currentPhi = 4.2
let currentTheta = 0.2
let observer = null

// Accent color RGB: #3b82f6 -> [0.23, 0.51, 0.96]
const accentColor = [0.23, 0.51, 0.96]

const initGlobe = () => {
  if (!canvasRef.value || !containerRef.value) return

  width = containerRef.value.offsetWidth
  if (width === 0) width = 400 // fallback

  const isDark = document.documentElement.classList.contains('dark')

  globe = createGlobe(canvasRef.value, {
    devicePixelRatio: 2,
    width: width * 2,
    height: width * 2,
    phi: 0,
    theta: 0,
    dark: isDark ? 1 : 0,
    diffuse: isDark ? 1.2 : 1.0,
    mapSamples: 16000,
    mapBrightness: isDark ? 6 : 1.2,
    baseColor: isDark ? [0.15, 0.15, 0.15] : [0.95, 0.95, 0.95],
    markerColor: accentColor,
    glowColor: isDark ? [0.1, 0.1, 0.1] : [0.9, 0.9, 0.9],
    markers: [
      { location: [-6.9175, 107.6191], size: 0.1 } // Bandung
    ],
    onRender: (state) => {
      // Auto-rotation when not interacting
      if (pointerInteracting === null) {
        phi += 0.003
      }

      // Smooth damping
      currentPhi += (phi - currentPhi) * 0.1
      currentTheta += (theta - currentTheta) * 0.1

      state.phi = currentPhi
      state.theta = currentTheta

      // Pulsing effect for the marker
      const time = Date.now() / 1000
      state.markers[0].size = 0.06 + Math.sin(time * 4) * 0.03
    }
  })

  setTimeout(() => {
    if (canvasRef.value) canvasRef.value.style.opacity = '1'
  }, 100)
}

onMounted(() => {
  setTimeout(() => {
    initGlobe()
  }, 200)

  window.addEventListener('resize', onResize)
  
  // Re-init on theme change
  observer = new MutationObserver(() => {
    if (globe) {
      globe.destroy()
      initGlobe()
    }
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onUnmounted(() => {
  if (globe) globe.destroy()
  if (observer) observer.disconnect()
  window.removeEventListener('resize', onResize)
})

let resizeTimeout
const onResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    if (globe) {
      globe.destroy()
      initGlobe()
    }
  }, 300)
}

// Drag Interaction Logic
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
</script>
