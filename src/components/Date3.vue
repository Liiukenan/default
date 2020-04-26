<!--  -->
<template>
<div class='aa'>
     <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
    ></Calendar>

</div>
</template>

<script>
import Calendar from 'vue-calendar-component';
export default {
components: {
    Calendar
},
data() {
return {

};
},
computed: {},
watch: {},
methods: {
     clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }

},
mounted() {

},
}
</script>
<style lang='stylus' scoped>
.wh_container{
    background red
    
}
.wh_content_all{
     padding 30px   
    }

</style>