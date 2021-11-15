<template>
  <section
    v-if="detailInfo.Response"
    :detailInfo="detailInfo"
    :key="detailInfo.imdbID"
    class="modale__wrapper"
  >
    <div class="content__wrapper">
      <span class="material-icons closeBtn" v-on:click="onClose">close</span>
      <section class="main__info">
        <img :src="detailInfo.Poster" v-if="detailInfo.Poster !== `N/A`" />
        <div class="replaceImg" v-if="detailInfo.Poster === `N/A`">N/A</div>
        <div class="info__text">
          <h2 class="title">{{ detailInfo.Title }}</h2>
          <div>
            <span class="material-icons" @click="onClick" v-if="!isLiked"
              >favorite_border</span
            >
            <span class="material-icons" @click="onClick" v-if="isLiked"
              >favorite</span
            >
          </div>
          <div class="released">{{ detailInfo.Released }}</div>
          <div class="typeNgenre">
            <span class="genre">{{ detailInfo.Genre }}</span> •
            <span class="type">{{ detailInfo.Type }}</span>
          </div>
          <div class="rates" v-if="detailInfo.Ratings.length">
            <h3>Rates</h3>
            <div
              class="rating"
              v-for="Rates in detailInfo.Ratings"
              :key="Rates"
            >
              <div class="rating__source">{{ Rates.Source }}</div>
              <div class="rating__value">{{ Rates.Value }}</div>
            </div>
          </div>
          <div
            class="boxoffice__info"
            v-if="detailInfo.BoxOffice && detailInfo.BoxOffice !== 'N/A'"
          >
            <h3>Box Office</h3>
            <div>{{ detailInfo.BoxOffice }}</div>
          </div>
        </div>
      </section>
      <section class="awards__info" v-if="detailInfo.Awards !== 'N/A'">
        <h3 class="awards__info__title">Awards</h3>
        <div>{{ detailInfo.Awards }}</div>
      </section>
      <section class="people__info">
        <h3 class="people__info__title">People Who Made</h3>
        <div class="actors"><b>Actors</b> | {{ detailInfo.Actors }}</div>
        <div class="director"><b>Director</b> | {{ detailInfo.Director }}</div>
        <div class="production">
          <b>Production</b> | {{ detailInfo.Production }}
        </div>
      </section>
      <section class="plot__info" v-if="detailInfo.Plot !== 'N/A'">
        <h3 class="plot__info__title">Plot</h3>
        <div class="plots">{{ detailInfo.Plot }}</div>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isLiked: localStorage.getItem(this.movieID) === this.movieID,
    };
  },
  props: {
    movieID: {
      type: String,
      default: () => ({}),
    },
    detailInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    detailInfo() {
      return this.$store.state.search.modaleResult;
    },
  },
  mounted() {
    this.$store.dispatch("search/openModale", {
      id: this.movieID,
    });
  },
  methods: {
    onClick() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        localStorage.setItem(this.movieID, this.movieID);
      } else if (!this.isLiked) {
        localStorage.removeItem(this.movieID);
      }
    },
    onClose() {
      this.$emit("getClosed", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.modale__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color-background, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .content__wrapper {
    width: 800px;
    height: 800px;
    background-color: $color-background;
    box-shadow: 0 5px 40px rgba($color-font, 0.3);
    border-radius: 16px;
    overflow: scroll;
    .main__info {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 30px;
      margin-left: 30px;
      img {
        width: 300px;
      }
      .replaceImg {
        min-width: 250px;
        height: 350px;
        background-color: rgba($color-font, 0.3);
        text-align: center;
        line-height: 350px;
        border-radius: 10px;
        font-size: 32px;
      }
      .info__text {
        margin-top: 10px;
        margin-left: 20px;
        .title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 30px;
          margin-right: 30px;
        }
        div {
          margin-bottom: 10px;
        }
        .typeNgenre {
          margin-bottom: 30px;
          .genre {
            margin-right: 10px;
          }
          .type {
            margin-left: 10px;
            font-weight: 400;
            color: $color-background;
            background-color: $color-font-logo;
            border-radius: 5px;
            padding: 0px 5px;
          }
        }
        .rates {
          h3 {
            font-size: 32px;
            margin-bottom: 10px;
            margin-right: 100px;
            font-weight: 400;
            border-bottom: solid 1px $color-font;
          }

          :nth-child(2) {
            .rating__value {
              background-color: #4c8bf5;
            }
          }
          :nth-child(3) {
            .rating__value {
              background-color: #ffce44;
            }
          }
          :nth-child(4) {
            .rating__value {
              background-color: #34a85b;
            }
          }
          .rating {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 0px;
            &__source {
              margin-right: 10px;
            }
            &__value {
              color: $color-background;
              padding: 0px 5px;
              border-radius: 5px;
              font-weight: 400;
            }
          }
        }
      }
      .boxoffice__info {
        h3 {
          font-size: 32px;
          margin-bottom: 10px;
          margin-right: 100px;
          font-weight: 400;
          border-bottom: solid 1px $color-font;
        }
      }
    }
    .people__info {
      margin-top: 30px;
      margin-left: 30px;
      &__title {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 10px;
        margin-right: 100px;
        border-bottom: solid 1px $color-font;
      }
      div {
        margin-bottom: 10px;
        b {
          font-weight: 400;
        }
      }
    }
    .plot__info {
      margin-top: 30px;
      margin-left: 30px;
      margin-bottom: 30px;
      &__title {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 10px;
        margin-right: 100px;
        border-bottom: solid 1px $color-font;
      }
      div {
        margin-right: 100px;
        line-height: 120%;
      }
    }
    .awards__info {
      margin-top: 30px;
      margin-left: 30px;
      &__title {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 10px;
        margin-right: 100px;
        border-bottom: solid 1px $color-font;
      }
    }
  }
  .closeBtn {
    position: fixed;
    top: calc(50% - 400px);
    right: calc(50% - 400px);
    font-size: 32px !important;
    &:hover {
      border: solid 1px rgba($color-font, 0.5);
    }
  }
}
</style>
