<template>
    <div class="grid gap-2 max-w-96">
        <div>
            <div class="text-xs uppercase mb-1 font-bold">CardHolder Name</div>
            <div>
                <input v-model="cardFormStore.cardholderName" type="text" placeholder="e.g. Jane Appleseed" class="p-1"
                    :class="{ 'border-red-400': !cardFormStore.cardholderName }" />
            </div>
            <div :class="{ 'invisible': cardFormStore.cardholderName }" class="text-red-500 text-xs">
                Can't be blank
            </div>
        </div>
        <div>
            <div class="text-xs uppercase mb-1 font-bold">Card number</div>
            <div>
                <input v-model="cardFormStore.cardNumber" type="text" placeholder="e.g. 123456789" class="p-1"
                    @keydown="checkDigit" maxlength="16" :class="{ 'border-red-400': !cardFormStore.cardNumber }" />
            </div>
            <div :class="{ 'invisible': cardFormStore.cardNumber }" class="text-red-500 text-xs">
                Can't be blank
            </div>
        </div>
        <div class="grid grid-cols-2 gap-5">
            <div>
                <div class="uppercase text-xs mb-1 font-bold">Exp. date (MM/YY)</div>
                <div class="grid grid-cols-2 gap-2">
                    <input v-model="cardFormStore.expDateMM" type="text" placeholder="MM" class="p-1"
                        :class="{ 'border-red-400': !cardFormStore.expDateMM }" @keydown="checkDigit" maxlength="2" />
                    <input v-model="cardFormStore.expDateYY" type="text" placeholder="YY" class="p-1"
                        :class="{ 'border-red-400': !cardFormStore.expDateYY }" @keydown="checkDigit" maxlength="2" />
                </div>
                <div :class="{ 'invisible': !cardFormStore.expDateError }" class="text-red-500 text-xs">
                    Can't be blank
                </div>
            </div>
            <div>
                <div class="uppercase text-xs mb-1 font-bold">cvc</div>
                <input v-model="cardFormStore.cvc" type="text" placeholder="e.g. 123" class="p-1" @keydown="checkDigit"
                    :class="{ 'border-red-400': !cardFormStore.cvc }" maxlength="3" />
                <div :class="{ 'invisible': !cardFormStore.cvcError }" class="text-red-500 text-xs">
                    Can't be blank
                </div>
            </div>
        </div>
        <div>
            <button class="w-full rounded-lg text-white py-3" @click="cardFormStore.submitted = true">Comfirm</button>
        </div>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { useCardFormStore } from "@/stores/cardForm";

const cardFormStore = useCardFormStore()


const checkDigit = (event: KeyboardEvent) => {
    if (event.key.length === 1 && isNaN(Number(event.key))) {
        event.preventDefault();
    }
};
</script>