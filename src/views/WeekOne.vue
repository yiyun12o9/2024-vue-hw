<script setup>
import { ref } from 'vue';

const drinkData = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20,
    isEdit: false,
    tempName: ''
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 18,
    isEdit: false,
    tempName: ''
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 34,
    isEdit: false,
    tempName: ''
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10,
    isEdit: false,
    tempName: ''
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25,
    isEdit: false,
    tempName: ''
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20,
    isEdit: false,
    tempName: ''
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18,
    isEdit: false,
    tempName: ''
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20,
    isEdit: false,
    tempName: ''
  }
]);

function plusStock(item) {
  item.stock += 1;
}

function minusStock(item) {
  if (item.stock > 0) {
    item.stock -= 1;
  }
}

function editItemName(item) {
  item.tempName = item.name;
  item.isEdit = true;
}

function editYes(item) {
  item.name = item.tempName;
  item.isEdit = false;
}

function editNo(item) {
  item.isEdit = false;
  item.tempName = '';
}
</script>

<template>
  <table class="fortable">
    <thead>
      <tr>
        <th scope="col" width="20%">品項</th>
        <th scope="col" width="20%">描述</th>
        <th scope="col" width="20%">價格</th>
        <th scope="col" width="20%">庫存</th>
        <th scope="col" width="20%">動作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="drinkData in drinkData" :key="drinkData.id">
        <td class="drinkName">
          <span v-if="drinkData.isEdit">
            <input v-model="drinkData.tempName" class="drinkName" />
          </span>
          <span v-else>
            {{ drinkData.name }}
          </span>
        </td>
        <td class="drinkDescription">
          {{ drinkData.description }}
        </td>
        <td class="drinkPrice">{{ drinkData.price }}</td>
        <td class="drinkStock">
          <button
            type="button"
            class="minusBtn"
            @click="minusStock(drinkData)"
            :disabled="drinkData.stock === 0"
          >
            -</button
          >&nbsp;{{ drinkData.stock }}&nbsp;<button type="button" @click="plusStock(drinkData)">
            +
          </button>
        </td>
        <td>
          <span v-if="drinkData.isEdit">
            <button type="button" @click="editYes(drinkData)">確定</button>
            <button type="button" @click="editNo(drinkData)">取消</button>
          </span>
          <span v-else>
            <button type="button" @click="editItemName(drinkData)">修改品項</button>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.fortable {
  background-color: rgb(255, 255, 255);
  width: 100%;
  line-height: 30px;
  border-collapse: collapse;
  border: 1px solid rgb(193, 221, 252);
  padding: 10px;
  text-align: center;
}
.fortable th {
  background-color: rgb(108, 141, 179);
  padding: 10px;
  margin: 0;
  font-size: 20px;
  color: white;
}
.fortable tr {
  border-bottom: 1px solid rgb(193, 221, 252);
  line-height: 25px;
}
.fortable td {
  padding: 10px;
}
.drinkName {
  font-size: 20px;
  text-align: left;
}
.drinkDescription {
  text-align: left;
}
.drinkPrice {
  font-size: 20px;
}
.drinkStock {
  font-size: 20px;
}
.fortable button {
  background-color: rgb(108, 141, 179);
  color: white;
  border: none;
  font-size: 16px;
  padding: 5px 10px;
  margin: 5px;
}
.fortable button:hover {
  background-color: rgb(72, 96, 124);
  cursor: pointer;
}
.fortable button:disabled {
  background-color: rgb(178, 209, 243);
  cursor: no-drop;
}
</style>
