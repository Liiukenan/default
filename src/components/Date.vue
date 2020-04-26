<!--  -->
<template>
  <div class="aa">
    <date-picker v-model="time1" valueType="format" type="date" lang="zh" @change="dateChange" :disabled-date="disDate"></date-picker>
    <date-picker v-model="time2" type="datetime"></date-picker>
    <date-picker v-model="time3" range></date-picker>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import '../assets/css/date.css';
import 'vue2-datepicker/locale/zh-cn';
export default {
components: {DatePicker},
data() {
return {
        time1: '2020-02-02',
        time2: null,
        time3: null,
        disDate:(date)=>{
            if (date.getTime() > (new Date()).getTime()) { 
                return true;
            }

        }
      };
},
computed: {},
watch: {},
methods: {
    dateChange(data){
        console.log(data)
    }
},
mounted() {

},
}
</script>
<style lang='stylus' scoped>
    .mx-datepicker-body{
       background red
    }
    


</style>