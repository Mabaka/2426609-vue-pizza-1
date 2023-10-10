<template>
    <div class="content__diameter">
        <h2 class="title title--small sheet__title">Выберите размер</h2>
        <div class="sheet__content diameter">
            <label
                v-for="(size, index) in sizes"                
                :key="size.id"
                class="diameter__input"
                :class="[`diameter__input--${size.value}`]"
            >
                <input
                    type="radio"
                    name="diameter"
                    :value="size.value"
                    class="visually-hidden"
                    :checked="index === 1"
                />
                <span>{{ size.name }}</span>
            </label>
        </div>
    </div>
</template>

<script setup>
    import sizes from "@/mocks/sizes.json";
    defineProps({
        modelValue:{
            type: String,
            required: true
        }
    })
    const emit = defineEmits(["update:modelValue"])
</script>