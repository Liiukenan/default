<template>
 <div class="composite">
   <button @click="active">跳转</button>
 </div>
</template>
<script>
export default {
  name: "HelloWorld",
  mounted(){
    console.log(13424)
  },
  methods:{
    active(){
      this.$router.push('/Rules')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.composite{
  padding-top 2.777778rem
}
</style>
