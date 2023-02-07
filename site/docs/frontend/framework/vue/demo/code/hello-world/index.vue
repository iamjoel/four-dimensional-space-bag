<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <input v-model="msg">
  <div>内容：{{ msg }}</div>
</template>