type Player<E> = {
  name: string;
  extraInfo: E
}

type Like = {
  favFood: string;
}

type MyProfile = Player<Like>

const profile: MyProfile = {
  name: "jiho",
  extraInfo: {
      favFood: "kimchi"
  }
}

