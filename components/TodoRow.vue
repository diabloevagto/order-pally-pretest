<template>
  <div class="div-row">
    <IconChecked class="icon-checked" v-if="checked" @click="clickBox" />
    <IconUncheck class="icon-uncheck" v-else @click="clickBox" />
    <span
      class="text"
      :style="{ color: checked ? 'var(--primary-color);' : '#000000' }"
    >
      {{ text }}
    </span>
    <span v-if="loading">loading...</span>
    <IconTrash class="icon-trash" @click="clickDelete" v-else />
  </div>
</template>

<script>
export default {
  data: () => ({ loading: false }),
  inject: ["clickCheckbox", "deleteList"],
  props: {
    id: Number,
    text: String,
    checked: Boolean,
  },
  methods: {
    async clickBox() {
      await this.clickCheckbox(this.id);
    },
    async clickDelete() {
      if (this.loading === false) {
        this.loading = true;
        await this.deleteList(this.id);
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
  gap: 20px;

  > .text {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    flex-grow: 1;
  }

  > .icon-checked,
  .icon-trash,
  .icon-uncheck {
    cursor: pointer;
  }
}
</style>
