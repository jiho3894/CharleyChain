// any와 비슷한 상황이 아닌가??
// (arr : any[]) : any이면 해당 값에 어떠한 값도 받기만하고 이후에 감지가 불가능
// ex) arr[0]가 number여도 p.upperCase()가 오류가 안나옴
type SuperPrints = {
  <T,M>(arr: T[], arr2: M): T
}

const Recap: SuperPrints = (arr) => {
  return arr[0]
}

const d = Recap(["1", "2", "3"],3)
const e = Recap([1, 2, 3], "2")