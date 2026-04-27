<template>
  <div class="bg-white dark:bg-contrast text-gray-900 dark:text-primary min-h-screen relative font-sans transition-colors duration-500">
    <CustomCursor />
    
    <!-- Dark Mode Toggle -->
    <button @click="toggleDarkMode" class="fixed top-6 right-6 z-50 p-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-300 backdrop-blur-md group cursor-pointer" aria-label="Toggle Dark Mode">
      <Sun v-if="isDark" class="w-5 h-5 text-white/80 group-hover:text-accent transition-colors" />
      <Moon v-else class="w-5 h-5 text-gray-700 group-hover:text-accent transition-colors" />
    </button>

    <!-- Grid Background Pattern -->
    <div class="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-100 transition-opacity duration-500" style="background-image: linear-gradient(to right, rgba(150, 150, 150, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(150, 150, 150, 0.05) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <div class="fixed inset-0 pointer-events-none z-0 hidden dark:block" style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 50px 50px;"></div>

    <main class="relative z-10">
      <!-- Section A: Hero -->
      <section class="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden px-6 max-w-7xl mx-auto gap-8 pt-10" id="hero">
        <div class="absolute w-full flex justify-center text-center overflow-hidden z-0">
          <h1 class="hero-bg text-[25vw] md:text-[20vw] font-bold leading-none text-black/5 dark:text-white/5 font-mono select-none transition-colors duration-500">MFR</h1>
        </div>
        
        <!-- Left: Text -->
        <div class="hero-fg z-10 text-center md:text-left flex-1 w-full flex flex-col justify-center">
          <h2 class="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tighter mb-6 text-gray-900 dark:text-white uppercase transition-colors duration-500 leading-none">Muhamad Faris<br/>Rafi</h2>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-white/60 font-mono flex items-center justify-center md:justify-start gap-4 transition-colors duration-500">
            <span class="w-12 h-px bg-accent hidden md:block"></span>
            Web Developer
            <span class="w-12 h-px bg-accent"></span>
          </p>
        </div>

        <!-- Right: Globe -->
        <div class="hero-fg z-10 flex-1 w-full max-w-md relative mt-8 md:mt-0">
          <InteractiveGlobe />
        </div>
      </section>

      <!-- Section B: Capabilities -->
      <section class="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="capabilities">
        <h2 class="text-4xl font-mono mb-20 text-gray-900 dark:text-white text-center uppercase tracking-widest transition-colors duration-500">Technical Capabilities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 dark:bg-white/20 border border-black/10 dark:border-white/20 reveal-container transition-colors duration-500">
          <div class="bg-white dark:bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-4 text-gray-900 dark:text-white group-hover:text-accent transition-colors">API Integration</h3>
            <p class="text-gray-600 dark:text-white/60 transition-colors duration-500">Connecting disparate systems seamlessly, ensuring secure and high-performance data exchange.</p>
          </div>
          <div class="bg-white dark:bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-4 text-gray-900 dark:text-white group-hover:text-accent transition-colors">Software Deployment</h3>
            <p class="text-gray-600 dark:text-white/60 transition-colors duration-500">Containerizing applications with Docker and ensuring zero-downtime continuous deployment.</p>
          </div>
          <div class="bg-white dark:bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-4 text-gray-900 dark:text-white group-hover:text-accent transition-colors">QA Testing</h3>
            <p class="text-gray-600 dark:text-white/60 transition-colors duration-500">Rigorous automated and manual testing methodologies to guarantee robust applications.</p>
          </div>
          <div class="bg-white dark:bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-4 text-gray-900 dark:text-white group-hover:text-accent transition-colors">Vue.js Development</h3>
            <p class="text-gray-600 dark:text-white/60 transition-colors duration-500">Building reactive, high-performance user interfaces focusing on client-side optimization.</p>
          </div>
        </div>
      </section>

      <!-- Section C: Experience -->
      <section class="py-32 px-6 md:px-12 max-w-4xl mx-auto" id="experience">
        <h2 class="text-4xl font-mono mb-20 text-gray-900 dark:text-white text-center uppercase tracking-widest transition-colors duration-500">Professional Experience</h2>
        <div class="border-l border-black/20 dark:border-white/20 pl-8 md:pl-12 space-y-24 reveal-container transition-colors duration-500">
          <div class="reveal relative">
            <div class="absolute -left-[38px] md:-left-[54px] w-3 h-3 bg-accent rounded-full mt-2 outline outline-4 outline-white dark:outline-contrast transition-colors duration-500"></div>
            <h3 class="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">System Implementor <span class="text-accent font-normal">@ Terakorp</span></h3>
            <span class="text-gray-500 dark:text-white/40 text-sm font-mono block mb-6 uppercase tracking-wider transition-colors duration-500">Present</span>
            <p class="text-gray-600 dark:text-white/70 leading-relaxed text-lg transition-colors duration-500">Managing the end-to-end implementation lifecycle of software solutions. Coordinating between development teams and clients to ensure smooth rollout and adoption of technological improvements.</p>
          </div>
          <div class="reveal relative">
            <div class="absolute -left-[38px] md:-left-[54px] w-3 h-3 bg-gray-400 dark:bg-white/40 rounded-full mt-2 outline outline-4 outline-white dark:outline-contrast transition-colors duration-500"></div>
            <h3 class="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">Web Developer</h3>
            <span class="text-gray-500 dark:text-white/40 text-sm font-mono block mb-6 uppercase tracking-wider transition-colors duration-500">Past</span>
            <p class="text-gray-600 dark:text-white/70 leading-relaxed text-lg transition-colors duration-500">Developed scalable web applications utilizing modern JavaScript frameworks, integrating complex backend APIs, and crafting responsive user interfaces with attention to aesthetic detail.</p>
          </div>
        </div>
      </section>

      <!-- Section D: Projects -->
      <section class="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="projects">
        <h2 class="text-4xl font-mono mb-20 text-gray-900 dark:text-white text-center uppercase tracking-widest transition-colors duration-500">Selected Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 reveal-container">
          <!-- Project 1 -->
          <div class="border border-black/10 dark:border-white/20 p-6 md:p-8 reveal group cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-black/50 dark:hover:bg-black transition-colors duration-500 overflow-hidden relative">
            <div class="aspect-video w-full overflow-hidden mb-8 bg-black/5 dark:bg-white/5 relative">
              <NuxtImg src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Strive" format="webp" loading="lazy" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            </div>
            <h3 class="text-3xl font-mono text-gray-900 dark:text-white mb-4 transition-colors duration-500">Strive</h3>
            <p class="text-gray-600 dark:text-white/60 mb-6 text-lg transition-colors duration-500">High-performance project management dashboard with real-time analytics and GSAP integrations.</p>
            <span class="text-accent text-sm font-mono uppercase tracking-widest flex items-center gap-2">View Case Study <span class="group-hover:translate-x-2 transition-transform duration-300">→</span></span>
          </div>
          
          <!-- Project 2 -->
          <div class="border border-black/10 dark:border-white/20 p-6 md:p-8 reveal group cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-black/50 dark:hover:bg-black transition-colors duration-500 overflow-hidden relative mt-0 md:mt-24">
            <div class="aspect-video w-full overflow-hidden mb-8 bg-black/5 dark:bg-white/5 relative">
              <NuxtImg src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Digital Hub" format="webp" loading="lazy" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            </div>
            <h3 class="text-3xl font-mono text-gray-900 dark:text-white mb-4 transition-colors duration-500">Digital Hub</h3>
            <p class="text-gray-600 dark:text-white/60 mb-6 text-lg transition-colors duration-500">Centralized integration platform unifying disparate APIs into a single seamless portal.</p>
            <span class="text-accent text-sm font-mono uppercase tracking-widest flex items-center gap-2">View Case Study <span class="group-hover:translate-x-2 transition-transform duration-300">→</span></span>
          </div>
        </div>
      </section>

      <footer class="py-16 border-t border-black/10 dark:border-white/10 text-center px-6 mt-20 transition-colors duration-500">
        <p class="text-gray-500 dark:text-white/40 font-mono text-sm tracking-widest uppercase transition-colors duration-500">© {{ new Date().getFullYear() }} Muhamad Faris Rafi. All Rights Reserved. | v1.0.1</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick, ref } from 'vue'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sun, Moon } from 'lucide-vue-next'
import CustomCursor from './components/CustomCursor.vue'

let lenis;
let scrollCtx;

const isDark = ref(true)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return;

  // Init theme
  if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  // Wait for next tick to ensure DOM is ready
  nextTick(() => {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger)
      
      lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
      })
      
      lenis.on('scroll', ScrollTrigger.update)
      
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      
      gsap.ticker.lagSmoothing(0)
      
      scrollCtx = gsap.context(() => {
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

        const revealContainers = document.querySelectorAll('.reveal-container')
        revealContainers.forEach(container => {
          const reveals = container.querySelectorAll('.reveal')
          gsap.fromTo(reveals, 
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          )
        })

        ScrollTrigger.refresh()
      })
    }, 100)
  })
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
  if (scrollCtx) scrollCtx.revert()
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>
