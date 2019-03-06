<template>
   <div>
      <table class="table" border="1" cellspacing = "0" id="oTab">
        <thead>
          <tr>
              <th>Id</th>
              <th>姓名</th>
              <th>年龄</th>
              <th>地址</th>
              <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for ="(user,index) in users">
            <td>{{index+1}}</td>
            <td>{{user.name}}</td>
            <td>{{user.age}}</td>
            <td>{{user.address}}</td>
            <td>
              <button @click="btn-edit">编辑</button>
              <button @click="remove(index)">删除</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><input type="text" v-model="user.name"/></td>
            <td><input type="text" v-model="user.age"/></td>
            <td><input type="text" v-model="user.address"/></td>
            <td>
              <button @click="insert">insert</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      user: { 'name': '', 'age': '', 'address': '' },
      users: [
        { 'name': '张三', 'age': '25', 'address': '北京' },
        { 'name': '李四', 'age': '23', 'address': '西安' },
        { 'name': '王五', 'age': '22', 'address': '上海' }
      ]
    }
  },
  methods: {
    insert: function () {
      this.users.push(this.user)
    },
    remove: function (index) {
      this.users.splice(index, 1)
    }
  },
  mounted () {
    window.onload = function show () {
      var otab = document.getElementById('oTab')
      var oRows = otab.getElementsByTagName('tr')
      for (let i = 1; i < oRows.length - 1; i++) {
        oRows[i].onmouseover = function () {
          this.style.backgroundColor = 'aqua'
        }
        oRows[i].onmouseout = function () {
          this.style.backgroundColor = 'white'
        }
      }
    }
  }
}
</script>
<style lang="scss">
.table{
  margin: 20px;
}
tr,th{
  text-align:center;
}
button{
  width: 40px;
  height: 20px;
  margin: 0;
  padding: 0;
  outline: none;
  border: 1px solid black;
  border-radius: 3px;
  margin-left: 2px;
}
</style>
