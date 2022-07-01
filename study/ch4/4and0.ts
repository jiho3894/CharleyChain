// 추상 클래스 => 다른 클래스가 상속받을 수 있는 클래스
// 추상 클래스는 직접 인스턴스 생성은 불가능
abstract class User {
  constructor(
    // protected는 private의 클래스간 사용불가를 사용으로 가능해짐
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName}${this.lastName}`;
  }
}

// 추상 클래스 상속
class Player extends User {
  getNickName() {
    console.log(this.nickName);
  }
}

const jiho = new Player("jiho", "kim", "charley");
