<script>
/*
  메인 헤더 컴포넌트
*/
</script>

<template>
  <div class="all_container">
    <div class="header">
      <h3>내 연락처</h3>
      <button @click="$emit('add-contact')">+</button>
      <div class="search_bar">
        <div class="search_icon">
          <img src="../assets/search.png" width="20px" alt="" />
        </div>
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #00bfa5;
  padding: 30px;
  color: white;
  position: relative;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

h3 {
  font-size: 15px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
}

button {
  background-color: #00bfa5;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 22px;
  position: absolute;
  top: 10%;
  right: 10px;
}

.search_bar {
  position: relative;
  background-color: #00bfa5; /* 원하는 배경색으로 변경 */
  padding: 5px;
  border-radius: 5px;
  height: center;
  width: 90%;
  margin: 40px auto 0;
}

.search_icon {
  position: absolute;
  left: 10px; /* 왼쪽에서 5px 떨어진 곳에 위치 */
  top: 50%; /* 상위 요소의 중앙 */
  transform: translateY(-50%);
}

.search_bar input {
  background-color: #d9d9d9;
  width: calc(100% - 30px);
  padding: 15px 15px 15px 30px;
  border: none;
  border-radius: 8px;
  outline: none;
}
</style>
