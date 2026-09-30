<!-- <template>
  <div>
    <h1>Products:</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>
    <div v-else>
      <div v-for="p in data" :key="p.id">
        <p>{{ p.product_name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useFetch } from './composable/useFetch';

const { data, error, isLoading, fetchData } = useFetch('/products')

onMounted(() => {
  fetchData();
})
</script> -->



<template>
  <div>
    <Navbar/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';


</script>