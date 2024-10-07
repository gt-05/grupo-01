const url = 'https://viacep.com.br/ws';

const formCalcularFrete = document.getElementById('calcularFrete');
const enderecoOrigem = document.getElementById('enderecoOrigem');
const enderecoDestino = document.getElementById('enderecoDestino');
formCalcularFrete.addEventListener('submit',function(event){
    //.addEventListener submit evento de click do formulario
    event.preventDefault();
    //.preventDefault() para o evento de recarregar a pagina
    let cepOrigem = event.target.querySelector('#cep-origem');
    // .target é para procurar dentro do event
    // sem o target ele procuraria em todo documento

    fetch(`${url}/${cepOrigem.value}/json`).then(function(response){
        return response.json();
    }).then(function(responseBody){
        enderecoOrigem.innerHTML = `${responseBody.logradouro}, ${responseBody.bairro}, ${responseBody.localidade}, ${responseBody.estado}, ${responseBody.cep}`;

    });
    
    let cepDestino = event.target.querySelector('#cep-destino');

    fetch(`${url}/${cepDestino.value}/json`).then(function(response){
        return response.json();
    }).then(function(responseBody){
        enderecoDestino.innerHTML = `${responseBody.logradouro}, ${responseBody.bairro}, ${responseBody.localidade}, ${responseBody.estado}, ${responseBody.cep}`
    })
});



// programação assíncrona 

// Fetch é uma função nativa do JavaScript que permite realizar requisições HTTP assíncronas entre uma aplicação web e recursos externos.

// fetch é o ultimo a ser carregado

// then é uma função que recebe uma função que só é executada quando a promessa termina de ser carregada

// .then significa então(faça fetch(url) então execute fetch quando estiver pronta)

// .text formato de texto

// então fetch buscou oq estava dentro da url .then faça com que espere o fetch esteja pronta para executar a function. response é a mensagem enviada para o servidor pedindo as informações do servidor
// response guardou as informações 

/* response.text().then(function(responseBody){
    console.log(responseBody) */
