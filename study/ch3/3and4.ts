type Player1<E> = {
  name: string;
  extraInfo: E
}

type Like = {
  favFood: string;
}

type MyProfile = Player1<Like>

const profile: MyProfile = {
  name: "jiho",
  extraInfo: {
      favFood: "kimchi"
  }
}

