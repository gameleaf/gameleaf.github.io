class Word {
    chinese: string;
    english: string;
    pinyin: string;
    tone: number; // 0, 1, 2, 3, 4

    constructor(chineseWord: string, englishWord: string, pinyinWithoutTone: string, tone: number) {
        this.chinese = chineseWord;
        this.english = englishWord;
        this.pinyin = pinyinWithoutTone;
        this.tone = tone;
    }

    get pinyinWithToneMarks(): string {
        // TODO: Find the vowel in the pinyin and replace it with the correct diacritic!
        // TODO: Alternatively, we should just bake it in! (Easier, for sure!)
        return this.pinyin;
    }

    get pinyinWithToneNumber(): string {
        return `${this.pinyin}${this.tone}`; // e.g., tian1 == sky
    }
}

// When a syllable contains two or more vowels, the tone mark is usually placed above vowels in the order of a，o，e，i，u，ü. Example: hǎo，xiè，ɡuān
// https://en.wikipedia.org/wiki/Pinyin_table

const vowels = [
    `ā`,
    `ā`,
    `ā`,
    `ā` /* */,
    `e`,
    `e`,
    `e`,
    `e` /* */,
    `ī`,
    `í`,
    `ǐ`,
    `ì` /* */,
    `o`,
    `o`,
    `o`,
    `o` /* */,
    `ù`,
    `ù`,
    `ù`,
    `ù` /* */,
    `ǚ`,
    `ǚ`,
    `ǚ`,
    `ǚ` /* */,
];

const wordsByLevel = {
    0: [
        new Word(`一`, `one`, `yi`, 1),
        new Word(`二`, `two`, `er`, 4),
        new Word(`三`, `three`, `san`, 1),
        new Word(`四`, `four`, `si`, 4),
        new Word(`五`, `five`, `wu`, 3),
        new Word(`六`, `six`, `liu`, 4),
        new Word(`七`, `seven`, `qi`, 1),
        new Word(`八`, `eight`, `ba`, 1),
        new Word(`九`, `nine`, `jiu`, 3),
        new Word(`十`, `ten`, `shi`, 2),
    ],
    1: [new Word(`年`, `year`, `nian`, 2)],
};

class WordDB {
    level: number = 0;

    setLevel(level: number) {
        this.level = level;
    }

    getRandomWord() {
        let words: Word[] = wordsByLevel[this.level];
        let randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    getAllWords_Chinese(): string[] {
        let words: Word[] = wordsByLevel[this.level];
        let words_Chinese: string[] = [];
        words.forEach((word) => {
            words_Chinese.push(word.chinese);
        });
        return words_Chinese;
    }
}

const singleton = new WordDB();
export default singleton;
