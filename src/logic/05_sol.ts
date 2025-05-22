// 🔹 5. Currency Converter
// API: https://api.exchangerate-api.com/

// Task: Convert amount between two selected currencies.

const Currency_fetch = async (current_currency: string, price: number) => {
    const API_KEY: string = "58cf88fd7e87835817842dad" 
    const url: string = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${current_currency}`;
    const options = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(url, options)
    const data = await response.json()
    
    return data


}

const display_cur = async () => {
    const input = (document.getElementById('amount') as HTMLInputElement || null)?.value ?? 1;
    const casted_input = Number(input) ?? 1;
    const currency1 = (document.getElementById('currency_1') as HTMLInputElement | HTMLSelectElement)?.value ?? "";
    const currency2 = (document.getElementById('currency_2') as HTMLInputElement | HTMLSelectElement)?.value ?? "";

    const output = document.getElementById('output')


    if (output){
        const data = await Currency_fetch(currency1, casted_input);
        console.log(data)

        const conversion_rates = data.conversion_rates
        const conversion = Number(conversion_rates[currency2]) * Number(input)
        output.innerHTML = conversion.toString() + " " +currency2;        
    }
}

// display_cur();


(async () => {
    const curr = (await Currency_fetch("INR", 1))?.conversion_rates ?? {};
    const all_curr: string[] = Object.keys(curr);
    const selector = document.getElementsByClassName('currency');

    if (selector.length > 0) {
        all_curr.forEach((currency: string) => {
            const optionTag: HTMLOptionElement = document.createElement('option');
            optionTag.value = currency;
            optionTag.textContent = currency;
            Array.from(selector).forEach((el) => {
                el.appendChild(optionTag.cloneNode(true));
            });
        });
    }
})();

