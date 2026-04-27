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
          <p class="text-lg md:text-xl text-gray-600 dark:text-white/60 font-mono flex items-center justify-center md:justify-start gap-4 transition-colors duration-500 mb-6">
            <span class="w-8 md:w-12 h-px bg-accent hidden md:block"></span>
            System Implementor <span class="text-gray-400 dark:text-white/30">&</span> Web Developer
            <span class="w-8 md:w-12 h-px bg-accent"></span>
          </p>
          <p class="text-base md:text-lg text-gray-600 dark:text-white/70 max-w-lg mx-auto md:mx-0 leading-relaxed transition-colors duration-500">
            Bridging the gap between robust system implementation and modern web development. Currently focused on optimizing enterprise workflows at Terakorp Indonesia and engineering high-performance web applications with JavaScript.
          </p>
        </div>

        <!-- Right: Globe -->
        <div class="hero-fg z-10 flex-1 w-full max-w-md relative mt-8 md:mt-0">
          <InteractiveGlobe />
        </div>
      </section>

      <!-- Section B: Technical Stack -->
      <section class="py-32 px-6 md:px-12 max-w-7xl mx-auto" id="stack">
        <h2 class="text-4xl font-mono mb-20 text-gray-900 dark:text-white text-center uppercase tracking-widest transition-colors duration-500">Technical Stack</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 dark:bg-white/20 border border-black/10 dark:border-white/20 reveal-container transition-colors duration-500">
          <div class="bg-white dark:bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-6 text-gray-900 dark:text-white group-hover:text-accent transition-colors">Core</h3>
            <ul class="space-y-3 font-mono text-gray-600 dark:text-white/60">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> JavaScript (ES6+)</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> TypeScript</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> SQL</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-6 text-gray-900 dark:text-white group-hover:text-accent transition-colors">Frameworks</h3>
            <ul class="space-y-3 font-mono text-gray-600 dark:text-white/60">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> Vue.js & Nuxt 3</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> Node.js (MERN)</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> Tailwind CSS</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-contrast p-12 transition-all duration-300 hover:border-accent hover:border border border-transparent group reveal relative">
            <h3 class="text-2xl font-mono mb-6 text-gray-900 dark:text-white group-hover:text-accent transition-colors">Infrastructure</h3>
            <ul class="space-y-3 font-mono text-gray-600 dark:text-white/60">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> Docker</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> Nginx & Linux Server</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-accent"></span> RESTful APIs</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Section C: Experience -->
      <section class="py-32 px-6 md:px-12 max-w-4xl mx-auto" id="experience">
        <h2 class="text-4xl font-mono mb-20 text-gray-900 dark:text-white text-center uppercase tracking-widest transition-colors duration-500">Work History</h2>
        <div class="border-l border-black/20 dark:border-white/20 pl-8 md:pl-12 space-y-24 reveal-container transition-colors duration-500">
          
          <div class="reveal relative">
            <div class="absolute -left-[38px] md:-left-[54px] w-3 h-3 bg-accent rounded-full mt-2 outline outline-4 outline-white dark:outline-contrast transition-colors duration-500 shadow-[0_0_10px_#3b82f6]"></div>
            <h3 class="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">System Implementor <span class="text-accent font-normal">@ Terakorp Indonesia</span></h3>
            <span class="text-gray-500 dark:text-white/40 text-sm font-mono block mb-6 uppercase tracking-wider transition-colors duration-500">Nov 2024 — Present</span>
            <ul class="text-gray-600 dark:text-white/70 leading-relaxed text-lg transition-colors duration-500 space-y-3 list-none">
              <li class="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">Lead the end-to-end deployment and configuration of enterprise software systems.</li>
              <li class="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">Orchestrate API integrations and data mapping for seamless system interoperability.</li>
              <li class="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">Conduct rigorous Technical QA and system auditing to ensure production reliability.</li>
            </ul>
          </div>

          <div class="reveal relative">
            <div class="absolute -left-[38px] md:-left-[54px] w-3 h-3 bg-gray-400 dark:bg-white/40 rounded-full mt-2 outline outline-4 outline-white dark:outline-contrast transition-colors duration-500"></div>
            <h3 class="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">Full-stack Developer <span class="text-accent font-normal">@ CV Satori Rattan</span></h3>
            <span class="text-gray-500 dark:text-white/40 text-sm font-mono block mb-6 uppercase tracking-wider transition-colors duration-500">Feb 2024 — Jun 2024</span>
            <ul class="text-gray-600 dark:text-white/70 leading-relaxed text-lg transition-colors duration-500 space-y-3 list-none">
              <li class="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">Engineered a robust Inventory Management System to streamline warehouse operations and stock accuracy.</li>
              <li class="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">Designed and implemented both frontend and backend architectures for optimal user experience.</li>
            </ul>
          </div>

          <div class="reveal relative">
            <div class="absolute -left-[38px] md:-left-[54px] w-3 h-3 bg-gray-400 dark:bg-white/40 rounded-full mt-2 outline outline-4 outline-white dark:outline-contrast transition-colors duration-500"></div>
            <h3 class="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">Full-stack Developer <span class="text-accent font-normal">@ Infinite Learning</span></h3>
            <span class="text-gray-500 dark:text-white/40 text-sm font-mono block mb-6 uppercase tracking-wider transition-colors duration-500">Aug 2023 — Jan 2024</span>
            <ul class="text-gray-600 dark:text-white/70 leading-relaxed text-lg transition-colors duration-500 space-y-3 list-none">
              <li class="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">Architected a Comprehensive Learning Management System (LMS) specifically tailored for the Indonesian Air Force Cadets.</li>
              <li class="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">Utilized the MERN Stack and TypeScript to build scalable, high-performance, and maintainable codebases.</li>
            </ul>
          </div>

          <div class="reveal relative">
            <div class="absolute -left-[38px] md:-left-[54px] w-3 h-3 bg-gray-400 dark:bg-white/40 rounded-full mt-2 outline outline-4 outline-white dark:outline-contrast transition-colors duration-500"></div>
            <h3 class="text-2xl font-mono font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">Web Developer <span class="text-accent font-normal">@ Miravell Beauty</span></h3>
            <span class="text-gray-500 dark:text-white/40 text-sm font-mono block mb-6 uppercase tracking-wider transition-colors duration-500">Mar 2023 — Jan 2024</span>
            <ul class="text-gray-600 dark:text-white/70 leading-relaxed text-lg transition-colors duration-500 space-y-3 list-none">
              <li class="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">Developed a high-performance company profile website to enhance brand visibility and online presence.</li>
              <li class="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-accent">Implemented SEO strategies and performance optimizations to drive site traffic and user engagement.</li>
            </ul>
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
              <NuxtImg src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Strive — Personal OS" format="webp" loading="lazy" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            </div>
            <h3 class="text-3xl font-mono text-gray-900 dark:text-white mb-4 transition-colors duration-500">Strive <span class="font-normal text-gray-500 dark:text-white/50 text-xl">— Personal OS</span></h3>
            <p class="text-gray-600 dark:text-white/60 mb-6 text-lg transition-colors duration-500">A centralized productivity ecosystem integrating task management and financial automation.</p>
            <span class="text-accent text-sm font-mono uppercase tracking-widest flex items-center gap-2">View Project <span class="group-hover:translate-x-2 transition-transform duration-300">→</span></span>
          </div>
          
          <!-- Project 2 -->
          <div class="border border-black/10 dark:border-white/20 p-6 md:p-8 reveal group cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-black/50 dark:hover:bg-black transition-colors duration-500 overflow-hidden relative mt-0 md:mt-24">
            <div class="aspect-video w-full overflow-hidden mb-8 bg-black/5 dark:bg-white/5 relative">
              <NuxtImg src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Digital Hub" format="webp" loading="lazy" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
            </div>
            <h3 class="text-3xl font-mono text-gray-900 dark:text-white mb-4 transition-colors duration-500">Digital Hub</h3>
            <p class="text-gray-600 dark:text-white/60 mb-6 text-lg transition-colors duration-500">A real-time transaction engine for digital services, featuring secure API integrations and precise data validation.</p>
            <span class="text-accent text-sm font-mono uppercase tracking-widest flex items-center gap-2">View Project <span class="group-hover:translate-x-2 transition-transform duration-300">→</span></span>
          </div>
        </div>
      </section>

      <footer class="py-16 border-t border-black/10 dark:border-white/10 text-center px-6 mt-20 transition-colors duration-500">
        <p class="text-gray-500 dark:text-white/40 font-mono text-sm tracking-widest uppercase transition-colors duration-500">© {{ new Date().getFullYear() }} Muhamad Faris Rafi. All Rights Reserved. | v1.0.2</p>
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
