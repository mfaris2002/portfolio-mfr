<template>
  <div class="bg-contrast text-primary min-h-screen relative font-sans">
    <!-- Grid Background Pattern -->
    <div class="fixed inset-0 pointer-events-none z-0" style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 50px 50px;"></div>

    <main class="relative z-10">
      <!-- Section A: Hero -->
      <section class="h-screen flex items-center justify-center relative overflow-hidden px-6" id="hero">
        <div class="absolute w-full flex justify-center text-center overflow-hidden">
          <h1 class="hero-bg text-[25vw] md:text-[20vw] font-bold leading-none text-white/5 font-mono select-none">MFR</h1>
        </div>
        <div class="hero-fg z-10 text-center">
          <h2 class="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 text-white uppercase">System Implementor</h2>
          <p class="text-xl md:text-2xl text-white/60 font-mono flex items-center justify-center gap-4">
            <span class="w-12 h-px bg-accent"></span>
            Web Developer
            <span class="w-12 h-px bg-accent"></span>
          </p>
        </div>
      </section>

      <!-- Section B: Capabilities -->
      <section class="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="capabilities">
        <h2 class="text-4xl font-mono mb-20 text-white text-center uppercase tracking-widest">Technical Capabilities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 border border-white/20 reveal-container">
          <div class="bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-4 group-hover:text-accent transition-colors">API Integration</h3>
            <p class="text-white/60">Connecting disparate systems seamlessly, ensuring secure and high-performance data exchange.</p>
          </div>
          <div class="bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-4 group-hover:text-accent transition-colors">Software Deployment</h3>
            <p class="text-white/60">Containerizing applications with Docker and ensuring zero-downtime continuous deployment.</p>
          </div>
          <div class="bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-4 group-hover:text-accent transition-colors">QA Testing</h3>
            <p class="text-white/60">Rigorous automated and manual testing methodologies to guarantee robust applications.</p>
          </div>
          <div class="bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-4 group-hover:text-accent transition-colors">Vue.js Development</h3>
            <p class="text-white/60">Building reactive, high-performance user interfaces focusing on client-side optimization.</p>
          </div>
        </div>
      </section>

      <!-- Section C: Experience -->
      <section class="py-32 px-6 md:px-12 max-w-4xl mx-auto" id="experience">
        <h2 class="text-4xl font-mono mb-20 text-white text-center uppercase tracking-widest">Professional Experience</h2>
        <div class="border-l border-white/20 pl-8 md:pl-12 space-y-24 reveal-container">
          <div class="reveal relative">
            <div class="absolute -left-[38px] md:-left-[54px] w-3 h-3 bg-accent rounded-full mt-2 outline outline-4 outline-contrast"></div>
            <h3 class="text-2xl font-mono font-bold text-white mb-2">System Implementor <span class="text-accent font-normal">@ Terakorp</span></h3>
            <span class="text-white/40 text-sm font-mono block mb-6 uppercase tracking-wider">Present</span>
            <p class="text-white/70 leading-relaxed text-lg">Managing the end-to-end implementation lifecycle of software solutions. Coordinating between development teams and clients to ensure smooth rollout and adoption of technological improvements.</p>
          </div>
          <div class="reveal relative">
            <div class="absolute -left-[38px] md:-left-[54px] w-3 h-3 bg-white/40 rounded-full mt-2 outline outline-4 outline-contrast"></div>
            <h3 class="text-2xl font-mono font-bold text-white mb-2">Web Developer</h3>
            <span class="text-white/40 text-sm font-mono block mb-6 uppercase tracking-wider">Past</span>
            <p class="text-white/70 leading-relaxed text-lg">Developed scalable web applications utilizing modern JavaScript frameworks, integrating complex backend APIs, and crafting responsive user interfaces with attention to aesthetic detail.</p>
          </div>
        </div>
      </section>

      <!-- Section D: Projects -->
      <section class="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="projects">
        <h2 class="text-4xl font-mono mb-20 text-white text-center uppercase tracking-widest">Selected Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-container">
          <!-- Project 1 -->
          <div class="border border-white/20 p-6 md:p-8 reveal group cursor-pointer bg-black/50 hover:bg-black transition-colors duration-500 overflow-hidden relative">
            <div class="aspect-video w-full overflow-hidden mb-8 bg-white/5 relative">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Strive" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            </div>
            <h3 class="text-3xl font-mono text-white mb-4">Strive</h3>
            <p class="text-white/60 mb-6 text-lg">High-performance project management dashboard with real-time analytics and GSAP integrations.</p>
            <span class="text-accent text-sm font-mono uppercase tracking-widest flex items-center gap-2">View Case Study <span class="group-hover:translate-x-2 transition-transform duration-300">→</span></span>
          </div>
          
          <!-- Project 2 -->
          <div class="border border-white/20 p-6 md:p-8 reveal group cursor-pointer bg-black/50 hover:bg-black transition-colors duration-500 overflow-hidden relative mt-0 md:mt-24">
            <div class="aspect-video w-full overflow-hidden mb-8 bg-white/5 relative">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Digital Hub" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            </div>
            <h3 class="text-3xl font-mono text-white mb-4">Digital Hub</h3>
            <p class="text-white/60 mb-6 text-lg">Centralized integration platform unifying disparate APIs into a single seamless portal.</p>
            <span class="text-accent text-sm font-mono uppercase tracking-widest flex items-center gap-2">View Case Study <span class="group-hover:translate-x-2 transition-transform duration-300">→</span></span>
          </div>
        </div>
      </section>

      <footer class="py-16 border-t border-white/10 text-center px-6 mt-20">
        <p class="text-white/40 font-mono text-sm tracking-widest uppercase">© {{ new Date().getFullYear() }} Muhamad Faris Rafi. All Rights Reserved. | v1.0.1</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  if (typeof window === 'undefined') return;
  
  // 1. Lenis Initialization
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false
  })
  
  lenis.on('scroll', ScrollTrigger.update)
  
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  
  gsap.ticker.lagSmoothing(0)
  
  // 2. Global Scroll Trigger
  gsap.registerPlugin(ScrollTrigger)
  
  // Parallax for Hero
  gsap.to('.hero-bg', {
    yPercent: 40,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })
  
  gsap.to('.hero-fg', {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })

  // 3. Staggered reveal for cards and sections
  const revealContainers = document.querySelectorAll('.reveal-container')
  
  revealContainers.forEach(container => {
    const reveals = container.querySelectorAll('.reveal')
    gsap.fromTo(reveals, 
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true
        }
      }
    )
  })

  // Ensure calculations are correct after hydration
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 500)

  // Cleanup on unmount
  onUnmounted(() => {
    lenis.destroy()
    ScrollTrigger.getAll().forEach(t => t.kill())
  })
})
</script>
