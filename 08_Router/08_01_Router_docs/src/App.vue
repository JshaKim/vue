<script setup>
import { ref } from "vue";
import Home from "./views/Components/Home.vue";
import About from "./views/Components/About.vue";
import NotFound from "./views/Components/NotFound.vue";

const routes = {
  "/": Home,
  "/about": About,
};
// 윈도우의 현재 라우트를 탐색하는 과정
const currentPath = ref(window.location.hash);

// 브라우저 주소창에 #해시 부분 변경을 감지하고 이벤트가 발생했을 때 설정할 공백 함수를 등록하는 리스너
// addEventListener : 이벤트를 등록함
// hashchange : # <- 부분의 변경을 감지
//() =>() : 실행할 공백 함수를 등록하는 리스너
window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

// 현재 라우트에 맞는 컴포넌트를 선택하는 과정
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>
<!--
  routing
  서버 라우팅은 클라이언트에서 요청한 url 리소스에 따라 서버에서 어떤 작업을 수행할지 결정하는 것을 의미
  서버 라우팅 방식은 새로운 페이지 요청을 서버로 전달하면 서버 측에서 html을 응답하고 등답 받은 html을 브라우저에 
  다시 로드하는 과정

  그러나 spa(single - page - application)에서는 클라이언트, 즉 자바스크립트가 전체 페이지를 다시 로드하지 않고
  일부만 동적으로 갱신ㅎ되는 애플리케이션을 의미하며 서버 라우팅은 웹 애플리케이션에 새로운 데이터를 로드할 때마다 전체 페이지를
  새로고침 했어야 했으나, spa 는 초기 페이지 로드 이후 새로고침하지 않고 필요한 데이터만 받아 동적으로 페이지 일부만 업데이트 하게 된다.
  이러한 spa의 라우팅은 클라이언트, 즉 브라우저에서 수행되며 서버에 데이터만 요청하는 방식

  vue에서 라우팅을 하기 위한 vue router를 설치해야 함
  npm install vue-router@next

  vue의 routing
  vue는 url리소스를 설정할 때 url 속성에 #을 추가하며 리소스를 등록하게 되는데 이는 vue에서 브라우저의 기본 동작을 방지하기 위함으로
  만약 #을 추가하지 않으면 자바스크립트를 사용하여 네비게이션을 제어하게 되며 기존 방식대로 서버 라우팅을 처리함
  이렇게 되면 기존 반응성 변수의 상태를 잃어버리기 때문에 주의 필요
  
-->
<template>
  <main>
    <ul>
      <li><a hreflang="#/">Home</a></li>
      <li><a href="/about">About</a></li>
      <a href="#non-exist-path">broken link</a>
      <component :is="currentView" />
    </ul>
  </main>
</template>

<style scoped></style>
