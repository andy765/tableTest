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
              <button @click="edit(index)">编辑</button>
              <button @click="remove(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="insert">insert</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      users: [
        { 'name': '张三', 'age': '25', 'address': '北京' },
        { 'name': '李四', 'age': '23', 'address': '西安' },
        { 'name': '王五', 'age': '22', 'address': '上海' }
      ],
      user: { 'name': '', 'age': '', 'address': '' }
    }
  },
  mounted () {
    console.log(this.$route.query)
    let index = this.$route.query.id - 1
    console.log('------', this.users[index])
    this.users[index].name = this.$route.query.name
    this.users[index].age = this.$route.query.age
    this.users[index].address = this.$route.query.address
  },
  methods: {
    insert: function () {
      this.users.push({ name: 'dddd', age: 34, address: '西安' })
    },
    edit (index) {
      this.$router.push({ path: 'about', query: { id: index + 1, name: Object.values(this.users)[index].name, age: Object.values(this.users)[index].age, address: Object.values(this.users)[index].address } })
    },
    remove (index) {
      this.users.splice(index, 1)
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
tbody tr:hover{
    background-color:beige;
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
