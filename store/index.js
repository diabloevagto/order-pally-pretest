import { reactive } from "vue";

const Delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const state = reactive({
  list: [
    {
      id: 0,
      text: "t1",
      checked: false,
    },
    {
      id: 1,
      text: "t2",
      checked: true,
    },
  ],
});

const clickCheckbox = async (id) => {
  const targetIndex = state.list.findIndex((v) => v.id === id);
  if (targetIndex !== -1) {
    state.list[targetIndex].checked = !state.list[targetIndex].checked;
  }
};

const deleteList = async (id) => {
  await Delay(1000);
  const targetIndex = state.list.findIndex((v) => v.id === id);
  if (targetIndex !== -1) {
    state.list.splice(targetIndex, 1);
  }
};

const addList = async (msg) => {
  await Delay(1000);
  if (msg !== "") {
    state.list.push({
      id: new Date(),
      text: msg,
      checked: false,
    });
  }
};

export default {
  ...state,
  clickCheckbox,
  deleteList,
  addList,
};
