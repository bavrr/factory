const PEOPLE_DEX = 20;
const PEOPLE_STR = 20;
const PEOPLE_INT = 20;
const PEOPLE_COUNT = 200;

export default function (cyborg) {
  return (
    ((cyborg.id * (cyborg.dex + cyborg.str + cyborg.int)) /
      ((PEOPLE_DEX + PEOPLE_STR + PEOPLE_INT) * PEOPLE_COUNT)) *
    100
  ).toFixed(2);
}
