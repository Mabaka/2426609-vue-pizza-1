<template>
    <div class="content__pizza">
        <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
                :value="name"
            />         
        </label>  
        <AppDrop @drop="emits('addI', $event)">          
            
            <div class="content__constructor">
                <div class="pizza" :class="`pizza--foundation--${dough.value}-${sauce.value}`">
                    <div class="pizza__wrapper">
                                                
                        <div v-for="(filling) in props.fillings"
                        :key="filling.id"
                        class="pizza__filling"
                        :class="[
                            `pizza__filling--${filling.value}`
                        
                        ]">
                        </div>
                    </div>
                </div>        
            </div>            
        </AppDrop>
        <div class="content__result">
            <p>Итого: {{total}} ₽</p>
            <button type="button" class="button" disabled>Готовьте!</button>
        </div>
    </div>    
</template>

<script setup>
    import AppDrop from "@/common/components/AppDrop.vue";

    const props = defineProps({
        name:{
            type:String
        },
        sauce:{
            type:Object,
            required: true
        },
        dough:{
            type:Object,
            required: true
        },
        size:{
            type:Object,
            required:true
        },
        fillings:{
            type:Array,
            required:true
        },
        total:{
            type:Number,
            default:0
        }
    })

    const emits = defineEmits(['addI', "update:modelValue"]);
    
</script>