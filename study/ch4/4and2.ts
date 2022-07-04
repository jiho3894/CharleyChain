// type interface 차이는?
// type은 새로운 속성을 추가하기 위해서 다시 같은 이름으로 선어할 수 없지만
// interface는 항상 선언적 확장이 가능하다

interface User {
  name: string
}

const nico: User = {
  name: "3"
}