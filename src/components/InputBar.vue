<template>
          <form @click="$router.push({
                name:'Search'
            })">
              <input v-model="message"  type="text"  />
            <span class="material-icons">search</span>
            <div class="info">search your movies</div>
          </form>
           
          
</template>
<style lang="scss" scoped>
    form{
        position: relative;
        input{
            
            width:612px ;
            height: 48px;
            border-radius: 24px;
            border: none; 
            background-color:rgba($color-font,0.3);
            font-size: 32px;  
            color: $color-font;
            padding-left: 30px;
            &:focus{
                outline: none;
            }     
        }
        .info{
            font-size: 24px;  
            font-weight: 300;
            color: $color-font;
            position: absolute;
            top:12px;
            left: 60px;
        }
        .material-icons{
             color: $color-font;
             position: absolute;
            top:15px;
            left: 30px;
        }
    }
    
</style>