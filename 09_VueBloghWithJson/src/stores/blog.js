import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useBlogStore = defineStore("blog", () => {
  const router = useRouter();
  const blogs = ref([]);
  const detailsBlog = reactive({});
  const postBlog = reactive({
    title: "",
    content: "",
    img: "",
  });
  /*
        ENV
        vite를 사용하는 경우 프로젝트 로드시 .env 파일을 자바스크립트 엔진이 확인하여
        import.meta.env에 등록
        여기서 클라이언트의 실수로 환경 변수에 유출되는 것을 막고자 접두사가 붙은
        변수만 사용함.
    */

  const blogHandler = () => {
    // 조회용
    fetch(import.meta.env.VITE_APP_API_URL + "/post")
      .then((response) => res.json())
      .then((data) => (blogs.value = data));
  };

  const detailsHandler = (id) => {
    fetch(import.meta.env.VITE_APP_API_URL + "/post/" + id)
      .then((response) => response.json())
      .then((data) => (detailsBlog.value = { ...data }));
  };

  const modifyHandler = (blog) => {
    fetch(import.meta.env.VITE_APP_API_URL + "/post/" + blog.id, {
      method: "PUT",
      body: JSON.stringify({
        title: blog.title,
        content: blog.content,
        img: blog.img,
      }),
    })
      .then((response) => response.status)
      .then((result) =>
        result == 200 ? router.push("/") : alert("수정에 실패했습니다.")
      );
    console.log(data);
    router.push("/post/" + blog.id);
  };
  const postHandler = (blog) => {
    fetch(import.meta.env.VITE_APP_API_URL + "/post", {
      method: "POST",
      body: JSON.stringify({
        id: blog.value.length + 1,
        title: blog.value.title,
        content: blog.value.content,
        img: blog.img,
      }),
    })
      .then((response) => response.status)
      .then((result) =>
        result == 201 ? router.push("/") : alert("수정 실패")
      );
  };

  const deleteHandler = (id) => {
    fetch(import.meta.env.VITE_APP_API_URL + "/post/" + id, {
      method: "DELETE",
    })
      .then((response) => response.status)
      .then((data) => (data == 200 ? router.push("/") : alert("삭제 실패")));
  };

  return {
    blogs,
    detailsBlog,
    postBlog,
    blogHandler,
    detailsHandler,
    modifyHandler,
    postHandler,
    deleteHandler,
  };
});
