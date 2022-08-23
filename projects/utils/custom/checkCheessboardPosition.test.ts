import {checkChessboardPosition} from "./checkChessboardPosition";


describe('Check Valid Chessboard Position', () => {
    it('Test', () => {
        expect(checkChessboardPosition('')).toBe(false);
        expect(checkChessboardPosition(' ')).toBe(false);
        expect(checkChessboardPosition('A')).toBe(false);
        expect(checkChessboardPosition('A1B')).toBe(false);
        expect(checkChessboardPosition('A0')).toBe(false);
        expect(checkChessboardPosition('A1')).toBe(true);
        expect(checkChessboardPosition('A2')).toBe(true);
        expect(checkChessboardPosition('A3')).toBe(true);
        expect(checkChessboardPosition('A4')).toBe(true);
        expect(checkChessboardPosition('A5')).toBe(true);
        expect(checkChessboardPosition('A6')).toBe(true);
        expect(checkChessboardPosition('A7')).toBe(true);
        expect(checkChessboardPosition('A8')).toBe(true);
        expect(checkChessboardPosition('A9')).toBe(false);
        expect(checkChessboardPosition('A10')).toBe(false);
        expect(checkChessboardPosition('B0')).toBe(false);
        expect(checkChessboardPosition('B1')).toBe(true);
        expect(checkChessboardPosition('B2')).toBe(true);
        expect(checkChessboardPosition('B3')).toBe(true);
        expect(checkChessboardPosition('B4')).toBe(true);
        expect(checkChessboardPosition('B5')).toBe(true);
        expect(checkChessboardPosition('B6')).toBe(true);
        expect(checkChessboardPosition('B7')).toBe(true);
        expect(checkChessboardPosition('B8')).toBe(true);
        expect(checkChessboardPosition('B9')).toBe(false);
        expect(checkChessboardPosition('B10')).toBe(false);
        expect(checkChessboardPosition('C0')).toBe(false);
        expect(checkChessboardPosition('C1')).toBe(true);
        expect(checkChessboardPosition('C2')).toBe(true);
        expect(checkChessboardPosition('C3')).toBe(true);
        expect(checkChessboardPosition('C4')).toBe(true);
        expect(checkChessboardPosition('C5')).toBe(true);
        expect(checkChessboardPosition('C6')).toBe(true);
        expect(checkChessboardPosition('C7')).toBe(true);
        expect(checkChessboardPosition('C8')).toBe(true);
        expect(checkChessboardPosition('C9')).toBe(false);
        expect(checkChessboardPosition('C10')).toBe(false);
        expect(checkChessboardPosition('D0')).toBe(false);
        expect(checkChessboardPosition('D1')).toBe(true);
        expect(checkChessboardPosition('D2')).toBe(true);
        expect(checkChessboardPosition('D3')).toBe(true);
        expect(checkChessboardPosition('D4')).toBe(true);
        expect(checkChessboardPosition('D5')).toBe(true);
        expect(checkChessboardPosition('D6')).toBe(true);
        expect(checkChessboardPosition('D7')).toBe(true);
        expect(checkChessboardPosition('D8')).toBe(true);
        expect(checkChessboardPosition('D9')).toBe(false);
        expect(checkChessboardPosition('D10')).toBe(false);
        expect(checkChessboardPosition('E0')).toBe(false);
        expect(checkChessboardPosition('E1')).toBe(true);
        expect(checkChessboardPosition('E2')).toBe(true);
        expect(checkChessboardPosition('E3')).toBe(true);
        expect(checkChessboardPosition('E4')).toBe(true);
        expect(checkChessboardPosition('E5')).toBe(true);
        expect(checkChessboardPosition('E6')).toBe(true);
        expect(checkChessboardPosition('E7')).toBe(true);
        expect(checkChessboardPosition('E8')).toBe(true);
        expect(checkChessboardPosition('E9')).toBe(false);
        expect(checkChessboardPosition('E10')).toBe(false);
        expect(checkChessboardPosition('F0')).toBe(false);
        expect(checkChessboardPosition('F1')).toBe(true);
        expect(checkChessboardPosition('F2')).toBe(true);
        expect(checkChessboardPosition('F3')).toBe(true);
        expect(checkChessboardPosition('F4')).toBe(true);
        expect(checkChessboardPosition('F5')).toBe(true);
        expect(checkChessboardPosition('F6')).toBe(true);
        expect(checkChessboardPosition('F7')).toBe(true);
        expect(checkChessboardPosition('F8')).toBe(true);
        expect(checkChessboardPosition('F9')).toBe(false);
        expect(checkChessboardPosition('F10')).toBe(false);
        expect(checkChessboardPosition('G0')).toBe(false);
        expect(checkChessboardPosition('G1')).toBe(true);
        expect(checkChessboardPosition('G2')).toBe(true);
        expect(checkChessboardPosition('G3')).toBe(true);
        expect(checkChessboardPosition('G4')).toBe(true);
        expect(checkChessboardPosition('G5')).toBe(true);
        expect(checkChessboardPosition('G6')).toBe(true);
        expect(checkChessboardPosition('G7')).toBe(true);
        expect(checkChessboardPosition('G8')).toBe(true);
        expect(checkChessboardPosition('G9')).toBe(false);
        expect(checkChessboardPosition('G10')).toBe(false);
        expect(checkChessboardPosition('H0')).toBe(false);
        expect(checkChessboardPosition('H1')).toBe(true);
        expect(checkChessboardPosition('H2')).toBe(true);
        expect(checkChessboardPosition('H3')).toBe(true);
        expect(checkChessboardPosition('H4')).toBe(true);
        expect(checkChessboardPosition('H5')).toBe(true);
        expect(checkChessboardPosition('H6')).toBe(true);
        expect(checkChessboardPosition('H7')).toBe(true);
        expect(checkChessboardPosition('H8')).toBe(true);
        expect(checkChessboardPosition('H9')).toBe(false);
        expect(checkChessboardPosition('H10')).toBe(false);
        expect(checkChessboardPosition('a')).toBe(false);
        expect(checkChessboardPosition('a1b')).toBe(false);
        expect(checkChessboardPosition('a0')).toBe(false);
        expect(checkChessboardPosition('a1')).toBe(true);
        expect(checkChessboardPosition('a2')).toBe(true);
        expect(checkChessboardPosition('a3')).toBe(true);
        expect(checkChessboardPosition('a4')).toBe(true);
        expect(checkChessboardPosition('a5')).toBe(true);
        expect(checkChessboardPosition('a6')).toBe(true);
        expect(checkChessboardPosition('a7')).toBe(true);
        expect(checkChessboardPosition('a8')).toBe(true);
        expect(checkChessboardPosition('a9')).toBe(false);
        expect(checkChessboardPosition('a10')).toBe(false);
        expect(checkChessboardPosition('b0')).toBe(false);
        expect(checkChessboardPosition('b1')).toBe(true);
        expect(checkChessboardPosition('b2')).toBe(true);
        expect(checkChessboardPosition('b3')).toBe(true);
        expect(checkChessboardPosition('b4')).toBe(true);
        expect(checkChessboardPosition('b5')).toBe(true);
        expect(checkChessboardPosition('b6')).toBe(true);
        expect(checkChessboardPosition('b7')).toBe(true);
        expect(checkChessboardPosition('b8')).toBe(true);
        expect(checkChessboardPosition('b9')).toBe(false);
        expect(checkChessboardPosition('b10')).toBe(false);
        expect(checkChessboardPosition('c0')).toBe(false);
        expect(checkChessboardPosition('c1')).toBe(true);
        expect(checkChessboardPosition('c2')).toBe(true);
        expect(checkChessboardPosition('c3')).toBe(true);
        expect(checkChessboardPosition('c4')).toBe(true);
        expect(checkChessboardPosition('c5')).toBe(true);
        expect(checkChessboardPosition('c6')).toBe(true);
        expect(checkChessboardPosition('c7')).toBe(true);
        expect(checkChessboardPosition('c8')).toBe(true);
        expect(checkChessboardPosition('c9')).toBe(false);
        expect(checkChessboardPosition('c10')).toBe(false);
        expect(checkChessboardPosition('d0')).toBe(false);
        expect(checkChessboardPosition('d1')).toBe(true);
        expect(checkChessboardPosition('d2')).toBe(true);
        expect(checkChessboardPosition('d3')).toBe(true);
        expect(checkChessboardPosition('d4')).toBe(true);
        expect(checkChessboardPosition('d5')).toBe(true);
        expect(checkChessboardPosition('d6')).toBe(true);
        expect(checkChessboardPosition('d7')).toBe(true);
        expect(checkChessboardPosition('d8')).toBe(true);
        expect(checkChessboardPosition('d9')).toBe(false);
        expect(checkChessboardPosition('d10')).toBe(false);
        expect(checkChessboardPosition('e0')).toBe(false);
        expect(checkChessboardPosition('e1')).toBe(true);
        expect(checkChessboardPosition('e2')).toBe(true);
        expect(checkChessboardPosition('e3')).toBe(true);
        expect(checkChessboardPosition('e4')).toBe(true);
        expect(checkChessboardPosition('e5')).toBe(true);
        expect(checkChessboardPosition('e6')).toBe(true);
        expect(checkChessboardPosition('e7')).toBe(true);
        expect(checkChessboardPosition('e8')).toBe(true);
        expect(checkChessboardPosition('e9')).toBe(false);
        expect(checkChessboardPosition('e10')).toBe(false);
        expect(checkChessboardPosition('f0')).toBe(false);
        expect(checkChessboardPosition('f1')).toBe(true);
        expect(checkChessboardPosition('f2')).toBe(true);
        expect(checkChessboardPosition('f3')).toBe(true);
        expect(checkChessboardPosition('f4')).toBe(true);
        expect(checkChessboardPosition('f5')).toBe(true);
        expect(checkChessboardPosition('f6')).toBe(true);
        expect(checkChessboardPosition('f7')).toBe(true);
        expect(checkChessboardPosition('f8')).toBe(true);
        expect(checkChessboardPosition('f9')).toBe(false);
        expect(checkChessboardPosition('f10')).toBe(false);
        expect(checkChessboardPosition('g0')).toBe(false);
        expect(checkChessboardPosition('g1')).toBe(true);
        expect(checkChessboardPosition('g2')).toBe(true);
        expect(checkChessboardPosition('g3')).toBe(true);
        expect(checkChessboardPosition('g4')).toBe(true);
        expect(checkChessboardPosition('g5')).toBe(true);
        expect(checkChessboardPosition('g6')).toBe(true);
        expect(checkChessboardPosition('g7')).toBe(true);
        expect(checkChessboardPosition('g8')).toBe(true);
        expect(checkChessboardPosition('g9')).toBe(false);
        expect(checkChessboardPosition('g10')).toBe(false);
        expect(checkChessboardPosition('h0')).toBe(false);
        expect(checkChessboardPosition('h1')).toBe(true);
        expect(checkChessboardPosition('h2')).toBe(true);
        expect(checkChessboardPosition('h3')).toBe(true);
        expect(checkChessboardPosition('h4')).toBe(true);
        expect(checkChessboardPosition('h5')).toBe(true);
        expect(checkChessboardPosition('h6')).toBe(true);
        expect(checkChessboardPosition('h7')).toBe(true);
        expect(checkChessboardPosition('h8')).toBe(true);
        expect(checkChessboardPosition('h9')).toBe(false);
        expect(checkChessboardPosition('h10')).toBe(false);
    });
});