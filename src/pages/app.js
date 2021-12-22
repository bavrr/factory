import AppHeader from "@/components/header/index.vue";
import AppBody from "@/components/body/index.vue";

export default {
  components: {
    AppHeader,
    AppBody,
  },
  created() {
    this.$store.dispatch("getData");
  },
};
