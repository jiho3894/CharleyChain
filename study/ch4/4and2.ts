type TWo = {
  [key: string]: string;
};

class TDic {
  private words: TWords;
  constructor() {
    this.words = {};
  }

  add(word: TWord) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class TW {
  constructor(public term: string, public def: string) {}
}

const Tkimch = new Word("kimchi", "한국의 음식");

const Tdic = new Dict();

Tdict.add(kimchi);
