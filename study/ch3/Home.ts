type LastArr = {
  <T>(arr: T[]): T;
};

const last: LastArr = (arr) => {
  return arr[arr.length - 1];
};

type PrependArr = {
  <T>(arr: T[], item: number) : T
}

const prepend: PrependArr = (arr,item) => {
  return arr[item]
}
