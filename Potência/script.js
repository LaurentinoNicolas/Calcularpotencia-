var arrayX =[],arrayY = [],arrayXiLogX= [],arrayYiLogY= [], arrayXelevado= [], arrayXY = [];
var somaXiLogX, somaYiLogY, somaXelevado, somaXY = 0; 

//Função para fazer a entrada de dados com o botão enter
window.onload = function(){
    document.getElementById("number-x").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
         event.preventDefault();
         document.getElementById("btn-x").click();
        }
    });

    document.getElementById("number-y").addEventListener("keyup", function(event) {
        if (event.keyCode === 13){ //13 é o número correspondente ao enter
         event.preventDefault();
         document.getElementById("btn-y").click();
        }
    });
}


function adicionarX(){  //Função responsavel pela entrada e fitro do input x 
    valorX  = document.getElementById('number-x').value
    if(valorX != ""){
        arrayX.push(valorX);
        console.log(arrayX);
        document.getElementById('number-x').value  = "";
        listarX();//função que faz a listagem na tabela
        document.getElementById('number-x').focus();
    }
    else{
        alert("Por favor Professora linda, coloque um valor válido!!!") // Mensagem para a melhor professora da UMC vulgo Cibele
    }
}   

function adicionarY(){ //Mesma coisa que o adicionarX() só que com o input Y;
    valorY  = document.getElementById('number-y').value 
    if(valorY != ""){
        arrayY.push(valorY);
        console.log(arrayY)
        document.getElementById('number-y').value  = ""
        listarY();
        document.getElementById('number-y').focus();
    }
    else{
        alert("Por favor Professora linda, coloque um valor válido!!!");
    }
}



/**
 * Inicio de todas as funçoes de calculo
 */



//calcula o log do X
function xilog(){ 
    for ( var i =0; i < arrayX.length; i++ ){
        arrayXiLogX.push(Math.log10(arrayX[i]));
    }
    //calcula a soma de todos os Logs 
    somaXiLogX = arrayXiLogX.reduce((total, num) => total + num)
}

//calcula o log do Y
function yilog(){
    for ( var i =0; i < arrayY.length; i++ ){
        arrayYiLogY.push(Math.log10(arrayY[i]));
    }
    somaYiLogY = arrayYiLogY.reduce((total, num) => total + num)
    /*console.log(arrayYiLogY)*/
    console.log(somaYiLogY)
}

//Calcula o Xlog elevado a 2
function XiElevado2(){
    for ( var i =0; i < arrayX.length; i++ ){
        arrayXelevado.push(Math.pow(arrayXiLogX[i], 2))
    }
    somaXelevado = arrayXelevado.reduce((total, num) => total + num)
    console.log(somaXelevado)
    console.log(somaXelevado);
}

//Calcula Xlog multiplicado por Ylog
function XimultYi(){
    for(var i = 0; i < arrayX. length; i++){
        arrayXY.push(arrayXiLogX[i]*arrayYiLogY[i]);
    }
    somaXY = arrayXY.reduce((total, num) => total + num);
    console.log(arrayXY);
    console.log(somaXY);
}

/**
 * Fim de todas as funçoes de calculo
 */


/*-------------------------------------------------*/

/**
 * Lista e deletar Tabela 
 */

//Faz a listagem dos valores X
function listarX(){
    let tbody = document.getElementById('tbodyX')
    tbody.innerText = "";
    for(var i =0; i< arrayX.length; i++){
        
        let tr = tbody.insertRow();
        let td_x = tr.insertCell();
        console.log(td_x)
        td_x.innerText = arrayX[i];
        td_x.setAttribute("onclick","deletarX("+arrayX[i]+")");
    }
}

//deleta o valor clicado na tabela X
function deletarX(x){
    let tbody = document.getElementById('tbodyX')

    for(let i = 0; i< arrayX.length; i++){
        if(arrayX[i] == x){
            arrayX.splice(i, 1);
            tbody.deleteRow(i);
        }
    }

}

//mesma função que o X só que com o Y
function listarY(){
    let tbody = document.getElementById('tbodyY')
    tbody.innerText = "";
    for(var i =0; i< arrayY.length; i++){
        
        let tr = tbody.insertRow();
        let td_y = tr.insertCell();
        td_y.innerText = arrayY[i];
        td_y.setAttribute("onclick","deletarY("+arrayY[i]+")");
    }
}

function deletarY(y){
    let tbody = document.getElementById('tbodyY')

    for(let i = 0; i< arrayY.length; i++){
        if(arrayY[i] == y){
            arrayY.splice(i, 1);
            tbody.deleteRow(i);
        }
    }

}


/**
 * calculo final 
 */

var n, d, da, db, a, b, beta, alfa, x, y = 0;

//Calculo FINAL
function result(){
    xilog()
    yilog()
    XiElevado2()
    XimultYi() 
    n = arrayX.length;
    d = somaXelevado*n-somaXiLogX*somaXiLogX;
    da = somaXY*n-somaXiLogX*somaYiLogY;
    db = somaXelevado*somaYiLogY-somaXiLogX*somaXY;
    a = da/d;
    b = db/d;
    beta = a;
    alfa = Math.pow(10, b);
    mostrarResult();
}



function mostrarResult(){
    var valorBeta = document.getElementById('beta')
    var valorAlpha = document.getElementById('alpha');
    valorBeta.innerText = beta.toFixed(6);
    valorAlpha.innerText = alfa.toFixed(6);
}

function limpar(){
    var valorBeta = document.getElementById('beta')
    var valorAlpha = document.getElementById('alpha')   
    let tbody = document.getElementById('tbodyX')
    let tbodyY = document.getElementById('tbodyY')
    tbody.innerText = "";
    tbodyY.innerText = "";
    valorAlpha.innerText = "0.000000";
    valorBeta.innerText = "0.000000";
    n, d, da, db, a, b, beta, alfa, x, y = 0;
    arrayX =[],arrayY = [],arrayXiLogX= [],arrayYiLogY= [], arrayXelevado= [], arrayXY = [];
    somaXiLogX, somaYiLogY, somaXelevado, somaXY = 0;
    console.log(arrayX); 

}