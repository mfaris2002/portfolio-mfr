<template>
  <div class="fixed bottom-6 md:bottom-8 left-6 md:left-8 z-[100] flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full pointer-events-auto transition-all duration-500 hover:border-white/20 hover:bg-black/60 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
    <button @click="toggleAudio" class="group flex items-center gap-3 cursor-pointer outline-none">
      
      <!-- Audio Icon -->
      <div class="relative flex items-center justify-center w-5 h-5 text-white/80 group-hover:text-accent transition-colors">
        <Volume2 v-if="isPlaying" class="w-full h-full" />
        <VolumeX v-else class="w-full h-full" />
      </div>
      
      <!-- CSS Visualizer Bars -->
      <div class="flex items-end gap-[3px] h-3.5 mx-1">
        <div class="w-[3px] bg-accent transition-all duration-200 rounded-full" :class="isPlaying ? 'h-full animate-bar-1' : 'h-[3px] opacity-30'"></div>
        <div class="w-[3px] bg-accent transition-all duration-200 rounded-full" :class="isPlaying ? 'h-full animate-bar-2' : 'h-[3px] opacity-30'"></div>
        <div class="w-[3px] bg-accent transition-all duration-200 rounded-full" :class="isPlaying ? 'h-full animate-bar-3' : 'h-[3px] opacity-30'"></div>
      </div>

      <!-- Status Label -->
      <span class="text-[10px] md:text-xs font-mono tracking-widest uppercase ml-1 flex items-center">
        <span class="text-gray-500 dark:text-white/40 mr-2">// AUDIO:</span>
        <span :class="isPlaying ? 'text-accent font-bold shadow-accent' : 'text-gray-400 dark:text-white/60'">
          {{ isPlaying ? 'PLAYING' : 'PAUSED' }}
        </span>
      </span>
    </button>
    
    <!-- Hidden HTML5 Audio Element -->
    <audio 
      ref="audioRef" 
      src="/bgm.mp3" 
      loop 
      preload="auto"
      @error="handleAudioError"
    ></audio>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Volume2, VolumeX } from 'lucide-vue-next'
import { gsap } from 'gsap'

const isPlaying = ref(false)
const audioRef = ref(null)

const toggleAudio = () => {
  if (!audioRef.value) return
  
  if (isPlaying.value) {
    // Fade out
    gsap.to(audioRef.value, {
      volume: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        audioRef.value.pause()
        isPlaying.value = false
        localStorage.setItem('mfr_bgm_state', 'paused')
      }
    })
  } else {
    // Fade in
    isPlaying.value = true
    localStorage.setItem('mfr_bgm_state', 'playing')
    audioRef.value.play().then(() => {
      gsap.to(audioRef.value, {
        volume: 0.4, // Max volume is set to 40% for subtle BGM
        duration: 1.5,
        ease: 'power2.inOut'
      })
    }).catch((e) => {
      console.warn("Audio playback failed:", e)
      isPlaying.value = false
      localStorage.setItem('mfr_bgm_state', 'paused')
    })
  }
}

const handleAudioError = () => {
  // Fallback to a reliable open-source ambient track if local /bgm.mp3 is missing
  if (audioRef.value && audioRef.value.src.endsWith('/bgm.mp3')) {
    console.log("Local bgm.mp3 not found. Falling back to external track.");
    audioRef.value.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    if (isPlaying.value) {
      audioRef.value.play();
    }
  }
}

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = 0
  }
  
  const savedState = localStorage.getItem('mfr_bgm_state')
  if (savedState === 'playing') {
    isPlaying.value = true
    
    // Attempt auto-play. Modern browsers might block this if there was no prior interaction.
    audioRef.value.play().then(() => {
      gsap.to(audioRef.value, { volume: 0.4, duration: 2 })
    }).catch(() => {
      // Auto-play was blocked. Reset state visually to paused.
      isPlaying.value = false
      localStorage.setItem('mfr_bgm_state', 'paused')
    })
  }
})

onUnmounted(() => {
  if (audioRef.value) {
    gsap.killTweensOf(audioRef.value)
  }
})
</script>

<style scoped>
@keyframes music-bar-1 {
  0%, 100% { height: 3px; }
  50% { height: 14px; }
}
@keyframes music-bar-2 {
  0%, 100% { height: 3px; }
  50% { height: 10px; }
}
@keyframes music-bar-3 {
  0%, 100% { height: 3px; }
  50% { height: 14px; }
}

.animate-bar-1 {
  animation: music-bar-1 1.2s ease-in-out infinite;
}
.animate-bar-2 {
  animation: music-bar-2 1.2s ease-in-out infinite 0.3s;
}
.animate-bar-3 {
  animation: music-bar-3 1.2s ease-in-out infinite 0.6s;
}

.shadow-accent {
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}
</style>
