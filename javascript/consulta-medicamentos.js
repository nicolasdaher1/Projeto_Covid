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
                t.classList.add('principio-ativo');
            } else if(o == 2 && i != 0){
                t.classList.add('medicamento');
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
    ["Princípio Ativo","Fabricante","Nome Do Medicamento","Valor"],
    ["Valproato De Sódio","Biolab Sanus Farmacêutica Ltda","Ácido Valpróico","36.08"],
    ["Montelucaste","Organon Farmacêutica Ltda.","Singulair","155.94"],
    ["Sinvastatina","Organon Farmacêutica Ltda.","Zocor","36.14"],
    ["Finasterida","Organon Farmacêutica Ltda.","Propecia","118.83"],
    ["Vírus Da Hepatite A Purificado Inativado","Organon Farmacêutica Ltda.","Vaqta","65.18"],
    ["Maleato De Enalapril","Organon Farmacêutica Ltda.","Renitec","42.48"],
    ["Etoricoxibe","Organon Farmacêutica Ltda.","Arcoxia","40.05"],
    ["Fosfato De Sitagliptina Monoidratado","Organon Farmacêutica Ltda.","Januvia","90.3"],
    ["Prednisona","Organon Farmacêutica Ltda.","Meticorten","13.57"],
    ["Desloratadina","Organon Farmacêutica Ltda.","Desalex","31.82"],
    ["Montelucaste De Sódio","Organon Farmacêutica Ltda.","Viatine","74.05"],
    ["Tibolona","Organon Farmacêutica Ltda.","Livial","65.87"],
    ["Bromoprida","Libbs Farmacêutica Ltda","Plamet","25.2"],
    ["Cloridrato De Buspirona","Libbs Farmacêutica Ltda","Ansitec","64.26"],
    ["Carvedilol","Libbs Farmacêutica Ltda","Cardilol","25.6"]
]));

function buscaMedicamento() {
    let inputPrincipioAtivo = document.getElementById('inputPrincipioAtivo').value;
    let inputMedicamento = document.getElementById('inputMedicamento').value;
    inputPrincipioAtivo = inputPrincipioAtivo.toLowerCase();
    inputMedicamento = inputMedicamento.toLowerCase();
    let x = document.getElementsByClassName('principio-ativo');
    let y = document.getElementsByClassName('medicamento');
      
    function buscaPrincipioAtivo(){
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(inputPrincipioAtivo)) {
                x[i].parentNode.style.display = "none";
            }
            else {
                x[i].parentNode.style.display = "";                 
            }
        }
    }

    function buscaMedicamento(x){
        for (i = 0; i < y.length; i++) { 
            if (!y[i].innerHTML.toLowerCase().includes(inputMedicamento)) {
                y[i].parentNode.style.display = "none";
            }
            else {
                if(x != 1){
                    y[i].parentNode.style.display = "";                 
                }              
            }
        }
    }

    if(inputPrincipioAtivo != '' && inputMedicamento != ''){
        buscaPrincipioAtivo();
        buscaMedicamento(1);
    } else if(inputPrincipioAtivo != '' && inputMedicamento == ''){
        buscaPrincipioAtivo();
    } else if(inputPrincipioAtivo == '' && inputMedicamento != ''){
        buscaMedicamento();
    } else if(inputPrincipioAtivo == '' && inputMedicamento == ''){
        buscaPrincipioAtivo();
        buscaMedicamento();
    }
}

function limparFiltros() {
    let inputPrincipioAtivo = document.getElementById('inputPrincipioAtivo').value;
    let inputMedicamento = document.getElementById('inputMedicamento').value;
    let x = document.getElementsByClassName('principio-ativo');
    let y = document.getElementsByClassName('medicamento');
      
    function buscaPrincipioAtivo(){
        for (i = 0; i < x.length; i++) { 
            x[i].parentNode.style.display = "";                           
        }
        document.getElementById('inputPrincipioAtivo').value = ""; 
    }

    function buscaMedicamento(){
        for (i = 0; i < y.length; i++) { 
            y[i].parentNode.style.display = "";             
        }
        document.getElementById('inputMedicamento').value = ""; 
    }
    
    buscaPrincipioAtivo();
    buscaMedicamento();
}

function voltarPagInicial(){
    window.location.href = "index.html";
}