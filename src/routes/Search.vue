<template>
  <div class="search__wrapper">
    <header>
      <logo />
    </header>
    <section class="input__area">
      <InputFunc />
    </section>
  </div>
</template>
<script>
import InputFunc from "~/components/InputFunctional";
import logo from "~/components/logo";
export default {
  components: {
    InputFunc,
    logo,
  },
};
</script>
<style lang="scss" scoped>
.search__wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
  justify-content: center;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
  }
  .input__area {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
