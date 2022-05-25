<template>
  <Header></Header>
  <div class="div-list-wrap">
    <h1 class="title">Todo List</h1>
    <TodoRow
      v-for="l in list"
      :key="l.id"
      :id="l.id"
      :text="l.text"
      :checked="l.checked"
    />
    <AddTodoRow />
  </div>
</template>

<script>
export default {
  inject: ["list"],
};
</script>

<style lang="scss" scoped>
.div-list-wrap {
  background: #fff;
  width: 75vw;
  min-height: 70vh;
  padding: 33px;
  margin: 16px auto;
  margin-top: 90px;

  border: 1px solid #c7c3c6;
  border-radius: var(--border-radius);

  > .title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;

    color: #000000;
    margin: 0px;
  }
}
</style>
