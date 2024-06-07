<template>
  <div class="contact-form">
    <div class="contact-form-container">
      <label>이름</label>
      <input type="text" v-model="name" />

      <br /><label>전화번호</label>
      <input type="text" v-model="phone" />

      <br /><label>그룹</label>
      <input type="text" v-model="group" />

      <br /><label>E-mail</label>
      <input type="email" v-model="email" />

      <br /><label>프로필 사진 등록(선택)</label>
      <input type="file" @change="onFileChange" />
    </div>

    <div class="button-container">
      <button @click="add_member">등록</button>
      <button @click="cancel">취소</button>
    </div>
  </div>
</template>

<style scoped>
.contact-form-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  background-color: #b9b9b9;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 1%;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #b9b9b9;
  color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

button {
  background-color: #00bfa5; /* 녹색 배경 */
  color: white; /* 흰색 텍스트 */
  border: none; /* 테두리 없음 */
  padding: 15px 55px; /* 내부 패딩 */
  text-align: center; /* 텍스트 중앙 정렬 */
  text-decoration: none; /* 텍스트 밑줄 없음 */
  display: flex; /* 인라인 블록 요소 */
  font-size: 16px; /* 글꼴 크기 */
  margin: 4px 2px; /* 주변 마진 */
  cursor: pointer; /* 포인터 커서 */
  border-radius: 8px; /* 둥근 모서리 */
}

label {
  color: rgb(0, 0, 0);
  text-align: left;
}

label + input {
  background-color: #cecece; /* 배경색 */
  border: 1px solid #cecece; /* 테두리 */
  padding: 8px 10px; /* 패딩 */
  font-size: 14px; /* 글꼴 크기 */
  border-radius: 4px; /* 모서리 둥글게 */
  display: block; /* 블록 레벨 요소로 설정 */
  width: 95%; /* 너비 */
  margin-top: 5px; /* 상단 마진 */
  outline: none; /* 포커스 테두리 제거 */
}
</style>
