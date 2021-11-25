import React from 'react'
import Coin from '../Coin/Coin';
import "./currencyTable.css"

function CurrencyTable({ coinArray }) {
    return (
       <table className="Table">
           <tr>
                <th>
                    Rank
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
            </tr>
            {coinArray.map(item => (
                <div key={item.id} className="Row">
                        <Coin rank = {item.rank} name = {item.name} price = {item.price}/>
                </div>
            ))} 
       </table>
    )
}

export default CurrencyTable