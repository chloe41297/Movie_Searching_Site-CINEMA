<template>
  <header>
    <logo />
    <IconSearch />
  </header>
  <main>
    <div @click="getListItem">click</div>
    <div></div>
  </main>
</template>
<script>
import logo from "~/components/logo";
import IconSearch from "~/components/IconSearch";
import SearchItems from "~/components/SearchItems";
export default {
  data() {
    return {
      computedList: [],
      getList: [],
    };
  },
  props() {
    return {
      likeLists() {},
    };
  },
  computed: {
    likeLists() {
      const length = localStorage.length;
      for (let i = 0; i < length; i++) {
        let key = localStorage.key(i);
        this.computedList.push(localStorage.getItem(key));
        console.log(localStorage.getItem(key));
      }
    },
    gotListItem() {
      return this.$store.state.search.idResult;
    },
  },
  components: {
    logo,
    IconSearch,
    SearchItems,
  },
  methods: {
    getListItem() {
      this.$store.dispatch("search/searchByID", {
        id: this.computedList[0],
      });
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
}
main {
  color: $color-font;
}
</style>
