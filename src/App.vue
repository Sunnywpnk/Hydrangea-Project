<!-- src/App.vue -->
<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <div id="app">
    <router-view></router-view> <!-- แสดงคอมโพเนนต์ตามเส้นทาง -->
  </div>
</template>

<script setup lang="ts">
</script>

<style>

#app {
  text-align: center;
}

html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  font-family: 'Chakra Petch', sans-serif;
}

.font-thai {
  font-family: 'Chakra Petch', sans-serif;
}
</style>
