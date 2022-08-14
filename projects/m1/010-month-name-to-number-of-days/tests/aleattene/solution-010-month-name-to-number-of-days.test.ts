import {getDaysMonth} from '../../solutions/aleattene/solution-010-month-name-to-number-of-days';

describe('Days in Month', () => {
    it('Test', () => {
        expect(getDaysMonth("january")).toBe(31);
        expect(getDaysMonth("february")).toBe(29);
        expect(getDaysMonth("march")).toBe(31);
        expect(getDaysMonth("april")).toBe(30);
        expect(getDaysMonth("may")).toBe(31);
        expect(getDaysMonth("june")).toBe(30);
        expect(getDaysMonth("july")).toBe(31);
        expect(getDaysMonth("august")).toBe(31);
        expect(getDaysMonth("september")).toBe(30);
        expect(getDaysMonth("october")).toBe(31);
        expect(getDaysMonth("november")).toBe(30);
        expect(getDaysMonth("december")).toBe(31);
        expect(getDaysMonth("january".toUpperCase())).toBe(31);
        expect(getDaysMonth("february".toUpperCase())).toBe(29);
        expect(getDaysMonth("march".toUpperCase())).toBe(31);
        expect(getDaysMonth("april".toUpperCase())).toBe(30);
        expect(getDaysMonth("may".toUpperCase())).toBe(31);
        expect(getDaysMonth("june".toUpperCase())).toBe(30);
        expect(getDaysMonth("july".toUpperCase())).toBe(31);
        expect(getDaysMonth("august".toUpperCase())).toBe(31);
        expect(getDaysMonth("september".toUpperCase())).toBe(30);
        expect(getDaysMonth("october".toUpperCase())).toBe(31);
        expect(getDaysMonth("november".toUpperCase())).toBe(30);
        expect(getDaysMonth("december".toUpperCase())).toBe(31);
        expect(getDaysMonth("January")).toBe(31);
        expect(getDaysMonth("February")).toBe(29);
        expect(getDaysMonth("March")).toBe(31);
        expect(getDaysMonth("April")).toBe(30);
        expect(getDaysMonth("May")).toBe(31);
        expect(getDaysMonth("June")).toBe(30);
        expect(getDaysMonth("July")).toBe(31);
        expect(getDaysMonth("August")).toBe(31);
        expect(getDaysMonth("September")).toBe(30);
        expect(getDaysMonth("October")).toBe(31);
        expect(getDaysMonth("November")).toBe(30);
        expect(getDaysMonth("December")).toBe(31);
    });
});