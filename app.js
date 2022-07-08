async function main(){
    const url = "https://TheOfficeQuotesAPI.null3000.repl.co/api/v1/quote/dwight"
    let response = await fetch(url);
    let data = await response.json();
    let quote = data.quote;
    console.log(quote);

    let quoteLength = quote.length;
    console.log(quoteLength);
    document.getElementById('quote').innerText = quote;
    if (quoteLength > 300) {
        var el = document.querySelector('#quote');
        el.outerHTML = '<h2>' + el.innerHTML + '</h2>';
        document.getElementById('quote').innerText = quote;
    }

}
main();