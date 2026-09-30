<template>
    <div class="flex w-full h-full justify-center">
        <div class="grid grid-cols-4 gap-10" v-if="isLoading">
            <div v-for="ct in category" :key="ct.id">
                <Loading/>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-10" v-else-if="error">
            <div v-for="ct in category" :key="ct.id">
                <Error/>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-10" v-else>
            <div v-for="ct in category" :key="ct.id">
                <Category :id="ct.id" :category_name="ct.category_name" :category_pic="ct.category_pic" :products_count="ct.products_count"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref} from 'vue';
import Category from '../components/Category.vue';
import { useFetch } from '../composable/useFetch.js';
import Loading from '../components/Loading.vue';
import Error from '../components/Error.vue';

const { data: category, error, isLoading, fetchData } = useFetch('/categories')

onMounted(()=>{
    fetchData()
})

// const category = ref([
//     {
//         id: "1",
//         category_name: "Category Name1njhfjfsjnflsfhsfhksfkj",
//         category_pic: "https://i.pinimg.com/736x/c3/1e/37/c31e37d78f04510388e7fa4a06668936.jpg",
//         products_count: 3
//     },
//     {
//         id: "2",
//         category_name: "Category Name2",
//         category_pic: "https://i.pinimg.com/736x/c3/1e/37/c31e37d78f04510388e7fa4a06668936.jpg",
//         products_count: 3
//     },
//     {
//         id: "1",
//         category_name: "Category Name3",
//         category_pic: "https://i.pinimg.com/736x/c3/1e/37/c31e37d78f04510388e7fa4a06668936.jpg",
//         products_count: 3
//     },
//     {
//         id: "1",
//         category_name: "Category Name3",
//         category_pic: "https://i.pinimg.com/736x/c3/1e/37/c31e37d78f04510388e7fa4a06668936.jpg",
//         products_count: 3
//     },
//     {
//         id: "1",
//         category_name: "Category Name3",
//         category_pic: "https://i.pinimg.com/736x/c3/1e/37/c31e37d78f04510388e7fa4a06668936.jpg",
//         products_count: 3
//     },
//     {
//         id: "1",
//         category_name: "Category Name3",
//         category_pic: "https://i.pinimg.com/736x/c3/1e/37/c31e37d78f04510388e7fa4a06668936.jpg",
//         products_count: 3
//     },
// ])

</script>