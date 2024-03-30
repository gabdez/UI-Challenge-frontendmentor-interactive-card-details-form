<template>
    <div class="h-full">
        <!-- First Section -->
        <div class="firstSection bg-cover relative h-52 mb-20">
            <div class="back-card absolute w-4/6">
                <div class="relative top-6 left-28">
                    <img src="@/assets/images/bg-card-back.png" />
                    <span class="absolute cvc-position text-xs"
                        :class="[cardFormStore.cvc !== '' ? 'text-white' : 'text-gray-400']">
                        {{
                            `${(cardFormStore.cvc) || "123"}` }}</span>
                </div>
            </div>
            <div class="front-card absolute w-4/6">
                <div class="relative top-28 left-4">
                    <img src="@/assets/images/bg-card-front.png" />
                    <img class="absolute top-4 left-6 w-1/5" src="@/assets/images/card-logo.svg" />
                    <span class="absolute text-lg bottom-12 left-6 text-md"
                        :class="[cardFormStore.cardNumber !== '' ? 'text-white' : 'text-gray-400']">{{
                            `${(cardFormStore.cardNumber) || "0000 0000 0000 0000"}` }}</span>
                    <span class="uppercase absolute bottom-4 left-6 text-xs max-w-36 truncate"
                        :class="[cardFormStore.cardholderName !== '' ? 'text-white' : 'text-gray-400']">
                        {{ `${(cardFormStore.cardholderName) || "Jane Appleseed"}` }}
                    </span>
                    <span class="absolute bottom-4 right-6 text-xs">
                        <span :class="[cardFormStore.expDateMM !== '' ? 'text-white' : 'text-gray-400']">{{
                            `${(cardFormStore.expDateMM) || "00"}` }}</span>
                        <span class="text-gray-400">/</span>
                        <span :class="[cardFormStore.expDateYY !== '' ? 'text-white' : 'text-gray-400']">{{
                            `${(cardFormStore.expDateYY) || "00"}` }}</span>
                    </span>
                </div>
            </div>
        </div>
        <!-- Second Section -->
        <div class="mx-6">
            <cardForm v-if="!cardFormStore.submitted" />
            <completedForm v-else />
        </div>
    </div>
</template>

<style scoped>
.firstSection {
    background-image: url("@/assets/images/bg-main-mobile.png");
}

.cvc-position {
    top: 45%;
    right: 30px;
}
</style>

<script setup lang="ts">

import cardForm from "@/components/card-form.vue";
import completedForm from "@/components/completed-form.vue";
import { useCardFormStore } from "@/stores/cardForm";

const cardFormStore = useCardFormStore()

</script>