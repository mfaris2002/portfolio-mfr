<template>
  <div class="relative w-full aspect-square max-w-[500px] flex items-center justify-center mx-auto" ref="containerRef">
    <!-- Globe Canvas -->
    <canvas
      ref="canvasRef"
      style="width: 100%; height: 100%; object-fit: contain; cursor: grab; opacity: 0; transition: opacity 1s ease;"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @pointerout="onPointerUp"
      @pointermove="onPointerMove"
    ></canvas>
    
    <!-- Following Location Label -->
    <div 
      ref="labelRef"
      class="absolute flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full pointer-events-none transition-opacity duration-300 z-10"
      style="left: 50%; top: 50%; transform: translate(15px, -50%); opacity: var(--cobe-visible-bandung, 0);"
    >
      <span class="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#3b82f6]"></span>
      <span class="text-xs font-mono text-white/90 uppercase tracking-wider font-bold">Bandung, ID</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
const containerRef = ref(null)
const labelRef = ref(null)

let globe = null
let pointerInteracting = null
let pointerInteractionMovement = 0
let phi = 4.2
let theta = -0.1
let frameId = null

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
  const createGlobe = (await import('cobe')).default

  if (!canvasRef.value) return

  const isDark = document.documentElement.classList.contains('dark') || true
  const baseOptions = {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    dark: 1,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 8,
    baseColor: [0.1, 0.1, 0.1], 
    markerColor: [0.23, 0.51, 0.96],
    glowColor: [0.2, 0.2, 0.2],
  }

  globe = createGlobe(canvasRef.value, {
    ...baseOptions,
    phi: phi,
    theta: theta,
    markers: [{ location: [-6.9175, 107.6191], size: 0.1, id: 'bandung' }]
  })

  const renderLoop = () => {
    if (pointerInteracting === null) {
      phi += 0.003
    }
    
    const time = Date.now() / 1000
    const pulseSize = 0.08 + Math.sin(time * 5) * 0.04

    if (globe) {
      globe.update({
        ...baseOptions,
        phi: phi,
        theta: theta,
        markers: [{ location: [-6.9175, 107.6191], size: pulseSize, id: 'bandung' }]
      })
    }

    // Sync label position to cobe's hidden anchor div
    if (containerRef.value && labelRef.value) {
      const anchor = containerRef.value.querySelector('div[style*="--cobe-bandung"]')
      if (anchor) {
        labelRef.value.style.left = anchor.style.left
        labelRef.value.style.top = anchor.style.top
      }
    }

    frameId = requestAnimationFrame(renderLoop)
  }

  renderLoop()

  setTimeout(() => {
    if (canvasRef.value) canvasRef.value.style.opacity = '1'
  }, 100)
})

onUnmounted(() => {
  if (frameId) cancelAnimationFrame(frameId)
  if (globe) globe.destroy()
})
</script>
