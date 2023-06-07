const analyzer = {
  getWordCount: (text) => {
    const words = text.trim().split(' ');
    const characters = '.,;:"«»[]{}()¿?¡!-';
    for (let i = 0; i < words.length; i++) {
      if (characters.includes(words[i])) {
        return 0;
      } else {
        return words.length;
      }
    }
    // const regExp = /[a-zA-ZÀ-ÿ0-9-—|'¿+}{.,<°!«»"#$%&/)(=?¡*¨_:;>¬~`^\u00f1\u00d1]+/g;
    // if (regExp.test(text)) {
    //   return text.match(regExp).length;
    // } else {
    //   return 0;
    // }
  },
  getCharacterCount: (text) => {
    return text.split('').length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const leters = text.trim().replace(/\s+/g, '').split('');
    const characters = '.,;:"«»[]{}()¿?¡!-';
    let characterCount = [];
    for (let i = 0; i < leters.length; i++) {
      if (!characters.includes(leters[i])) {
        characterCount += leters[i];
      }
    }
    return characterCount.length;
    // const regExp = /[a-zA-ZÀ-ÿ0-9|+°#$%&/=*¨_¬~`^\u00f1\u00d1]{1}/g;
    // if (regExp.test(text)) {
    //   return text.match(regExp).length;
    // } else {
    //   return 0;
    // }
  },
  getAverageWordLength: (text) => {
    const words = text.trim().split(' ');
    const characters = '.,;:"«»[]{}()¿?¡!-';
    const wordsLength = [];
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      for (let i = 0; i < characters.length; i++) {
        if (word.includes(characters[i])) {
          word = word.replace(characters[i],'');
        }
      }
      wordsLength.push(word.length);
    }
    if (wordsLength[0] === 0) {
      return 0;
    } else {
      const numberSum = wordsLength.reduce((a, b) => parseInt(a) + parseInt(b));
      return Number((numberSum / wordsLength.length).toFixed(2));
    }
  },
  getNumberCount: (text) => {
    const words = text.trim().split(' ');
    const numberCount = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i] === '') return 0;
      if (!isNaN(words[i])) {
        numberCount.push(words[i]);
      }
    }
    return numberCount.length;
    // const regExp = /[0-9]{1}/g;
    // if (regExp.test(text)) {
    //   return text.match(regExp).length;
    // } else {
    //   return 0;
    // }
  },
  getNumberSum: (text) => {
    const words = text.trim().split(' ');
    const numberCount = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i] === '') return 0;
      if (!isNaN(words[i])) {
        numberCount.push(words[i]);
      }
    }
    if (numberCount.length === 0) {
      return 0
    } else {
      return numberCount.reduce((a, b) => Number(a) + Number(b));
    }
    // const regExp = /[0-9]{1}/g;
    // if (regExp.test(text)) {
    //   return text.match(regExp).reduce((a, b) => parseInt(a) + parseInt(b));
    // } else {
    //   return 0;
    // }
  },
};

export default analyzer;