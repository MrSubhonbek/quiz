export const shuffle = (array: Array<string>) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
export const toDateTime = (seconds: number) => {
  let t = new Date(1970, 0, 1);
  t.setSeconds(seconds);
  return t;
};
