import React from 'react'
import JsonData from './data.json'
function outstandingPayments(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>

                </tr>
            )
        }
    )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Payment ID</th>
                    <th>Amount</th>
                    <th>Transaction Type</th>
                    <th>Duration</th>
                    <th>User ID</th>
                </tr>
                </thead>
                <tbody>


                {DisplayData}

                </tbody>
            </table>

        </div>
    )
}

export default outstandingPayments();
