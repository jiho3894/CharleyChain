// call signatures 3개의 타입을 동시에 선언해줘야함
// type SuperPrint = {
//   (arr : string[]) : void
//   (arr : number[]) : void
// }

// 제네릭 타입을 선언해 타입을 감지
type SuperPrint = {
  <T>(arr: T[]): T
}


const prints: SuperPrint = (arr) => {
  return arr[0]
}

const a = prints(["1", "2", "3"])
const b = prints([1, 2, 3])
const c = prints(["1", "2", 3, true])