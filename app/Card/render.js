export const renderCards = (array, data='') =>{
    array.map(({color,symbol,suite},i)=> data+=`
        <li id="card-${i+1}"
            class="card ${color}" 
            data-suite="${suite}"
            draggable="true">
            ${symbol}
        </li>`)
    return data
}
export const renderBoard = (data="") => {
    Array.from({length:5}).map(_ => data+=`<li class="card-space"></li>`)
    return data
}