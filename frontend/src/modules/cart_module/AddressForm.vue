<template>
    <div class="cart__form">
        <div class="cart-form">
            <label class="cart-form__select">
                <span class="cart-form__label">Получение заказа:</span>

                <select name="test" class="select" @input="emit('setAddressOption', $event.target.value)">
                    <option v-for="(option, index) in options" :key="option" :value="index">
                        {{ option }}
                    </option>
                </select>
            </label>

            <label class="input input--big-label">
                <span>Контактный телефон:</span>
                <input type="text" name="tel" placeholder="+7 999-999-99-99" />
            </label>

            <div v-if="addressOption > 0" class="cart-form__address">
                <span class="cart-form__label">Новый адрес:</span>

                <div class="cart-form__input">
                    <label class="input">
                        <span>Улица*</span>
                        <input type="text" name="street" required="true" :value="address.street"
                            @input="emit('setAddressInfo', 'street', $event.target.value)" />
                    </label>
                </div>

                <div class="cart-form__input cart-form__input--small">
                    <label class="input">
                        <span>Дом*</span>
                        <input type="text" name="house" required="true" :value="address.building"
                            @input="emit('setAddressInfo', 'building', $event.target.value)" />
                    </label>
                </div>

                <div class="cart-form__input cart-form__input--small">
                    <label class="input">
                        <span>Квартира</span>
                        <input type="text" name="apartment" required="false" :value="address.flat"
                            @input="emit('setAddressInfo', 'flat', $event.target.value)" />
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
defineProps({
    options: {
        type: Array,
        required: true,
    },
    addressOption: {
        type: Number,
        required: true,
    },
    address: {
        type: Object,
        required: true,
    },
});
const emit = defineEmits(["setAddressOption", "setAddressInfo"]);
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
</style>