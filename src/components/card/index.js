export default {
  props: {
    card: {
      required: true,
      type: Object,
    },
  },
  CYBORG_TYPES_LIST: {
    firstGeneration: {
      idText: "КПП",
      subHeaderText: "Киборг первого поколения",
    },
    secondGeneration: {
      idText: "КВП",
      subHeaderText: "Киборг второго поколения",
    },
  },
  STATS_LIST: {
    str: {
      id: "str",
      title: "Сила",
    },
    dex: {
      id: "dex",
      title: "Ловкость",
    },
    int: {
      id: "int",
      title: "Интеллект",
    },
  },
  methods: {
    formatId() {
      return `${
        this.$options.CYBORG_TYPES_LIST[this.card.cyborgType].idText
      } #${this.card.id}`;
    },
    formatSubHeaderText() {
      return this.$options.CYBORG_TYPES_LIST[this.card.cyborgType]
        .subHeaderText;
    },
    formatStatText(stat) {
      return `${stat.title}: ${this.card[stat.id]}`;
    },
    formatTitleText() {
      return `${this.card.lastName} ${this.card.firstName} ${this.card.middleName}`;
    },
  },
};
