<template>
    <div class="content__dough">
        <h2 class="title title--small sheet__title">Выберите тесто</h2>
        <div class="sheet__content dough">
            <label
                v-for="(dough, index) in doughs"
                :key="dough.id"
                :class="['dough__input',dough.class]"
            >
                <input
                    type="radio"
                    name="dought"
                    :value="dough.value"
                    class="visually-hidden"
                    :checked="index === 0" 
                />

                <b>{{ dough.name }}</b>
                <span>{{ dough.description }}</span>
            </label>
        </div>  
    </div>
</template>

<script setup>
    import doughs from "@/mocks/dough.json";

    defineProps({
        modelValue:{
            type:String,
            required:true
        }
    })

    const emit = defineEmits(["update:modelValue"]);
</script>