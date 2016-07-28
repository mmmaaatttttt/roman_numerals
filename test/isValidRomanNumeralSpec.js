const expect = require('chai').expect;
const isValidRomanNumeral = require('../isValidRomanNumeral').isValidRomanNumeral;

describe('isValidRomanNumeral', function() {

  it("returns false for values that are not strings", function() {
    expect(isValidRomanNumeral(0)).to.be.false;
    expect(isValidRomanNumeral(true)).to.be.false;
    expect(isValidRomanNumeral([])).to.be.false;
    expect(isValidRomanNumeral(null)).to.be.false;
    expect(isValidRomanNumeral(undefined)).to.be.false;
    expect(isValidRomanNumeral({})).to.be.false;
  });

  it("returns false for strings with invalid roman numeral characters", function() {
    expect(isValidRomanNumeral('a')).to.be.false;
    expect(isValidRomanNumeral('')).to.be.false;
    expect(isValidRomanNumeral('foobar')).to.be.false;
    expect(isValidRomanNumeral('ccchi')).to.be.false;
    expect(isValidRomanNumeral('iiy')).to.be.false;
    expect(isValidRomanNumeral('-i')).to.be.false;
    expect(isValidRomanNumeral(' i ')).to.be.false;
  });

  it("returns false for strings which are invalid roman numerals", function() {
    expect(isValidRomanNumeral('iiii')).to.be.false;
    expect(isValidRomanNumeral('ivx')).to.be.false;
    expect(isValidRomanNumeral('mdcdix')).to.be.false;
    expect(isValidRomanNumeral('ivxlcdm')).to.be.false;
    expect(isValidRomanNumeral('xd')).to.be.false;
  });

  it("returns true for strings which are valid roman numerals", function() {
    expect(isValidRomanNumeral('i')).to.be.true;
    expect(isValidRomanNumeral('ii')).to.be.true;
    expect(isValidRomanNumeral('iii')).to.be.true;
    expect(isValidRomanNumeral('iv')).to.be.true;
    expect(isValidRomanNumeral('v')).to.be.true;
    expect(isValidRomanNumeral('ix')).to.be.true;
    expect(isValidRomanNumeral('x')).to.be.true;
    expect(isValidRomanNumeral('xl')).to.be.true;
    expect(isValidRomanNumeral('l')).to.be.true;
    expect(isValidRomanNumeral('xc')).to.be.true;
    expect(isValidRomanNumeral('c')).to.be.true;
    expect(isValidRomanNumeral('cxlviii')).to.be.true;
    expect(isValidRomanNumeral('cd')).to.be.true;
    expect(isValidRomanNumeral('d')).to.be.true;
    expect(isValidRomanNumeral('cm')).to.be.true;
    expect(isValidRomanNumeral('m')).to.be.true;
    expect(isValidRomanNumeral('mdcccxxxii')).to.be.true;
    expect(isValidRomanNumeral('mmdccxxiii')).to.be.true;
    expect(isValidRomanNumeral('mmmdccclxxxviii')).to.be.true;
    expect(isValidRomanNumeral('mmmcmxcix')).to.be.true;
  });

  it("is case insensitive", function() {
    expect(isValidRomanNumeral('I')).to.be.true;
    expect(isValidRomanNumeral('II')).to.be.true;
    expect(isValidRomanNumeral('III')).to.be.true;
    expect(isValidRomanNumeral('IV')).to.be.true;
    expect(isValidRomanNumeral('V')).to.be.true;
    expect(isValidRomanNumeral('IX')).to.be.true;
    expect(isValidRomanNumeral('X')).to.be.true;
    expect(isValidRomanNumeral('MMMCLXXXV')).to.be.true;
    expect(isValidRomanNumeral('MMMCMXL')).to.be.true;
    expect(isValidRomanNumeral('CCXCIV')).to.be.true;
    expect(isValidRomanNumeral('CCCXII')).to.be.true;
  });

});