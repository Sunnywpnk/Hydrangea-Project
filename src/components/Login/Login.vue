<!-- src/views/Home.vue -->
<template>
    <div>
      <h1>Authen</h1>
      <button @click="goTosentOTPPage">Go forgot pass</button>
      <button @click="goToRegisterPage">register</button>
      <button @click="goToMyVocabPage">Login</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goToMyVocabPage = () => {
    router.push({ name: 'MyVocab' });
  };

  const goTosentOTPPage = () => {
    router.push({ name: 'sentOTP' });
  };

  const goToRegisterPage = () => {
    router.push({ name: 'Register' });
  };
  </script>
  
  <style scoped>

  </style>