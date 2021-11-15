<template>
      <section class="input__wrapper">
        
        <form  v-on:keyup.prevent="onInput" v-on:submit.prevent="onInput"> <!-- v-on:keyup.prevent="onInput"-->
              <input v-model="message" type="text"/>
          </form>
          <div class="info" v-if="message">' {{message}} ' 에 대한 검색 결과 입니다.</div>
          <section class="main__contents" style="color:red;" :key="maxPage" :maxPage = "maxPage">
            <span  v-if="this.page > 1" class="material-icons" id="beforeBtn" @click="onPageClick">arrow_back_ios</span>
             <ul class="searchLists" v-if="message">
              <SearchItems 
              v-for="movieList in movieLists"
              :key="movieList.imdbID"
              :movieList = "movieList"/>
            </ul>
          <span  v-if="this.page < Math.ceil(maxPage.totalResults / 10) && message " class="material-icons" id="nextBtn" @click="onPageClick">arrow_forward_ios</span>
          </section>   
       </section>
          
</template>
<script>
import SearchItems from '~/components/SearchItems'
export default {
  props:{
    maxPage:{
      type:Number,
      default: () => ({})
    }
  },
    components:{
        SearchItems
    },
    data(){
        return{
            message:'',
            page: 1,
            lastPage: this.maxPage.totalResults
        }
    },
    computed:{
        movieLists(){
          return  this.$store.state.search.searchResult.Search
        },
        maxPage(){
          return this.$store.state.search.searchResult
        }
    },
    methods:{
        async onInput(){
           await this.$store.dispatch('search/readSearch',{
                title: this.message              
            }) 
        },
         async onPageClick(e){
          if(e.target.id === "beforeBtn"){
            this.page <= 1 ? this.page = 1 : this.page--;
          }
          if(e.target.id === "nextBtn"){
            this.page += 1;
          } 
          await this.$store.dispatch('search/switchPages',{
                title: this.message,
                currentPage: this.page
              })
        } 
    }
}
</script>
<style lang="scss" scoped>
  .input__wrapper{
      form{
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            width:612px ;
            height: 48px;
            border-radius: 24px;
            border: none; 
            background-color:rgba($color-font,0.3);
            font-size: 32px;  
            color: $color-font;
            text-align: center;
            &:focus{
                outline: none;
            }     
        }
    }
    .info{
      display: flex;
      justify-content:center;
      align-items: center;
      color: $color-font;
      font-size: 32px;
      margin: 40px 0px;
    }
    .main__contents{
      display: flex;
      justify-content: space-between;
      align-items: center;
      ul{ 
        margin : 0px auto;
        width: 1123px;
        font-size: 24px;  
        font-weight: 300;
        color: $color-font;
        display: grid;
        grid-template-columns: repeat(5,1fr);
      }
      #beforeBtn{
        position: fixed;
        padding: 10px 6px 10px 14px;
        top:50%;
        left: 40px;
        color: $color-font;
        background-color: rgba($color-font,0.3);
        border-radius: 50%;
        margin: 40px;
        
      }
      #nextBtn{
        position: fixed;
        padding: 10px;
        right: 40px;
        top:50%;
        color: $color-font;
        background-color: rgba($color-font,0.3);
        border-radius: 50%;
        margin: 40px;
      }
      .material-icons{
        &:hover{
          transform: scale(1.1);
          box-shadow: 0 4px 20px rgba($color-font, 0.3);
        }
      }
    }
    
    
  }
    
    
</style>