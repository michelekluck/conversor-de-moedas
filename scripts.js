function  conversor() {
    let valorEmReal =  document.getElementById('valor-digitado').value;
    console.log(valorEmReal) //para mostrar uma informação rápida no console (inspecionar)
    let cotacaoDoDolar = document.getElementById('cotacao-digitada').value;

    let valorEmDolar = valorEmReal / cotacaoDoDolar ;
    valorEmDolar = Number(valorEmDolar).toLocaleString('en-us', {style:'currency', 'currency':'USD'});
    console.log(valorEmDolar)

    document.getElementById('resultado').textContent = valorEmDolar;
}
