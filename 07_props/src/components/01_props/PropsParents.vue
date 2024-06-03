<script setup>
    import { provide, ref } from 'vue';
    import PropsChild from "./PropsChild.vue";
    import DarkMode from "./DarkMode.vue";
    import ReadProps from "./ReadProps.vue";

    const message = ref("Hello");
    const darkState = ref(false);
    const readValue = ref("vue는 재밌다");

    function darkMode(){
        darkState.value = !darkState.value; 
    }

    //공급자
    provide("data", {message, darkState});
    provide("darkMode", darkMode);
    provide("darkState", darkState);
    provide("readValue", readonly{readValue});

</script>

/*
    Props
    부모에서 자식 컴포넌트로 데이터를 전달하는 경우 우리는 다양한 슬롯을 이용할 수 있었다
    그러나 슬롯의 경우 컨텐츠를 전달하기 위해 사용하는 것으로 단일 데이터를 전달하는 경우 적합하지 않으며
    부모에게 전달받은 데이터를 전달하여 조작하는데 어려움이 있음
    이러한 경우 우리는 데이터만 전달하기 위한 용도로 props를 사용할 수 있음
*/
<template>
    <div :class="{container:true, dark:darkState}">
        props 입력 <input v-model="message" />
    </div>
    <PropsChild />
    <DarkMode />
    <ReadProps />
</template>

<style scoped>
    .container{
        border : 1px solid;
        display : flex;
        flex-direction: column;
        align-items: center;
    }

    .dark{
        background-color: black;
        color: white;
    }
</style>
