let maca = 3.5;
let banana = 8.90;
let laranja = 4.95;
let mamao = 12;
let limao = 3.55;
let abacate = 6.99;
let kiwi = 6.5;
let jamelao = 6;
let pera = 4.26;
let caqui = 3.59;
let morango = 6;
let uva = 7.95;
let acerola = 5.90;
let ameixa = 8.95;
let goiaba = 5.45;
let jaca = 7.8;
let maracuja = 4.37;
let pitaya = 16.9;
let nectarina = 7.18;
let seriguela = 2.6;
let figo = 56;
let melancia = 19;

let contadorDeMaca = 0
let contadorDeBanana = 0
let contadorDeLimao = 0
let contadorDeAbacate = 0
let contadorDeKiwi = 0
let contadorDeJamelao = 0
let contadorDePera = 0
let contadorDeCaqui = 0
let contadorDeMorango = 0
let contadorDeUva = 0
let contadorDeAcerola = 0
let contadorDeAmeixa = 0
let contadorDeGoiaba = 0
let contadorDeJaca = 0
let contadorDeMaracuja = 0
let contadorDePitaya = 0
let contadorDeNectarina = 0
let contadorDeSeriguela = 0
let contadorDeFigo = 0
let contadorDeMelancia = 0
let carrinho = []

let nomeDoProduto = document.getElementById("nomeDoProduto");
 
let valorProduto = document.getElementById("valorProduto");

function valores(){
   switch(nomeDoProduto.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")){
        case 'maca':
            valorProduto.innerHTML= "O valor da maçã é R$" + banana.toFixed(2)
            break
        case 'banana':
            valorProduto.innerHTML= "O valor da banana é R$" + banana.toFixed(2)
            break
        case 'laranja':
            valorProduto.innerHTML= "O valor da laranja é R$" + banana.toFixed(2)
            break
        case 'mamao':
            valorProduto.innerHTML= "O valor da mamão é R$" + banana.toFixed(2)
            break
        case 'limao':
            valorProduto.innerHTML= "O valor da limão é R$" + banana.toFixed(2)
            break
        case 'abacate':
            valorProduto.innerHTML= "O valor da abacate é R$" + banana.toFixed(2)
            break
        case 'kiwi':
            valorProduto.innerHTML= "O valor da kiwi é R$" + kiwi.toFixed(2)
            break
        case 'jamelao':
            valorProduto.innerHTML= "O valor da jamelao é R$" + jamelao.toFixed(2)
            break
        case 'pera':
            valorProduto.innerHTML= "O valor da pera é R$" + pera.toFixed(2)
            break
        case 'caqui':
            valorProduto.innerHTML= "O valor da caqui é R$" + caqui.toFixed(2)
            break
        case 'morango':
            valorProduto.innerHTML= "O valor da morango é R$" + morango.toFixed(2)
            break
        case 'uva':
            valorProduto.innerHTML= "O valor da uva é R$" + uva.toFixed(2)
            break
        case 'acerola':
            valorProduto.innerHTML= "O valor da acerola é R$" + acerola.toFixed(2)
            break
        case 'ameixa':
            valorProduto.innerHTML= "O valor da ameixa é R$" + ameixa.toFixed(2)
            break
        case 'goiaba':
            valorProduto.innerHTML= "O valor da goiaba é R$" + goiaba.toFixed(2)
            break
        case 'jaca':
            valorProduto.innerHTML= "O valor da jaca é R$" + jaca.toFixed(2)
            break
        case 'maracuja':
            valorProduto.innerHTML= "O valor da maracuja é R$" + maracuja.toFixed(2)
            break
        case 'pitaya':
            valorProduto.innerHTML= "O valor da pitaya é R$" + pitaya.toFixed(2)
            break
        case 'nectarina':
            valorProduto.innerHTML= "O valor da nectarina é R$" + nectarina.toFixed(2)
            break
        case 'seriguela':
            valorProduto.innerHTML= "O valor da seriguela é R$" + seriguela.toFixed(2)
            break
        case 'figo':
            valorProduto.innerHTML= "O valor da figo é R$" + figo.toFixed(2)
            break
        case 'melancia':
            valorProduto.innerHTML= "O valor da melancia é R$" + melancia.toFixed(2)
            break
         default:
            valorProduto.innerHTML = "Fruta Indisponível"
   }
}

function addCarrinho(){
     if (nomeDoProduto.value == 'maca'.toLowerCase()) {

     contadorDeMaca ++;
     carrinho.push(nomeDoProduto.value)
     } 
     if (nomeDoProduto.value == 'banana'.toLowerCase()){

     contadorDeBanana ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'limao'.toLowerCase()){

     contadorDeLimao ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'abacate'.toLowerCase()){

     contadorDeAbacate ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'kiwi'.toLowerCase()){

     contadorDeKiwi ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'jamelao'.toLowerCase()){

     contadorDeJamelao ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'pera'.toLowerCase()){

     contadorDePera ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'caqui'.toLowerCase()){

     contadorDeCaqui ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'morango'.toLowerCase()){

     contadorDeMorango ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'uva'.toLowerCase()){

     contadorDeUva ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'acerola'.toLowerCase()){

     contadorDeAcerola ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'ameixa'.toLowerCase()){

     contadorDeAmeixa ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'goiaba'.toLowerCase()){

     contadorDeGoiaba ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'jaca'.toLowerCase()){

     contadorDeJaca ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'maracuja'.toLowerCase()){

     contadorDeMaracuja ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'pitaya'.toLowerCase()){

     contadorDePitaya ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'nectarina'.toLowerCase()){

     contadorDeNectarina ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'seriguela'.toLowerCase()){

     contadorDeSeriguela ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'figo'.toLowerCase()){

     contadorDeFigo ++;
     carrinho.push(nomeDoProduto.value) 
     }
     if (nomeDoProduto.value == 'melancia'.toLowerCase()){

     contadorDeMelancia ++;
     carrinho.push(nomeDoProduto.value) 
     }
     console.log(contadorDeAbacate,contadorDeAcerola,contadorDeAmeixa,contadorDeBanana,contadorDeCaqui,contadorDeFigo,contadorDeGoiaba,contadorDeJaca,contadorDeJamelao,contadorDeKiwi,contadorDeLimao,contadorDeMaca,contadorDeMaracuja,contadorDeMelancia,contadorDeMorango,contadorDeNectarina,contadorDePera,contadorDePitaya,contadorDeSeriguela,contadorDeUva) 

     console.log(carrinho)

}



