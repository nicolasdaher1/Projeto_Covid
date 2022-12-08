function criarTabela(conteudo) {
    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var thd = function(i){
        if(i == 0){
            return "th";
        } else{
            return "td";
        }
    };

    for (var i = 0; i < conteudo.length; i++) {
        var tr = document.createElement("tr");

        for(var o = 0; o < conteudo[i].length; o++){
            var t = document.createElement(thd(i));

            if(o == 0 && i != 0){
                t.classList.add('estado');
            } else if(o == 1 && i != 0){
                t.classList.add('cidade');
            }

            var texto = document.createTextNode(conteudo[i][o]);
            t.appendChild(texto);
            tr.appendChild(t);
        }
        
        (i == 0)?thead.appendChild(tr):tbody.appendChild(tr);
    }

    tabela.classList.add('table');
    tabela.classList.add('table-striped');
    tabela.classList.add('bg-light');
    tabela.classList.add('m-auto');
    tbody.classList.add('list');

    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    return tabela;
}
document.getElementById("tabela").appendChild(criarTabela([
    ["Estado", "Município", "Casos Confirmados", "Óbitos"],
    ["RS","Caxias do Sul","155150","1666"],
    ["SC","Florianópolis","141684","1307"],
    ["SP","Osasco","48718","3102"],
    ["SP","São José dos Campos","126266","2302"],
    ["DF","Brasília","842855","11832"],
    ["SP","São Paulo","1125366","43982"],
    ["RJ","Volta Redonda","68611","1437"],
    ["RJ","Rio de Janeiro","1169751","37626"],
    ["BA","Salvador","320041","8881"],
    ["BA","Vitória da Conquista","50001","727"],
    ["MG","Belo Horizonte","449350","8207"]
]));

function buscaDadosCovid() {
    let inputEstado = document.getElementById('inputEstado').value;
    let inputCidade = document.getElementById('inputCidade').value;
    inputEstado = inputEstado.toLowerCase();
    inputCidade = inputCidade.toLowerCase();
    let x = document.getElementsByClassName('estado');
    let y = document.getElementsByClassName('cidade');
      
    function buscaEstado(){
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(inputEstado)) {
                x[i].parentNode.style.display = "none";
            }
            else {
                x[i].parentNode.style.display = "";                 
            }
        }
    }

    function buscaCidade(x){
        for (i = 0; i < y.length; i++) { 
            if (!y[i].innerHTML.toLowerCase().includes(inputCidade)) {
                y[i].parentNode.style.display = "none";
            }
            else {
                if(x != 1){
                    y[i].parentNode.style.display = "";                 
                }               
            }
        }
    }

    if(inputEstado != '' && inputCidade != ''){
        buscaEstado();
        buscaCidade(1);
    } else if(inputEstado != '' && inputCidade == ''){
        buscaEstado();
    } else if(inputEstado == '' && inputCidade != ''){
        buscaCidade();
    } else if(inputEstado == '' && inputCidade == ''){
        buscaEstado();
        buscaCidade();
    }
}

function limparFiltros() {
    let inputEstado = document.getElementById('inputEstado').value;
    let inputCidade = document.getElementById('inputCidade').value;
    let x = document.getElementsByClassName('estado');
    let y = document.getElementsByClassName('cidade');
      
    function buscaEstado(){
        for (i = 0; i < x.length; i++) { 
            x[i].parentNode.style.display = "";                           
        }
        document.getElementById('inputEstado').value = ""; 
    }

    function buscaCidade(){
        for (i = 0; i < y.length; i++) { 
            y[i].parentNode.style.display = "";             
        }
        document.getElementById('inputCidade').value = ""; 
    }
    
    buscaEstado();
    buscaCidade();
}

function voltarPagInicial(){
    window.location.href = "index.html";
}