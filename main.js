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
                            <a href='http://verbras.com.br/produtos/vertex-acrilico-fosco/' class="btn btn-info">Veja mais</a>
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
                            <a href='http://verbras.com.br/produtos/pop-acrilico-fosco/' class="btn btn-info">Veja mais</a>
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
                            <a href='http://verbras.com.br/produtos/vertex-semibrilho/' class="btn btn-info">Veja mais</a>
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
                            <a href='http://verbras.com.br/produtos/vercryl-premium//' class="btn btn-info">Veja mais</a>
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
                            <a href='http://verbras.com.br/produtos/toque-suave/' class="btn btn-info">Veja mais</a>
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
                            <a href='http://verbras.com.br/produtos/verlatex-premium/' class="btn btn-info">Veja mais</a>
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
                            <a href='http://verbras.com.br/produtos/cimentados-e-pisos/' class="btn btn-info">Veja mais</a>
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
                            <a href='http://verbras.com.br/produtos/tinta-para-gesso/' class="btn btn-info">Veja mais</a>
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
                            <a href='http://verbras.com.br/produtos/esmalte-secagem-rapida/' class="btn btn-info">Veja mais</a>
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

function getComplementos(){
    var linha = document.getElementById("cardRow");
    linha.innerHTML = ""
    var coluna = []
    if (listaComplementos == 1){
        listaComplementos = 0;
    }
    if (listaComplementos == 0) {
        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/massa-corrida/'">
                    <img class="card-img-top" src="imagens/complementos/1_massa_corrida.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Massa Corrida</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/massa-corrida/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/massa-acrilica/'">
                    <img class="card-img-top" src="imagens/complementos/2_massa_acrilica.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Massa Acrílica</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/massa-acrilica/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/selador-acrilico/'">
                    <img class="card-img-top" src="imagens/complementos/3_selador_acrilico.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Selador Acrílico</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/selador-acrilico/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/impermeabilizante-telha/'">
                    <img class="card-img-top" src="imagens/complementos/4_telha_ceramica.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Telha & Cerâmica</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/impermeabilizante-telha/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/verbrilho/'">
                    <img class="card-img-top" src="imagens/complementos/5_verbrilho.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Verbrilho</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/verbrilho/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);


        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/selafacil/'">
                    <img class="card-img-top" src="imagens/complementos/6_selafacil.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Selafácil</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/selafacil/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/fundo-para-galvanizado/'">
                    <img class="card-img-top" src="imagens/complementos/7_fundo_galvanizado.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Fundo para Galvanizado</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/fundo-para-galvanizado/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/fundo-branco-universal/'">
                    <img class="card-img-top" src="imagens/complementos/8_fundo_branco_universal.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Fundo Branco Universal</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/fundo-branco-universal/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/massa-para-madeira/'">
                    <img class="card-img-top" src="imagens/complementos/9_outros.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Massa para Madeira</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/massa-para-madeira/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/fundo-preparador-de-paredes/'">
                    <img class="card-img-top" src="imagens/complementos/9_outros.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Fundo Preparador de Paredes</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/fundo-preparador-de-paredes/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/fundo-branco-fosco/'">
                    <img class="card-img-top" src="imagens/complementos/9_outros.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Fundo Branco Fosco</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/fundo-branco-fosco/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/ferrobras/'">
                    <img class="card-img-top" src="imagens/complementos/9_outros.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Ferrobras</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/ferrobras/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

        coluna.push(`<div class="column">
                <div class="card" id="cardTinta" onclick="location.href = 'http://verbras.com.br/produtos/zarcao/'">
                    <img class="card-img-top" src="imagens/complementos/9_outros.png">
                        <div class="card-body" id="cardBodyTinta" >
                        <br>
                            <h6 class="card-title" id="cardTitle"><strong>Zarcão</strong></h6>
                            <br>
                            <a href='http://verbras.com.br/produtos/zarcao/' class="btn">Veja mais</a>
                        </div>
                </div>
                <br>
                </div>`);

    }

    for(i = 0; i < coluna.length; i++){
        linha.innerHTML += coluna[i];
    }

    listaComplementos += 1;
    listaParede = [];
    listaMetalMadeira = [];
    listaComplementos = [];
    listaTexturas = [];
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

function limpar(){
    var linha = document.getElementById("cardRow");
    linha.innerHTML = `<div class="texto-inicial">
            <h5>Os produtos serão mostrados aqui.</h5>
            </div>`
}

// function link(link){
//     window.open(link);
// }