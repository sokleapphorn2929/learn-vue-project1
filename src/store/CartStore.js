import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const items = ref([])

    // GETTER
    const totalItems = computed(() => items.value.length)

    const totalPrice = computed(() => {
        return items.value.reduce((sum, item) => sum + item.price, 0)
    })

    function addItem(product){
        items.value.push(product);
    }

    function removeItem(index){
        items.value.splice(index, 1)
    }

    function clearCart(){
        items.value = []
    }

    return {
        items,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        clearCart
    }
})