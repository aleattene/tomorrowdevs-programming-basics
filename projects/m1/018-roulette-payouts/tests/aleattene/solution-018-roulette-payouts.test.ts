import {oddOrEven, overOrUnder18, redOrBlack} from "../../solutions/aleattene/solution-018-roulette-payouts";

describe('Roulette Even or Odd', () => {
    it('Test', () => {
        expect(oddOrEven(0)).toBe('Even');
        expect(oddOrEven(2)).toBe('Even');
        expect(oddOrEven(4)).toBe('Even');
        expect(oddOrEven(6)).toBe('Even');
        expect(oddOrEven(8)).toBe('Even');
        expect(oddOrEven(10)).toBe('Even');
        expect(oddOrEven(12)).toBe('Even');
        expect(oddOrEven(14)).toBe('Even');
        expect(oddOrEven(16)).toBe('Even');
        expect(oddOrEven(18)).toBe('Even');
        expect(oddOrEven(20)).toBe('Even');
        expect(oddOrEven(22)).toBe('Even');
        expect(oddOrEven(24)).toBe('Even');
        expect(oddOrEven(26)).toBe('Even');
        expect(oddOrEven(28)).toBe('Even');
        expect(oddOrEven(30)).toBe('Even');
        expect(oddOrEven(32)).toBe('Even');
        expect(oddOrEven(34)).toBe('Even');
        expect(oddOrEven(36)).toBe('Even');
        expect(oddOrEven(38)).toBe('Even');
        expect(oddOrEven(40)).toBe('Even');
        expect(oddOrEven(1)).toBe('Odd');
        expect(oddOrEven(3)).toBe('Odd');
        expect(oddOrEven(5)).toBe('Odd');
        expect(oddOrEven(7)).toBe('Odd');
        expect(oddOrEven(9)).toBe('Odd');
        expect(oddOrEven(11)).toBe('Odd');
        expect(oddOrEven(13)).toBe('Odd');
        expect(oddOrEven(15)).toBe('Odd');
        expect(oddOrEven(17)).toBe('Odd');
        expect(oddOrEven(19)).toBe('Odd');
        expect(oddOrEven(21)).toBe('Odd');
        expect(oddOrEven(23)).toBe('Odd');
        expect(oddOrEven(25)).toBe('Odd');
        expect(oddOrEven(27)).toBe('Odd');
        expect(oddOrEven(29)).toBe('Odd');
        expect(oddOrEven(31)).toBe('Odd');
        expect(oddOrEven(33)).toBe('Odd');
        expect(oddOrEven(35)).toBe('Odd');
        expect(oddOrEven(37)).toBe('Odd');
        expect(oddOrEven(39)).toBe('Odd');
    });
});


describe('Roulette Over or Under 18', () => {
    it('Test', () => {
        expect(overOrUnder18(0)).toBe('Error');
        expect(overOrUnder18(1)).toBe('1 to 18');
        expect(overOrUnder18(2)).toBe('1 to 18');
        expect(overOrUnder18(3)).toBe('1 to 18');
        expect(overOrUnder18(4)).toBe('1 to 18');
        expect(overOrUnder18(5)).toBe('1 to 18');
        expect(overOrUnder18(6)).toBe('1 to 18');
        expect(overOrUnder18(7)).toBe('1 to 18');
        expect(overOrUnder18(8)).toBe('1 to 18');
        expect(overOrUnder18(9)).toBe('1 to 18');
        expect(overOrUnder18(10)).toBe('1 to 18');
        expect(overOrUnder18(11)).toBe('1 to 18');
        expect(overOrUnder18(12)).toBe('1 to 18');
        expect(overOrUnder18(13)).toBe('1 to 18');
        expect(overOrUnder18(14)).toBe('1 to 18');
        expect(overOrUnder18(15)).toBe('1 to 18');
        expect(overOrUnder18(16)).toBe('1 to 18');
        expect(overOrUnder18(17)).toBe('1 to 18');
        expect(overOrUnder18(18)).toBe('1 to 18');
        expect(overOrUnder18(19)).toBe('19 to 36');
        expect(overOrUnder18(20)).toBe('19 to 36');
        expect(overOrUnder18(21)).toBe('19 to 36');
        expect(overOrUnder18(22)).toBe('19 to 36');
        expect(overOrUnder18(23)).toBe('19 to 36');
        expect(overOrUnder18(24)).toBe('19 to 36');
        expect(overOrUnder18(25)).toBe('19 to 36');
        expect(overOrUnder18(26)).toBe('19 to 36');
        expect(overOrUnder18(27)).toBe('19 to 36');
        expect(overOrUnder18(28)).toBe('19 to 36');
        expect(overOrUnder18(29)).toBe('19 to 36');
        expect(overOrUnder18(30)).toBe('19 to 36');
        expect(overOrUnder18(31)).toBe('19 to 36');
        expect(overOrUnder18(32)).toBe('19 to 36');
        expect(overOrUnder18(33)).toBe('19 to 36');
        expect(overOrUnder18(34)).toBe('19 to 36');
        expect(overOrUnder18(35)).toBe('19 to 36');
        expect(overOrUnder18(36)).toBe('19 to 36');
        expect(overOrUnder18(37)).toBe('Error');
    });
});


describe('Roulette Red or Black', () => {
    it('Test', () => {
        expect(redOrBlack(0)).toBe('Error');
        expect(redOrBlack(1)).toBe('Red');
        expect(redOrBlack(2)).toBe('Black');
        expect(redOrBlack(3)).toBe('Red');
        expect(redOrBlack(4)).toBe('Black');
        expect(redOrBlack(5)).toBe('Red');
        expect(redOrBlack(6)).toBe('Black');
        expect(redOrBlack(7)).toBe('Red');
        expect(redOrBlack(8)).toBe('Black');
        expect(redOrBlack(9)).toBe('Red');
        expect(redOrBlack(10)).toBe('Black');
        expect(redOrBlack(11)).toBe('Black');
        expect(redOrBlack(12)).toBe('Red');
        expect(redOrBlack(13)).toBe('Black');
        expect(redOrBlack(14)).toBe('Red');
        expect(redOrBlack(15)).toBe('Black');
        expect(redOrBlack(16)).toBe('Red');
        expect(redOrBlack(17)).toBe('Black');
        expect(redOrBlack(18)).toBe('Red');
        expect(redOrBlack(19)).toBe('Red');
        expect(redOrBlack(20)).toBe('Black');
        expect(redOrBlack(21)).toBe('Red');
        expect(redOrBlack(22)).toBe('Black');
        expect(redOrBlack(23)).toBe('Red');
        expect(redOrBlack(24)).toBe('Black');
        expect(redOrBlack(25)).toBe('Red');
        expect(redOrBlack(26)).toBe('Black');
        expect(redOrBlack(27)).toBe('Red');
        expect(redOrBlack(28)).toBe('Black');
        expect(redOrBlack(29)).toBe('Black');
        expect(redOrBlack(30)).toBe('Red');
        expect(redOrBlack(31)).toBe('Black');
        expect(redOrBlack(32)).toBe('Red');
        expect(redOrBlack(33)).toBe('Black');
        expect(redOrBlack(34)).toBe('Red');
        expect(redOrBlack(35)).toBe('Black');
        expect(redOrBlack(36)).toBe('Red');
        expect(redOrBlack(37)).toBe('Error');
    });
});