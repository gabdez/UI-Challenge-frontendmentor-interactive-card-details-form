import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCardFormStore = defineStore('cardForm', () => {
    const cardholderName = ref("");
    const cardNumber = ref("");
    const cardNumberError = ref(true);

    const expDateMM = ref("");
    const expDateYY = ref("");
    const expDateError = computed(() => {
        return !expDateYY.value || !expDateMM.value;
    })

    const cvc = ref("");

    const cvcError = computed(() => {
        return !cvc.value;
    })

    return { cardholderName, cardNumber, cardNumberError, expDateMM, expDateYY, expDateError, cvc, cvcError }
})
