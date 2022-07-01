type TWords = {
  [key: string]: string;
};

class TDict {
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

class TWord {
  constructor(public term: string, public def: string) {}
}

const Tkimchi = new Word("kimchi", "한국의 음식");

const Tdict = new Dict();

Tdict.add(kimchi);
