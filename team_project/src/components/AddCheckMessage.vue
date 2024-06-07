<script>
/*
  새로운 연락처가 등록되었음을 알리는 컴포넌트_최종 알림
*/
export default {
  methods: {
    showAlert() {
      this.$emit("show-alert");
    },
    onCancel() {
      // 취소 버튼 클릭 시 동작
    },
  },
};
</script>

<template>
  <div class="message-box">
    <div class="message-container">
      <div class="message-input">
        <h3><p>새로운 연락처가 등록되었습니다.</p></h3>
      </div>
      <div class="action-buttons">
        <button @click="showAlert">확인</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-box {
  background-color: beige;
  width: 35%;
  height: 25%;
  outline: 2px solid black;
  border-radius: 10px;
}

.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding: 20px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.action-buttons button {
  background-color: #00bfa5; /* 녹색 배경 */
  color: white; /* 흰색 텍스트 */
  border: none; /* 테두리 없음 */
  padding: 10px 35px; /* 내부 패딩 */
  text-align: center; /* 텍스트 중앙 정렬 */
  text-decoration: none; /* 텍스트 밑줄 없음 */
  display: flex; /* 인라인 블록 요소 */
  font-size: 16px; /* 글꼴 크기 */
  margin: 4px 2px; /* 주변 마진 */
  cursor: pointer; /* 포인터 커서 */
  border-radius: 8px; /* 둥근 모서리 */
}

.action-buttons button:hover {
  background-color: #666666;
}
</style>
