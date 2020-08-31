<template>
  <div class="home">
    <Customer />
  </div>
</template>

<script>
// @ is an alias to /src
import Customer from "@/components/Customer.vue";
export default {
  name: "home",
  components: {
    Customer
  },
  mounted() {
    let data={
      title:1234,
      body:567
    }
    this.http({
      method: "post",
      url: "/addpost",
      data:JSON.stringify(data)
    }).then(res=>{
      console.log(res)
    });
  }
};
</script>
