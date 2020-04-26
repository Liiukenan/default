<template>
  <div class="home">
    <!-- <Composite />
    <Date />
    <ActiveList /> -->
    <ActiveComponent />
    <!-- <Scroll /> -->
  </div>
</template>

<script>
// @ is an alias to /src

import Date from "@/components/Date.vue"; 
import ActiveList from "@/components/ActiveList.vue"; 
import Scroll from "@/components/Scroll.vue"; 
import ActiveComponent from "@/views/ActiveComponent.vue"; 
export default {
  name: "home",
  components: {
    Date,
    ActiveList,
    Scroll,
    ActiveComponent
  },
  methods:{
    loadRefresh(){
      console.log('刷新');
    },
    loadMore(){
      console.log('加载更多');
    }
  },
  mounted() {
    var data={
      accountid:1234,
      date:'2020-01-01',
      page:1,
      token:'134'
    }
    this.http({
        url: "/api/activity/fragment",
        method: "post",
        data:JSON.stringify(data)
      })
        .then(response => {
          
        })
        .catch(error => {
          console.log(error);
        });
  }
};
</script>
