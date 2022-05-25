<template>
  <div class="div-header">
    <IconHamburger class="icon-hamburger" />
    <span class="header-text">HandsUP</span>
    <IconSignOut class="icon-sign-out" />
  </div>
</template>

<style lang="scss" scoped>
.div-header {
  position: fixed;
  top: 0px;

  width: calc(100vw - 24px);
  background-color: var(--primary-color);
  padding: 12px 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  > .icon-hamburger {
    cursor: pointer;
  }

  > .header-text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    color: #ffffff;

    flex-grow: 1;
  }

  > .icon-sign-out {
    cursor: pointer;
  }
}
</style>
