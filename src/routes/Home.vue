<template>
    <div class="home__wrapper">
    <div class="page__logo" >
      <div class="page__logo__text" >CINEMA</div>
      <InputBar />
    </div>
    </div>
</template>
<script>
import InputBar from '~/components/InputBar'
export default {
    components:{
        InputBar
    }
}
</script>
<style lang="scss" scoped>
  .home__wrapper{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .page__logo{
    .page__logo__text{
       color: $color-font-logo;
       font-size: 120px ;
       font-weight: 700;
     }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}


  
</style>