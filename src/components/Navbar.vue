<template>
    <div>
        <nav class="fixed w-full z-100">
            <div class="flex justify-between bg-blue-400 px-20 py-2">
                <div>
                    <h1 class="text-lg font-bold text-white">TESTING VUE.</h1>
                </div>
                <div class="flex gap-10">
                    <router-link :to="{ name: 'categories' }" class="text-white">Category</router-link>
                    <router-link :to="{ name: 'products' }" class="text-white">Product</router-link>
                </div>
            </div>
        </nav>
        <div class="py-30 px-20">
            <router-view/>
        </div>
    </div>
</template>

<script setup>

</script>