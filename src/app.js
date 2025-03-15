window.onload = function() {
// Ejercicio 1 //
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const dominion = [`.com`, `.net`, `.us`, `.io`];

  pronoun.forEach (parm1 => {
    adj.forEach (parm2 => {
    noun.forEach (parm3 => {
      dominion.forEach (parm4 => {
      console.log(`${parm1} ${parm2} ${parm3} ${parm4}`)
    })})})}) 
  };