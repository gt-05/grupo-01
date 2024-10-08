import ServiceCard from "./ServiceCard.js   ";

let serviceContainer = document.querySelector('.service-container');
export default function ServiceListing(props){
    let services = [];
    for(let frete of props.data){
        console.log(props.data)
        if(props.cepOrigem.value >= frete.postCodeStart &&
        props.cepOrigem.value <= frete.postCodeEnd &&
        props.cepDestino.value <= frete.postCodeEnd &&
        props.cepDestino.value >= frete.postCodeStart){
            services.push(...frete.services);
        }
    }
    if(services.length <= 0){
        serviceContainer.innerHTML = "Nenhuma opçao de frete foi encontrada entre em contato com..."
        return;
    }
    for(let service of services){
        serviceContainer.innerHTML += ServiceCard(service);
    }
}