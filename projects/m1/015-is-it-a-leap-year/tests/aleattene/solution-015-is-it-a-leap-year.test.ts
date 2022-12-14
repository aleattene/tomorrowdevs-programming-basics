import {isLeapYear} from "../../solutions/aleattene/solution-015-is-it-a-leap-year";

describe('Is a Leap Year or not', () => {
    it('Test', () => {
        expect(isLeapYear('0')).toBe('is a Leap Year');
        expect(isLeapYear('1')).toBe('is not a Leap Year');
        expect(isLeapYear('2')).toBe('is not a Leap Year');
        expect(isLeapYear('3')).toBe('is not a Leap Year');
        expect(isLeapYear('4')).toBe('is a Leap Year');
        expect(isLeapYear('5')).toBe('is not a Leap Year');
        expect(isLeapYear('6')).toBe('is not a Leap Year');
        expect(isLeapYear('7')).toBe('is not a Leap Year');
        expect(isLeapYear('8')).toBe('is a Leap Year');
        expect(isLeapYear('9')).toBe('is not a Leap Year');
        expect(isLeapYear('10')).toBe('is not a Leap Year');
        expect(isLeapYear('100')).toBe('is not a Leap Year');
        expect(isLeapYear('200')).toBe('is not a Leap Year');
        expect(isLeapYear('300')).toBe('is not a Leap Year');
        expect(isLeapYear('400')).toBe('is a Leap Year');
        expect(isLeapYear('500')).toBe('is not a Leap Year');
        expect(isLeapYear('600')).toBe('is not a Leap Year');
        expect(isLeapYear('700')).toBe('is not a Leap Year');
        expect(isLeapYear('800')).toBe('is a Leap Year');
        expect(isLeapYear('900')).toBe('is not a Leap Year');
        expect(isLeapYear('1000')).toBe('is not a Leap Year');
        expect(isLeapYear('1100')).toBe('is not a Leap Year');
        expect(isLeapYear('1200')).toBe('is a Leap Year');
        expect(isLeapYear('1300')).toBe('is not a Leap Year');
        expect(isLeapYear('1400')).toBe('is not a Leap Year');
        expect(isLeapYear('1500')).toBe('is not a Leap Year');
        expect(isLeapYear('1600')).toBe('is a Leap Year');
        expect(isLeapYear('1700')).toBe('is not a Leap Year');
        expect(isLeapYear('1800')).toBe('is not a Leap Year');
        expect(isLeapYear('1900')).toBe('is not a Leap Year');
        expect(isLeapYear('2000')).toBe('is a Leap Year');
        expect(isLeapYear('2001')).toBe('is not a Leap Year');
        expect(isLeapYear('2002')).toBe('is not a Leap Year');
        expect(isLeapYear('2003')).toBe('is not a Leap Year');
        expect(isLeapYear('2004')).toBe('is a Leap Year');
        expect(isLeapYear('2005')).toBe('is not a Leap Year');
        expect(isLeapYear('2006')).toBe('is not a Leap Year');
        expect(isLeapYear('2007')).toBe('is not a Leap Year');
        expect(isLeapYear('2008')).toBe('is a Leap Year');
        expect(isLeapYear('2009')).toBe('is not a Leap Year');
        expect(isLeapYear('2010')).toBe('is not a Leap Year');
        expect(isLeapYear('2011')).toBe('is not a Leap Year');
        expect(isLeapYear('2012')).toBe('is a Leap Year');
        expect(isLeapYear('2013')).toBe('is not a Leap Year');
        expect(isLeapYear('2014')).toBe('is not a Leap Year');
        expect(isLeapYear('2015')).toBe('is not a Leap Year');
        expect(isLeapYear('2016')).toBe('is a Leap Year');
        expect(isLeapYear('2017')).toBe('is not a Leap Year');
        expect(isLeapYear('2018')).toBe('is not a Leap Year');
        expect(isLeapYear('2019')).toBe('is not a Leap Year');
        expect(isLeapYear('2020')).toBe('is a Leap Year');
        expect(isLeapYear('2021')).toBe('is not a Leap Year');
        expect(isLeapYear('2022')).toBe('is not a Leap Year');
        expect(isLeapYear('2023')).toBe('is not a Leap Year');
        expect(isLeapYear('2024')).toBe('is a Leap Year');
        expect(isLeapYear('2025')).toBe('is not a Leap Year');
        expect(isLeapYear('2026')).toBe('is not a Leap Year');
        expect(isLeapYear('2027')).toBe('is not a Leap Year');
        expect(isLeapYear('2028')).toBe('is a Leap Year');
        expect(isLeapYear('2029')).toBe('is not a Leap Year');
        expect(isLeapYear('2030')).toBe('is not a Leap Year');
    });
});