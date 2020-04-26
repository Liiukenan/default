<!-- 活动内容 -->
<template>
    <div class='componsite'>
        <div class="banner">
            <div class="flex flex-between pl-12 flex-items-center">
                <router-link to="/home" class="back"></router-link>
                <router-link to="/Rules" class="go-rules flex-justify-center flex-items-center fc-w8">活动规则</router-link>
            </div>
        </div>
        <div class="person pt-22 pl-20 pb-26 pr-20">
            <div class="flex pb-14 avatar">
                <div class="mr-8">
                    <img src="https://dummyimage.com/50x50/000/fff" alt="" class="border-round">
                </div>
                <div>
                    <div class="fs-16">
                        用户昵称
                    </div>
                    <div class="flex-items-center mt-6">
                        <span class="fs-16 mr-8">累计收益: </span> <span class="fc-orange fs-18">12878.23元</span>
                    </div>
                </div>
            </div>
            <div class="person-cont pl-16 pt-16">
                <div class="flex flex-items-center">
                    <img src="../assets/images/ic_rank_rank.png" alt="" class="mr-12 w32">
                    <span class="fs-16">
                        当前排名：
                    </span>
                    <span class="money">
                        (距第7名还差788.78元)
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
components: {},
data() {
    return {

    };
},
computed: {},
watch: {},
methods: {

},
mounted() {

},
}
</script>
<style lang='stylus' scoped>
.componsite{
    .banner{
        height 5.083333rem
        padding-top .972222rem
        .back{
            width .833333rem
            height .833333rem
            background url('../assets/images/ic_rank_back.png')
            background-size cover

        }
        .go-rules{
            width 1.777778rem
            height .666667rem
            border-radius: 2.777778rem 0 0 2.777778rem
            background: rgba(0,0,0,0.40)
            
        }
        .person{
            background #fff
            border-radius .333333rem

        }
    }
    .person{
        .avatar{
            border-bottom .027778rem solid rgba(0,0,0,0.05);
        }
        .money{
            color rgba(255,34,34,0.8)
        }
    }
}
</style>