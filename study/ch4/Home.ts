type Words = {
  [key: string]: string
}

class Dict {
  private words: Words
  constructor() {
    this.words = {}
  }

  add(word: Word) {
    if(this.words[word.term] === undefined){
      this.words[word.term] = word.def
    }
  }
  get() {
    return this.get
  }
  delete() {
    return this.delete
  }
  update(word:Word,fixed: string){
    if(this.words[word.term] === undefined){
      this.words[word.term] = fixed
    }
  }
  showAll() {
    return this.showAll
  }
  count() {
    return this.words.length
  }
}

class Word {
  constructor(
    public term: string,
    public def: string
  ) { }
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict()