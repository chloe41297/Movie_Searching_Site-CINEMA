
<template>
  <div class="app__inner" >
    <RouterView/>
  </div>
</template>
<script>
import Header from '~/components/Header'
import InputBar from '~/components/InputBar'
export default {
    components:{
        InputBar
    },
    data(){
        return{
            isClicked: false
        }
    }
}
</script>
<style lang="scss">
  html{
    background-color: $color-background;
  }
    .app__inner{
        position: relative;
        font-family: 'Roboto', sans-serif;
    }
</style>
