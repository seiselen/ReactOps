const functs = require('./someFuncts');

const testBlurb = (fName, fInVal, fOutVal, verb) => {return "function ["+fName+"] of input ["+fInVal+"] should "+verb+" output ["+fOutVal+"]";}

const testFunct = (fRef, fInVal, fOutVal, tType) => {
  switch(tType){
    case 'toBe'       : test_toBe(fRef, fInVal, fOutVal);
    case 'toMatch'    : test_toMatch(fRef, fInVal, fOutVal);
    case 'notToMatch' : test_notToMatch(fRef, fInVal, fOutVal);
    default : console.warn("test type ["+tType+"] not supported!");
  }
} 

const test_toBe       = (fRef, fInVal, fOutVal) => {test(testBlurb(fRef.name, fInVal, fOutVal, 'be'), () => {expect(fRef(fInVal)).toBe(fOutVal);});}

const test_truthy     = (fRef, fInArgs, fOutVal) => {
  test(testBlurb(fRef.name, fInArgs, fOutVal, 'be') , 
  () => {switch(fInArgs.length){
      case 1 : expect(fRef(fInArgs)).toBe(fOutVal); break;
      case 2 : expect(fRef(fInArgs[0], fInArgs[1])).toBe(fOutVal); break;
      default : console.warn("args length of ["+tType+"] not supported!"); break;
  }}
);}


const test_toMatch    = (fRef, fInVal, fOutVal) => {test(testBlurb(fRef.name, fInVal, fOutVal, 'match'), () => {expect(fRef(fInVal)).toMatch(fOutVal);});}
const test_notToMatch = (fRef, fInVal, fOutVal) => {test(testBlurb(fRef.name, fInVal, fOutVal, 'NOT match'), () => {expect(fRef(fInVal)).not.toMatch(fOutVal);});}

test('add(1,2)->[3]', () => {expect(functs.add(1, 2)).toBe(3);});
test('sub(5,1)->[4]', () => {expect(functs.sub(5, 1)).toBe(4);});

test_toMatch(functs.concatSpaceBtwn,    ['batman','bin','suparman'], "batman bin suparman");
test_notToMatch(functs.concatSpaceBtwn, ['batman','bin','suparman'], "robin bin spiderman");

test_truthy(functs.canServeAlcohol, ['USA', 24], true);