import React from 'react'
import JsonData from './data.json'
function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                    <td>
                        <button type="button" className="btn btn-primary">Make Payment</button>
                    </td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Amount</th>
                    <th>Transaction Type</th>
                    <th>Duration</th>
                    <th>Pay</th>
                </tr>
                </thead>
                <tbody>


                {DisplayData}

                </tbody>
            </table>

        </div>
    )
}

export default JsonDataDisplay;
