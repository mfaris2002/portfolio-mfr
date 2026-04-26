<template>
  <div ref="cursor" class="fixed top-0 left-0 w-4 h-4 bg-transparent border-2 border-accent rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 opacity-0"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'

const cursor = ref(null)
let xTo, yTo
let links = []

onMounted(() => {
  if (typeof window === 'undefined' || !cursor.value) return

  // GSAP quickTo for smooth performance
  xTo = gsap.quickTo(cursor.value, "x", {duration: 0.15, ease: "power3"})
  yTo = gsap.quickTo(cursor.value, "y", {duration: 0.15, ease: "power3"})

  const onMouseMove = (e) => {
    // Show cursor on first move
    gsap.to(cursor.value, { opacity: 1, duration: 0.3, overwrite: "auto" })
    xTo(e.clientX)
    yTo(e.clientY)
  }

  window.addEventListener("mousemove", onMouseMove)

  const onEnter = () => gsap.to(cursor.value, { scale: 2.5, backgroundColor: '#3b82f6', duration: 0.3 })
  const onLeave = () => gsap.to(cursor.value, { scale: 1, backgroundColor: 'transparent', duration: 0.3 })

  // Find interactive elements
  links = document.querySelectorAll('a, button, .group, .reveal')
  
  links.forEach((el) => {
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
  })

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener("mousemove", onMouseMove)
    links.forEach((el) => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    })
  })
})
</script>

<style>
/* Hide default cursor on desktop */
@media (pointer: fine) {
  body {
    cursor: none;
  }
  a, button, .group, .reveal {
    cursor: none !important;
  }
}
</style>
