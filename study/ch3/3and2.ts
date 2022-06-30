// call signatures 3개의 타입을 동시에 선언해줘야함
// type SuperPrint = {
//   (arr : string[]) : void
//   (arr : number[]) : void
// }

// 제네릭 타입을 선언해 타입을 감지
type SuperPrint = {
  // <T> 제네릭 선언 => T[] 배열 형태의 인자를 받아오고 => T 형태의 값으로 return한다
  <T>(arr: T[]): T
}


const prints: SuperPrint = (arr) => {
  return arr[0]
}

const a = prints(["1", "2", "3"])
const b = prints([1, 2, 3])
const c = prints(["1", "2", 3, true])