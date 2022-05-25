<template>
  <div class="div-row">
    <input v-model="msg" placeholder="請輸入要做的事情" />
    <div class="add-btn">
      <span v-if="loading">loading...</span>
      <IconPlus @click="add" v-else />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ msg: "", loading: false }),
  inject: ["addList"],
  methods: {
    async add() {
      if (this.loading === false) {
        this.loading = true;
        await this.addList(this.msg);
        this.msg = "";
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.div-row {
  margin-top: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;

  > input {
    color: #c1c1c1;
    border: 1px solid #c7c3c6;
    border-radius: var(--border-radius);
    padding: 11px 14px;
    font-size: 14px;

    flex-grow: 1;
  }
  > input::placeholder {
    color: #c1c1c1;
  }

  > .add-btn {
    background-color: var(--primary-color);
    width: 35px;
    height: 35px;
    border-radius: var(--border-radius);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }
}
</style>
