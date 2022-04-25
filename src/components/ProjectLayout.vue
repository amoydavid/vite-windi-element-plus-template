<template>
<div>sub -- {{projectName}}</div>
    <router-link to="/project/rs/home">Project Home</router-link>
    <router-link to="/project/rs/doc">Project doc</router-link>
  <router-view />
</template>
<script type="ts" setup>
import { ref } from 'vue'
const projectName = ref('')
setTimeout(()=>{
  projectName.value = 'abcd'
}, 3000)
</script>
