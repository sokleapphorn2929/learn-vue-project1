<template>
    <div>
        <div class="w-fit bg-blue-50 p-10 rounded-lg border-2 border-blue-500 flex justify-center items-center hover:-translate-y-5 duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-blue-900">
            <div>
                <img :src="category.category_pic" :alt="category.category_name" class="size-40 rounded-lg">
                <h3 class="text-lg text-center font-bold text-blue-800">{{ category.category_name.length > 15 ? category.category_name.slice(0, 11) + '...' : category.category_name }}</h3>
                <p>Number of Products : <strong>{{ category.products_count }}</strong></p>
            </div>
        </div>
    </div>
</template>

<script setup>

const category = defineProps({
    id: String,
    category_name: String,
    category_pic: String,
    products_count: Number
})

</script>