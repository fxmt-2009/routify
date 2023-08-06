import axios from 'axios'

export default async ()=>{

    const fetchit = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todoresults = await fetchit.json()
    console.log("I can't see this console log in my dev tools???")

    const getcryptos = await fetch('https://api.coinlore.com/api/tickers/')
    const cryptos = await getcryptos.json()
    console.log("I can't see this console log in my dev tools???")
    
    
    //const cryptos = ( await axios.get('https://api.coinlore.com/api/tickers/')).data
    
//return { cryptos }
//return { todoresults}
return { cryptos, todoresults}


}