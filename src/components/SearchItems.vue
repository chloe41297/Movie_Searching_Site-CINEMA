<template>
  <li @click="onItemClick">
    <Modale
      :movieID="movieList.imdbID"
      :key="movieList.imdbID"
      v-on:getClosed="getClosedData"
      v-if="this.isClicked && isClosed"
    ></Modale>
    <img :src="movieList.Poster" v-if="movieList.Poster !== 'N/A'" />
    <div class="replaceImg" v-if="movieList.Poster === `N/A`">CINEMA</div>
    <div class="title">
      {{ movieList.Title }}
    </div>
    <div class="second-row">
      <div class="year">
        {{ movieList.Year }}
      </div>
      <div class="Type">
        {{ movieList.Type }}
      </div>
    </div>
  </li>
</template>
<script>
import Modale from "~/components/Modale";
export default {
  components: {
    Modale,
  },
  data() {
    return {
      isClicked: false,
      isClosed: true,
    };
  },
  props: {
    movieList: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onItemClick() {
      if (!this.isClicked) {
        this.isClicked = !this.isClicked;
      }
    },
    getClosedData(isClosing) {
      this.isClosed = false;
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  margin-bottom: 10px;
  img {
    width: 200px;
    &:hover {
      box-shadow: 0 5px 40px rgba($color-font, 0.5);
    }
  }
  .replaceImg {
    min-width: 200px;
    height: 260px;
    background-color: rgba($color-font, 0.3);
    text-align: center;
    line-height: 260px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
    color: $color-font-logo;
    font-weight: 600;
    &:hover {
      box-shadow: 0 5px 40px rgba($color-font, 0.5);
    }
  }
  .title {
    font-weight: 400;
    margin-right: 20px;
  }
  .second-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    padding-top: 4px;
    :first-child {
      padding-right: 10px;
      &::after {
        content: "•";
        padding-left: 10px;
      }
    }
  }
}
</style>
