import UiButton from "@/components/ui/button/index.vue";

export default {
  emits: ["close", "createCyborg"],
  components: {
    UiButton,
  },
  data() {
    return {
      cyborg: {
        lastName: "",
        firstName: "",
        middleName: "",
        cyborgType: "firstGeneration",
        dex: 0,
        int: 0,
        str: 0,
      },
    };
  },
  CYBORG_STATS_BY_TYPE: {
    firstGeneration: {
      dex: 20,
      int: 20,
      str: 20,
    },
    secondGeneration: {
      dex: 25,
      int: 25,
      str: 25,
    },
  },
  CYBORG_GENERATION: [
    {
      id: "firstGeneration",
      title: "Киборг первого поколения",
    },
    {
      id: "secondGeneration",
      title: "Киборг второго поколени",
    },
  ],
  mounted() {
    this.$refs.lastNameInput.focus();
  },
  methods: {
    createCyborg() {
      this.$emit(
        "createCyborg",
        Object.assign(
          {},
          this.cyborg,
          this.$options.CYBORG_STATS_BY_TYPE[this.cyborg.cyborgType]
        )
      );
    },
  },
};
