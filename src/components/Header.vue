<template>
  <div class="header" @click="$router.push({ name: 'User' })">
    <span class="material-icons">person</span>
  </div>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-font;
  .material-icons {
    font-size: 32px !important;
    &:hover {
      color: $color-font-logo;
    }
  }
}
</style>
