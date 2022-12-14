import {isVowelOrConsonant} from '../../solutions/aleattene/solution-009-vowel-or-consonant';

describe('Vowel or Consonant', () => {
    it('Test', () => {
        expect(isVowelOrConsonant("a")).toBe("is a Vowel");
        expect(isVowelOrConsonant("e")).toBe("is a Vowel");
        expect(isVowelOrConsonant("i")).toBe("is a Vowel");
        expect(isVowelOrConsonant("o")).toBe("is a Vowel");
        expect(isVowelOrConsonant("u")).toBe("is a Vowel");
        expect(isVowelOrConsonant("A")).toBe("is a Vowel");
        expect(isVowelOrConsonant("E")).toBe("is a Vowel");
        expect(isVowelOrConsonant("I")).toBe("is a Vowel");
        expect(isVowelOrConsonant("O")).toBe("is a Vowel");
        expect(isVowelOrConsonant("U")).toBe("is a Vowel");
        expect(isVowelOrConsonant("y")).toBe("sometimes is a Vowel, sometimes is a Consonant");
        expect(isVowelOrConsonant("Y")).toBe("sometimes is a Vowel, sometimes is a Consonant");
        expect(isVowelOrConsonant("b")).toBe("is a Consonant");
        expect(isVowelOrConsonant("c")).toBe("is a Consonant");
        expect(isVowelOrConsonant("d")).toBe("is a Consonant");
        expect(isVowelOrConsonant("f")).toBe("is a Consonant");
        expect(isVowelOrConsonant("g")).toBe("is a Consonant");
        expect(isVowelOrConsonant("h")).toBe("is a Consonant");
        expect(isVowelOrConsonant("j")).toBe("is a Consonant");
        expect(isVowelOrConsonant("k")).toBe("is a Consonant");
        expect(isVowelOrConsonant("l")).toBe("is a Consonant");
        expect(isVowelOrConsonant("m")).toBe("is a Consonant");
        expect(isVowelOrConsonant("n")).toBe("is a Consonant");
        expect(isVowelOrConsonant("p")).toBe("is a Consonant");
        expect(isVowelOrConsonant("q")).toBe("is a Consonant");
        expect(isVowelOrConsonant("r")).toBe("is a Consonant");
        expect(isVowelOrConsonant("s")).toBe("is a Consonant");
        expect(isVowelOrConsonant("t")).toBe("is a Consonant");
        expect(isVowelOrConsonant("v")).toBe("is a Consonant");
        expect(isVowelOrConsonant("w")).toBe("is a Consonant");
        expect(isVowelOrConsonant("x")).toBe("is a Consonant");
        expect(isVowelOrConsonant("z")).toBe("is a Consonant");
        expect(isVowelOrConsonant("B")).toBe("is a Consonant");
        expect(isVowelOrConsonant("C")).toBe("is a Consonant");
        expect(isVowelOrConsonant("D")).toBe("is a Consonant");
        expect(isVowelOrConsonant("F")).toBe("is a Consonant");
        expect(isVowelOrConsonant("G")).toBe("is a Consonant");
        expect(isVowelOrConsonant("H")).toBe("is a Consonant");
        expect(isVowelOrConsonant("J")).toBe("is a Consonant");
        expect(isVowelOrConsonant("K")).toBe("is a Consonant");
        expect(isVowelOrConsonant("L")).toBe("is a Consonant");
        expect(isVowelOrConsonant("M")).toBe("is a Consonant");
        expect(isVowelOrConsonant("N")).toBe("is a Consonant");
        expect(isVowelOrConsonant("P")).toBe("is a Consonant");
        expect(isVowelOrConsonant("Q")).toBe("is a Consonant");
        expect(isVowelOrConsonant("R")).toBe("is a Consonant");
        expect(isVowelOrConsonant("S")).toBe("is a Consonant");
        expect(isVowelOrConsonant("T")).toBe("is a Consonant");
        expect(isVowelOrConsonant("V")).toBe("is a Consonant");
        expect(isVowelOrConsonant("W")).toBe("is a Consonant");
        expect(isVowelOrConsonant("X")).toBe("is a Consonant");
        expect(isVowelOrConsonant("Z")).toBe("is a Consonant");
    });
});