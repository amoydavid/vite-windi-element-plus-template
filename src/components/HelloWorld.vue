<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="flex">
    <div class="box">
      <div class="text-center space-y-2">
        <div class="space-y-0.5">
          <p class="text-lg text-black dark:text-white font-semibold mb-2">
            Erin Lindford
          </p>
          <p class="text-gray-500 dark:text-gray-300 font-medium pb-3">
            Product Engineer
          </p>
        </div>
        <button class="btn">
          Message
        </button>
      </div>
    </div>
  </div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped >
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.box {
  @apply
    py-8 px-8 inline-flex mx-auto
    bg-white dark:bg-gray-400 dark:bg-opacity-10
    rounded-xl shadow-md space-y-2;
}
.btn {
  @apply
    px-4 py-1 text-sm text-purple-600 font-semibold
    rounded-full border border-purple-200 dark:border-purple-800
    hover:text-white hover:bg-purple-600 hover:border-transparent
    focus:outline-none focus:ring-2 ring-purple-600 ring-opacity-40;
}
</style>
