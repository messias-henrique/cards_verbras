let listaParede = 0;
let listaMetalMadeira = 0;
let listaComplementos = 0;
let listaTexturas = 0;
let listaVernizes = 0;

function constroiCards(dados){
    var linha = document.getElementById("cardRow");
    var colunas = [];
    for(var i=0; i<dados.length; i++) {
        var coluna = `<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = '${dados[i].link}'">
                    <img class="card-img-top" src=${dados[i].img}>
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>${dados[i].titulo}</strong></h6>
                            <br>
                            <a href=${dados[i].link} class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`
        colunas += coluna;
    }
    linha.innerHTML = colunas;
}

function getTintasParede(){
    var linha = document.getElementById("cardRow");
    var colunas = []
    var coluna = []
    linha.innerHTML = ""
    if (listaParede == 1){
        listaParede = 0;
    }
    if (listaParede == 0) {
        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/vertex-acrilico-fosco/'">
                    <img class="card-img-top" src="imagens/parede/1_verlatex.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Vertex Acrílico Fosco</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/vertex-acrilico-fosco/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/pop-acrilico-fosco/'">
                    <img class="card-img-top" src="imagens/parede/2_standard.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Standard Acrílico Fosco</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/pop-acrilico-fosco/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/vertex-semibrilho/'">
                    <img class="card-img-top" src="imagens/parede/3_semibrilho.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Vertex Semibrilho</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/vertex-semibrilho/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);


        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/vercryl-premium/'">
                    <img class="card-img-top" src="imagens/parede/4_vercryl.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Vercryl</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/vercryl-premium//' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/toque-suave/'">
                    <img class="card-img-top" src="imagens/parede/5_toque_suave.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Toque Suave</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/toque-suave/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/verlatex-premium/'">
                    <img class="card-img-top" src="imagens/parede/6_super_verlatex.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Super Verlatex Premium</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/verlatex-premium/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/cimentados-e-pisos/'">
                    <img class="card-img-top" src="imagens/parede/7_cimentados.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Cimentados e Pisos</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/cimentados-e-pisos/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);            

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/tinta-para-gesso/'">
                    <img class="card-img-top" src="imagens/parede/8_gesso.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Gesso e Drywall</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/tinta-para-gesso/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

    }   
    for(i = 0; i < coluna.length; i++){
        linha.innerHTML += coluna[i];
    }

    listaParede += 1
    listaMetalMadeira = [];
    listaComplementos = [];
    listaTexturas = [];
    listaVernizes = [];
}

function getTintasMetalMadeira(){
    var linha = document.getElementById("cardRow");
    linha.innerHTML = ""
    var coluna = []
    if (listaMetalMadeira == 1){
        listaMetalMadeira = 0;
    }
    if (listaMetalMadeira == 0) {
        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/esmalte-secagem-rapida/'">
                    <img class="card-img-top" src="imagens/metalmadeira/1_esmalte_sec_rap.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Esmalte Secagem Rápida</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/esmalte-secagem-rapida/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/vertex-esmalte-premium-extra-rapido/'">
                    <img class="card-img-top" src="imagens/metalmadeira/2_esmalte_ext_rap.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Esmalte Extra Rápido</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/vertex-esmalte-premium-extra-rapido/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/esmalte-base-agua-premium/'">
                    <img class="card-img-top" src="imagens/metalmadeira/3_esmalte_base_agua.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Esmalte Base Água</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/esmalte-base-agua-premium/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);
    }

    for(i = 0; i < coluna.length; i++){
        linha.innerHTML += coluna[i];
    }

    listaMetalMadeira += 1;
    listaParede = [];
    listaComplementos = [];
    listaTexturas = [];
    listaVernizes = [];
}

function getTexturas(){
    var linha = document.getElementById("cardRow");
    linha.innerHTML = ""
    var coluna = []
    if (listaTexturas == 1){
        listaTexturas = 0;
    }
    if (listaTexturas == 0) {
        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/textura-interna/'">
                    <img class="card-img-top" src="imagens/texturas/1_textura_interna.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Textura Interna</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/textura-interna/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/textura-externa/'">
                    <img class="card-img-top" src="imagens/texturas/2_textura_externa.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Textura Externa</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/textura-externa/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/textura-nobre/'">
                    <img class="card-img-top" src="imagens/texturas/3_textura_nobre.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Textura Nobre</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/textura-nobre/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);
        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/textura-com-quartzo/'">
                    <img class="card-img-top" src="imagens/texturas/4_textura_quartzo.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Textura com Quartzo</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/textura-com-quartzo/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);
    }

    for(i = 0; i < coluna.length; i++){
        linha.innerHTML += coluna[i];
    }

    listaTexturas += 1;
    listaParede = [];
    listaComplementos = [];
    listaMetalMadeira = [];
    listaVernizes = [];
}

function getVernizes(){
    var linha = document.getElementById("cardRow");
    linha.innerHTML = ""
    var coluna = []
    if (listaVernizes == 1){
        listaVernizes = 0;
    }
    if (listaVernizes == 0) {
        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/verniz-copal/'">
                    <img class="card-img-top" src="imagens/vernizes/1_verniz_copal.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Verniz Copal</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/verniz-copal/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/verniz-flash/'">
                    <img class="card-img-top" src="imagens/vernizes/2_verniz_flash.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Verniz Flash</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/verniz-flash/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/verniz-triplo-filtro-solar/'">
                    <img class="card-img-top" src="imagens/vernizes/3_verniz_triplo_filtro_solar.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Verniz Triplo Filtro Solar</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/verniz-triplo-filtro-solar/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);
        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/verniz-acrilico/'">
                    <img class="card-img-top" src="imagens/vernizes/4_verniz_acrilico.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Verniz Acrílico</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/verniz-acrilico/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);
    }

    for(i = 0; i < coluna.length; i++){
        linha.innerHTML += coluna[i];
    }

    listaVernizes += 1;
    listaParede = [];
    listaComplementos = [];
    listaMetalMadeira = [];
    listaTexturas = [];
}


// function getTintasParede(){
//     if (listaParede == 0) {
//         var request = new XMLHttpRequest();
//         request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/tintasParede');

//         request.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 var dados = JSON.parse(request.responseText);
//                 for(var i=0; i<dados.length; i++){
//                     console.log(dados[i]);
//                     listaParede += 1;
//                 }
//                 listaMetalMadeira = [];
//                 listaComplementos = [];
//                 listaTexturas = [];
//                 listaVernizes = [];
//                 constroiCards(dados);   
//             }
//         };
//         request.send();
//     }   
// }

// function getTintasMetalMadeira(){
//     if (listaMetalMadeira == 0) {
//         var request = new XMLHttpRequest();
//         request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/tintasMetalMadeira');
//         request.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 var dados = JSON.parse(request.responseText);
//                 for(var i=0; i<dados.length; i++){
//                     console.log(dados[i]);
//                     listaMetalMadeira += 1;
//                 } 
//                 listaParede = 0;
//                 listaComplementos = 0;
//                 listaTexturas = 0;  
//                 listaVernizes = 0;        
//                 constroiCards(dados);
//             }        
//         };
//         request.send();
//     }
// }

// function getComplementos(){
//     if (listaComplementos == 0) {
//         var request = new XMLHttpRequest();
//         request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/complementos');
//         request.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 var dados = JSON.parse(request.responseText);
//                 for(var i=0; i<dados.length; i++){
//                     console.log(dados[i]);
//                     listaComplementos += 1;
//                 } 
//                 listaParede = 0;
//                 listaMetalMadeira = 0;
//                 listaTexturas = 0;  
//                 listaVernizes = 0;        
//                 constroiCards(dados);
//             }        
//         };
//         request.send();
//     }
// }

// function getTexturas(){
//     if (listaTexturas == 0) {
//         var request = new XMLHttpRequest();
//         request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/texturas');
//         request.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 var dados = JSON.parse(request.responseText);
//                 for(var i=0; i<dados.length; i++){
//                     console.log(dados[i]);
//                     listaTexturas += 1;
//                 } 
//                 listaParede = 0;
//                 listaMetalMadeira = 0;
//                 listaComplementos = 0;  
//                 listaVernizes = 0;        
//                 constroiCards(dados);
//             }        
//         };
//         request.send();
//     }
// }

// function getVernizes(){
//     if (listaVernizes == 0) {
//         var request = new XMLHttpRequest();
//         request.open('GET','https://my-json-server.typicode.com/messias-henrique/sd-api/vernizes');
//         request.onreadystatechange = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 var dados = JSON.parse(request.responseText);
//                 for(var i=0; i<dados.length; i++){
//                     console.log(dados[i]);
//                     listaVernizes += 1;
//                 } 
//                 listaParede = 0;
//                 listaMetalMadeira = 0;
//                 listaComplementos = 0;        
//                 listaTexturas = 0;  
                
//                 constroiCards(dados);
//             }        
//         };
//         request.send();
//     }
// }

function link(link){
    window.open(link);
}