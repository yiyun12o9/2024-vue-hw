<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <div class="m-3">
    <h2>註冊</h2>
    <input type="email" class="me-1" placeholder="Email" v-model="signupField.email" />
    <input type="password" class="me-1" placeholder="Password" v-model="signupField.password" />
    <input type="text" class="me-1" placeholder="nickname" v-model="signupField.nickname" />
    <button type="button" @click="signup" class="signup">註冊</button>
    <br />{{ messageSignUp }}
  </div>
  <div class="m-3">
    <h2>登入</h2>
    <input type="email" class="me-1" placeholder="Email" v-model="signInField.email" />
    <input type="password" class="me-1" placeholder="Password" v-model="signInField.password" />
    <button type="button" @click="signIn" class="signin">登入</button>
    <br />{{ messageSignIn }}
  </div>
  <div class="m-3">
    <h2>驗證</h2>
    <button type="button" @click="checkOut">驗證</button>
    <br />{{ messageCheckOut }}
  </div>
  <div class="m-3">
    <h2>登出</h2>
    <button type="button" @click="signOut">登出</button>
    <br />{{ messageSignOut }}
  </div>
  <div class="todo-list m-3">
    <div class="inner">
      <div class="header">
        <h3>{{ nicknameSignIn }} 的待辦事項</h3>
      </div>
      <div class="add-new">
        <input class="me-1" v-model="newTodo" placeholder="New Todo" />
        <button type="button" @click="addTodo">新增</button>
      </div>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="checkbox" :checked="todo.status" @change="toggleStatus(todo.id)" />
          <p :class="['todo', { complete: todo.status }]">{{ todo.content }}</p>
          <input type="text" class="me-1" placeholder="更新值" @change="updateTodoEdit($event, todo.id)" />
          <button type="button" class="me-1" @click="deleteTodo(todo.id)">刪除</button>
          <button type="button" @click="updateTodo(todo.id)">更新</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
const api = 'https://todolist-api.hexschool.io';

// 註冊
const signupField = ref({
  email: '',
  password: '',
  nickname: ''
});
const signupRes = ref('');
const messageSignUp = ref('');

const signup = async () => {
  console.log(`${api}/users/sign_up`);
  try {
    const res = await axios.post(`${api}/users/sign_up`, signupField.value);
    console.log(res);
    signupRes.value = res.data.uid;
    messageSignUp.value = '註冊成功！' + 'UID：' + signupRes.value;
  } catch (error) {
    console.log(error);
    messageSignUp.value = '註冊失敗！ ' + error.response.data.message;
  }
};

// 登入
const signInField = ref({
  email: '',
  password: ''
});
const signInRes = ref('');
const messageSignIn = ref('');
const nicknameSignIn = ref('');

const signIn = async () => {
  console.log(`${api}/users/sign_in`);
  try {
    const res = await axios.post(`${api}/users/sign_in`, signInField.value);
    console.log(res);
    signInRes.value = res.data.token;
    nicknameSignIn.value = res.data.nickname;
    messageSignIn.value = '登入成功！' + 'NickName：' + nicknameSignIn.value;

    document.cookie = `customTodoToken=${res.data.token};`;
  } catch (error) {
    console.log(error);
    messageSignIn.value = '登入失敗！ ' + error.response.data.message;
  }
};

// 驗證
const messageCheckOut = ref('');
const checkOut = async () => {
  try {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)customTodoToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    const res = await axios.get(`${api}/users/checkout`, {
      headers: {
        Authorization: token
      }
    });
    messageCheckOut.value = '驗證成功！ ' + 'UID：' + res.data.uid;
  } catch (error) {
    messageCheckOut.value = '驗證失敗！';
  }
};

// 登出
const messageSignOut = ref('');
const signOut = async () => {
  try {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)customTodoToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    const res = await axios.post(
      `${api}/users/sign_out`,
      {},
      {
        headers: {
          Authorization: token
        }
      }
    );
    console.log(res.data);
    messageSignOut.value = '登出成功！';
  } catch (error) {
    messageSignOut.value = '登出失敗！' + error.response.data.message;
  }
};

//Todolist
const todos = ref([]);
const newTodo = ref('');
const todoEdit = ref({});

const getTodos = async () => {
  const response = await axios.get(`${api}/todos`, {
    headers: {
      Authorization: signInRes.value
    }
  });
  todos.value = response.data.data;
};

const addTodo = async () => {
  if (!newTodo.value) return;
  const todo = {
    content: newTodo.value
  };
  await axios.post(`${api}/todos`, todo, {
    headers: {
      Authorization: signInRes.value
    }
  });
  newTodo.value = '';
  getTodos();
};

const deleteTodo = async (id) => {
  await axios.delete(`${api}/todos/${id}`, {
    headers: {
      Authorization: signInRes.value
    }
  });
  getTodos();
};

const updateTodo = async (id) => {
  const todo = todos.value.find((todo) => todo.id === id);
  todo.content = todoEdit.value[id];
  await axios.put(`${api}/todos/${id}`, todo, {
    headers: {
      Authorization: signInRes.value
    }
  });
  getTodos();
  todoEdit.value = {
    ...todoEdit.value,
    [id]: ''
  };
};

const toggleStatus = async (id) => {
  await axios.patch(
    `${api}/todos/${id}/toggle`,
    {},
    {
      headers: {
        Authorization: signInRes.value
      }
    }
  );
  getTodos();
};

const updateTodoEdit = (event, id) => {
  todoEdit.value = {
    ...todoEdit.value,
    [id]: event.target.value
  };
};

const TodoToken = document.cookie
  .split('; ')
  .find((row) => row.startsWith('hexschoolTodo='))
  ?.split('=')[1];

onMounted(() => {
  if (TodoToken) {
    signInRes.value = TodoToken;
  }
});
</script>
<style></style>
