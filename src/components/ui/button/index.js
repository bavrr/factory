export default {
  props: {
    currentProgress: {
      type: String,
      default: "60",
    },
  },
  computed: {
    progressValue() {
      return this.currentProgress + "%";
    },
  },
};
