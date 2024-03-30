<template>
    <div class="flex flex-col items-center justify-center gap-y-8">
        <img src="@/assets/images/icon-complete.svg" />
        <div class="flex flex-col items-center gap-y-2">
            <span class="uppercase text-3xl font-bold tracking-widest">Thank You!</span>
            <span class="text-gray-500 font-semibold">We've added your card details</span>
        </div>
        <button class="w-full rounded-lg text-white py-3" @click="cardFormStore.submitted = false">Continue</button>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { useCardFormStore } from "@/stores/cardForm";

const cardFormStore = useCardFormStore()

</script>