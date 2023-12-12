<template>
    <form action="test.html" method="post" class="layout-form" @submit.prevent="createOrder">
        <main class="content cart">
            <div class="container">
                <div class="cart__title">
                    <SectionTitle size="big">Корзина</SectionTitle>
                </div>

                <div v-if="!cart_store.getPizzas.length" class="sheet cart__empty">
                    <p>В корзине нет ни одного товара</p>
                </div>
                <PizzaList v-else :pizzas="cart_store.getPizzas" @addPizza="cart_store.pizza_add"
                    @deletePizza="cart_store.pizza_drop" />

                <MiscList :miscs="cart_store.getMisc" @addMisc="cart_store.misc_add" @deleteMisc="cart_store.misc_drop" />

                <AddressForm :options="selectList" :address-option="addressOption" :address="address"
                    @setAddressOption="setAddressOption" @setAddressInfo="setAddressInfo" />
            </div>
        </main>
        <section class="footer">
            <div class="footer__more">
                <router-link class="button button--border button--arrow" to="/">
                    Хочу еще одну
                </router-link>
            </div>
            <p class="footer__text">
                Перейти к конструктору<br />чтоб собрать ещё одну пиццу
            </p>
            <div class="footer__price">
                <b>Итого: {{ cart_store.fullCartPrice }} ₽</b>
            </div>

            <div class="footer__submit">
                <button type="submit" class="button" :disabled="!cart_store.pizzas.length ||
                    address.street === '' ||
                    address.building === ''
                    ">
                    Оформить заказ
                </button>
            </div>
        </section>
    </form>
</template>
  
<script setup>
import { reactive, computed, ref } from "vue";
import { SectionTitle } from "../common/components";
import PizzaList from "../modules/cart_module/Pizza.vue";
import MiscList from "../modules/cart_module/Misc.vue";
import AddressForm from "../modules/cart_module/AddressForm.vue";
import { CartStore, ProfileStore } from "../states_store";
import { useRouter } from "vue-router";

const router = useRouter();

const profile_store = ProfileStore();
const cart_store = CartStore();
const addressOption = ref(1);

const setAddressOption = (value) => {
    addressOption.value = value;
};

const address = reactive({
    street: "",
    building: "",
    flat: "",
});

const setAddressInfo = (category, value) => {
    address[category] = value;
};

const createOrder = () => {
    let orderAddress = "";

    if (addressOption.value == 0) {
        orderAddress = "Заберёт сам";
    } else if (addressOption.value == 1) {
        orderAddress = Object.values(address).join(", ");
    } else {
        orderAddress = profile_store.addresses[0].orderAddress;
    }

    const order = {
        id: Date.now(),
        orderPizzas: cart_store.pizzas,
        orderMisc: cart_store.misc,
        orderAddress,
        price: cart_store.totalCartPrice,
    };

    profile_store.addOrder(order);

    addressOption.value = 1;
    cart_store.clean();
    router.push("/user/orders");
};

const selectList = computed(() => {        
    const list = profile_store.addresses.map((address) => address.name);
    return ["Заберу сам", "Новый адрес", ...list];
});
</script>