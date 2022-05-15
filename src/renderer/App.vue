<script setup lang="ts">
import Main from './components/main.vue'
import { ipcRenderer } from './electron'

ipcRenderer.send('message', 'Hello from renderer!');
</script>

<template>
  <div id="app">
    <Main/>
  </div>
</template>
