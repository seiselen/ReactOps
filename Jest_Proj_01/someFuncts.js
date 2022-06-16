
const DemoFuncts = {
  /* Simple One-Liners */
  add: (v1, v2) => (v1 + v2),
  sub: (v1, v2) => (v1 - v2),


  concatSpaceBtwn: (arr) => {
    let ret = "";
    for(let i=0; i<arr.length; i++){
      ret += arr[i]; 
      if (i<arr.length-1){ret += " ";}
    }
    return ret;
  }, /* Ends Function concatSpaceBtwn */


  canServeAlcohol: (countryCode, age) => {
    switch(countryCode){
      case 'LUN' : case 'MRS': return true;
      case 'USA' : case 'EGY': return age >= 21;
      case 'CAN' : case 'KOR': return age >= 19;
      case 'GBR' : case 'MEX': return age >= 18;
      case 'CUB' : case 'DEU': return age >= 16;
      case 'IRN' : case 'SAU': return false;
      default: console.log("unhandled input [countryCode:["+countryCode+"] age:["+age+"]"); return false;
    }
  }, /* Ends Function canServeAlcohol */



} // Ends Object Definition 'DemoFuncts'

module.exports = DemoFuncts;