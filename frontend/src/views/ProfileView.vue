<template>
    <main class="layout">
        <div class="layout__content">
            <div class="layout__title">
                <SectionTitle size="big">
                    Мои данные</SectionTitle>
            </div>

            <div class="user">
                <picture>
                    <source type="image/webp" srcset="img/users/user5@2x.webp 1x, img/users/user5@4x.webp 2x" />
                    <img src="@/assets/img/users/user5@2x.jpg" srcset="@/assets/img/users/user5@4x.jpg"
                        :alt="profile_store.name" width="72" height="72" />
                </picture>
                <div class="user__name">
                    <span>
                        {{ profile_store.name }}</span>
                </div>
                <p class="user__phone">
                    Контактный телефон: <span>
                        {{ profile_store.phone }}</span>
                </p>
            </div>

            <AddresssList :addresses="profile_store.addresses" @openForm="openForm" />

            <AddressForm :status="opened" :address-params="addressParams" :action-type="actionType" @save="save"
                @delete="profile_store.address_drop(addressParams.id)" @setAddressInfo="setValueAddress" />

            <div class="layout__button">
                <button type="button" class="button button--border" @click="openForm('add', {})">
                    Добавить новый адрес
                </button>
            </div>
        </div>
    </main>
</template>
  
<script setup>
import { SectionTitle } from "../common/components";
import { ProfileStore } from "../states_store/";
import { reactive, ref } from "vue";
import AddressForm from "../modules/prof/AddressForm.vue";
import AddresssList from "../modules/prof/AddressList.vue";

const opened = ref(false);
const profile_store = ProfileStore();
const actionType = ref("");


let addressParams = reactive({
    name: "",
    street: "",
    building: "",
    flat: "",
    comment: "",
    userId: 0,
    id: 0
});

const setValueAddress = (option, value) => {    
    addressParams[option] = value;
};

const save = () => {
    if (actionType.value == "edit") {
        console.log(addressParams);
        profile_store.address_edit({ ...addressParams, userId: profile_store.id });
    }
    if (actionType.value == "add") {
        console.log(addressParams);
        profile_store.address_add({
            ...addressParams,
            userId: profile_store.id,
            id: Math.floor(Math.random() * 100) + 1,
        });
    }
    addressParams.id = Math.floor(Math.random() * 100) + 1;
    addressParams.name = "";
    addressParams.street = "";
    addressParams.building = "";
    addressParams.flat = "";
    addressParams.comment = "";

    addressParams.userId = profile_store.id;
};

const openForm = (action, order) => {
    if (action == "edit") {
        actionType.value = "edit";
        opened.value = true;
        addressParams.id = order.id;
        addressParams.name = order.name;
        addressParams.street = order.street;
        addressParams.building = order.building;
        addressParams.flat = order.flat;
        addressParams.comment = order.comment;

        addressParams.userId = order.userId;
    }
    if (action == "add") {
        opened.value = true;
        actionType.value = "add";
    }
};
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/app.scss";
</style>