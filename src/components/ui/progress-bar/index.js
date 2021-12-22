export default {
  props: {
    currentProgress: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    progressValue() {
      return this.currentProgress + "%";
    },
  },
};
