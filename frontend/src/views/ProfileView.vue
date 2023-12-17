<template>
    <main class="layout">
        <div class="layout__content">
            <div class="layout__title">
                <SectionTitle size="big">
                    Мои данные</SectionTitle>
            </div>

            <div class="user">
                <picture>
                    <source type="image/webp" srcset="@/assets/img/users/user5@2x.webp 1x, @/assets/img/users/user5@4x.webp 2x" />
                    <img src="@/assets/img/users/user5@2x.jpg" srcset="@/assets/img/users/user5@4x.jpg"
                        :alt="auth_store.user?.name" width="72" height="72" />
                </picture>
                <div class="user__name">
                    <span>
                        {{ auth_store.user?.name }}</span>
                </div>
                <p class="user__phone">
                    Контактный телефон: <span>
                        {{ auth_store.user?.phone }}</span>
                </p>
            </div>

            <AddresssList :addresses="profile_store.addresses" @openForm="openForm" />

            <AddressForm :status="opened" :address-params="addressParams" :action-type="actionType" @save="save"
                @delete="del(addressParams.id)" @setAddressInfo="setValueAddress" />

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
import { ProfileStore, AuthStore } from "../states_store/";
import { reactive, ref } from "vue";
import AddressForm from "../modules/prof/AddressForm.vue";
import AddresssList from "../modules/prof/AddressList.vue";

const opened = ref(false);
const profile_store = ProfileStore();
const actionType = ref("");
const auth_store = AuthStore();


let addressParams = reactive({
    name: "",
    street: "",
    building: "",
    flat: "",
    comment: "",
    userId: 0,    
});

const setValueAddress = (option, value) => {    
    addressParams[option] = value;
};

const del = (id) => {
  profile_store.adress_delete(id);
  opened.value = false;
};

const save = () => {
    if (actionType.value == "edit") {              
        profile_store.address_edit({ ...addressParams, userId: auth_store.user?.id });
    }
    if (actionType.value == "add") {        
        profile_store.address_add({
            ...addressParams,
            userId: auth_store.user?.id,            
        });
    }    
    addressParams.name = "";
    addressParams.street = "";
    addressParams.building = "";
    addressParams.flat = "";
    addressParams.comment = "";    
    opened.value = false;
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