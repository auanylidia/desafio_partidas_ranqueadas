let numbervictory = 100;
let numberDefeats =5;


function getMatchBalance(victorys, defeats) {
  return victorys - defeats ;
}

let result = getMatchBalance(numbervictory, numberDefeats); 
if (result<=10){
    console.log("O Herói tem de saldo de " + result + " esta no nível de Ferro");
} else if ( result>= 11 && result<=20){
    console.log("O Herói tem de saldo de " + result + " esta no nível de Bronze");
} else if ( result>= 21 && result<=50){
    console.log("O Herói tem de saldo de " + result + " esta no nível de Prata");
} else if ( result>= 51 && result<=80){
    console.log("O Herói tem de saldo de " + result + " esta no nível de Ouro");
} else if ( result>= 81 && result<=90){
    console.log("O Herói tem de saldo de " + result + " esta no nível de Diamante");
} else if ( result>= 91 && result<=100){
    console.log("O Herói tem de saldo de " + result + " esta no nível de Lendario");
}  else if ( result>= 101 ){
    console.log("O Herói tem de saldo de " + result + " esta no nível de Imortal");
}
