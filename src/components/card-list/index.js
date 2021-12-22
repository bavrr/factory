import Card from "@/components/card/index.vue";
import UiButton from "@/components/ui/button/index.vue";
import ModalWindow from "@/components/modal/index.vue";

export default {
  components: {
    Card,
    UiButton,
    ModalWindow,
  },
  data() {
    return {
      modalIsOpen: false,
    };
  },
  computed: {
    cyborgList() {
      return this.$store.getters.cyborgList;
    },
  },
  methods: {
    createCyborg(cyborg) {
      this.modalIsOpen = false;
      this.$store.dispatch("createCyborg", cyborg);
      this.$store.dispatch("saveData");
    },
  },
};
