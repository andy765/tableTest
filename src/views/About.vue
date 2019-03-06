<template>
  <div class="about">
    <table border="1" cellspacing = "0" class="table-about">
      <tr>
        <td>Id: </td>
        <td>
          <input v-model="lists.id">
        </td>
      </tr>
      <tr>
        <td>姓名: </td>
        <td>
          <input type="text" v-model="lists.name">
        </td>
      </tr>
      <tr>
        <td>年龄: </td>
        <td>
          <input type="text" v-model="lists.age">
        </td>
      </tr>
      <tr>
        <td>地址: </td>
        <td>
          <input type="text" v-model="lists.address">
        </td>
      </tr>
    </table>
    <button class="btn-save" @click="btnSave">保存</button>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      lists: {
        id: this.$route.query.id,
        name: this.$route.query.name,
        age: this.$route.query.age,
        address: this.$route.query.address
      }
    }
  },
  methods: {
    btnSave () {
      console.log(this.lists)
      this.$router.push({ path: 'list', query: { id: this.lists.id, name: this.lists.name, age: this.lists.age, address: this.lists.address } })
    },
    btnEdit (index) {
      this.selected = index
      this.selectedlist = this.list[index]
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.table-about{
  margin: 20px;
}
td{
  width: 100px;
}
tr,th{
  width: 100px;
  text-align:center;
}
</style>
