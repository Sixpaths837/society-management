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

                </tr>
            )
        }
    )

    return(
        <div>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Issue ID</th>
                    <th>Issue Subject</th>
                    <th>Reply</th>

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
