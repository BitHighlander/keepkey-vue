<script setup lang="ts">
import Hello from './components/Hello.vue'
import { ipcRenderer } from './electron'

ipcRenderer.send('message', 'Hello from renderer!');
</script>

<template>
  <div id="app">
    <Hello/>
  </div>
</template>
