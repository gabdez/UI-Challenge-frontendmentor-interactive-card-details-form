<template>
  <header>
  </header>

  <main class="h-full">
    <div class="h-full grid grid-flow-col grid-cols-3">
      <!-- First Section -->
      <div class="col-span-1 firstSection bg-cover grid content-center gap-y-10">
        <div class="flex justify-end -mr-32">
          <div class="relative">
            <img src="./assets/images/bg-card-front.png" />
            <img class="absolute top-6 left-6" src="./assets/images/card-logo.svg" />
            <span class="uppercase absolute bottom-6 left-6"
              :class="[cardFormStore.cardholderName !== '' ? 'text-white' : 'text-gray-400']">
              {{ `${(cardFormStore.cardholderName) || "Jane Appleseed"}` }}
            </span>
            <span class="absolute bottom-6 right-6">
              <span :class="[cardFormStore.expDateMM !== '' ? 'text-white' : 'text-gray-400']">{{
                `${(cardFormStore.expDateMM) || "00"}` }}</span>
              <span class="text-white">/</span>
              <span :class="[cardFormStore.expDateYY !== '' ? 'text-white' : 'text-gray-400']">{{
                `${(cardFormStore.expDateYY) || "00"}` }}</span>
            </span>
            <span class="absolute text-3xl top-32 left-6"
              :class="[cardFormStore.cardNumber !== '' ? 'text-white' : 'text-gray-400']">{{
                `${(cardFormStore.cardNumber) || "0000 0000 0000 0000"}` }}</span>
          </div>
        </div>
        <div class="flex justify-end -mr-64">
          <div class="relative">
            <img src="./assets/images/bg-card-back.png" />
            <span class="absolute cvc-position" :class="[cardFormStore.cvc !== '' ? 'text-white' : 'text-gray-400']">
              {{
                `${(cardFormStore.cvc) || "123"}` }}</span>
          </div>
        </div>
      </div>
      <!-- Second Section -->
      <div class="col-span-2 ml-40 flex justify-center items-center">
        <cardForm />
      </div>
    </div>
  </main>

  <footer></footer>
</template>

<style scoped>
.firstSection {
  background-image: url("./src/assets/images/bg-main-desktop.png");
}

.cvc-position {
  top: 107px;
  right: 50px;
}
</style>

<script setup lang="ts">
import cardForm from "./components/card-form.vue";
import { useCardFormStore } from "@/stores/cardForm";

const cardFormStore = useCardFormStore()
</script>
