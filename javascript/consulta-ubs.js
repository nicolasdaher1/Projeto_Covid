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

            if(o == 3 && i != 0){
                t.classList.add('cidade');
            } else if(o == 2 && i != 0){
                t.classList.add('bairro');
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
    ["Nome UBS", "Rua", "Bairro", "Cidade"],
    ["Ubs Sao Vitor Cohab","Rua Dirceu Corsetti","Sao Vitor Cohab","Caxias Do Sul"],
    ["Ubs Ana Rech","Rua Antonio Tome","Ana Rech","Caxias Do Sul"],
    ["Ubs Planalto","Rua Arthur Rodolfo Rossarolla","Planalto","Caxias Do Sul"],
    ["Cs Balneario","Avenida Santa Catarina","Balneario","Florianópolis"],
    ["Cs Canasvieiras","Rod Francisco Fausto Martins","Canasvieiras","Florianópolis"],
    ["Ubs Maria Girade Cury","Rua Theofilo Munhoz Vaqueiro","Jd Novo Osasco","Osasco"],
    ["Ubs Chacaras Reunidas","Praca Cariri","Chacaras Reunidas","São José Dos Campos"],
    ["Ama 24 Horas Jardim Helena","Rua Silveira Pires","Parque Paulistano","São Paulo"],
    ["Ubs 1 Cruzeiro","Shces Quadra","Cruzeiro Novo","Brasília"],
    ["Ubsf Acude Ii George Furtado Vieira Pandeirinho","Rua Quatro","Acude Ii","Volta Redonda"],
    ["Longevicare","Rua Visconde De Piraja","Ipanema","Rio De Janeiro"],
    ["Unidade Basica De Saude Parque Ermitage","Estrada Rio Bahia Br 116","Ermitage","Teresópolis"],
    ["Ubs Castelo Branco","Rua A 3 Etapa","Castelo Branco","Salvador"],
    ["Usf Henrique Ferraz Graziani","Rua Dr Riva Davila","Zona Rural","Vitória Da Conquista"],
    ["Centro De Saude Milionarios","Rua Dos Cruzeirenses","Milionarios","Belo Horizonte"]
]));

function buscaUbs() {
    let inputCidade = document.getElementById('inputCidade').value;
    let inputBairro = document.getElementById('inputBairro').value;
    inputCidade = inputCidade.toLowerCase();
    inputBairro = inputBairro.toLowerCase();
    let x = document.getElementsByClassName('cidade');
    let y = document.getElementsByClassName('bairro');
      
    function buscaCidade(){
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(inputCidade)) {
                x[i].parentNode.style.display = "none";
            }
            else {
                x[i].parentNode.style.display = "";              
            }
        }
    }

    function buscaBairro(x){
        for (i = 0; i < y.length; i++) { 
            if (!y[i].innerHTML.toLowerCase().includes(inputBairro)) {
                y[i].parentNode.style.display = "none";
            }
            else {
                if(x != 1){
                    y[i].parentNode.style.display = "";                 
                }
            }
        }
    }

    if(inputCidade != '' && inputBairro != ''){
        buscaCidade();
        buscaBairro(1);
    } else if(inputCidade != '' && inputBairro == ''){
        buscaCidade();
    } else if(inputCidade == '' && inputBairro != ''){
        buscaBairro();
    } else if(inputCidade == '' && inputBairro == ''){
        buscaCidade();
        buscaBairro();
    }
}

function limparFiltros() {
    let inputCidade = document.getElementById('inputCidade').value;
    let inputBairro = document.getElementById('inputBairro').value;
    let x = document.getElementsByClassName('cidade');
    let y = document.getElementsByClassName('bairro');
      
    function buscaCidade(){
        for (i = 0; i < x.length; i++) { 
            x[i].parentNode.style.display = "";                           
        }
        document.getElementById('inputCidade').value = ""; 
    }

    function buscaBairro(){
        for (i = 0; i < y.length; i++) { 
            y[i].parentNode.style.display = "";             
        }
        document.getElementById('inputBairro').value = ""; 
    }
    
    buscaCidade();
    buscaBairro();
}

function voltarPagInicial(){
    window.location.href = "index.html";
}