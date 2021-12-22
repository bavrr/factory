import uiProgress from "@/components/ui/progress-bar/index.vue";

export default {
  components: {
    uiProgress,
  },
  computed: {
    dex() {
      return this.$store.getters.averageDex;
    },
    str() {
      return this.$store.getters.averageStr;
    },
    int() {
      return this.$store.getters.averageInt;
    },
    firstGeneration() {
      return this.$store.getters.firstGenerationProgress;
    },
    secondGeneration() {
      return this.$store.getters.secondGenerationProgress;
    },
  },
  AVERAGE_STATS: [
    {
      title: "Средняя сила",
      id: "str",
    },
    {
      title: "Средняя ловкость",
      id: "dex",
    },
    {
      title: "Средний интеллект",
      id: "int",
    },
  ],
  PROGRESS_LIST: [
    {
      title: "Киборги 1го поколения",
      id: "firstGeneration",
    },
    {
      title: "Киборги 2го поколения",
      id: "secondGeneration",
    },
  ],
  TEXT: `Исходя из того, что средние показатели
человека:
Сила 20
Ловкость 20
Интеллект 20
        
При общей популяции планеты Х в 200
человек для успешного захвата контроля
необходимо произвести * клонов 1 поколения
или * колонов 2 поколения`,
};
