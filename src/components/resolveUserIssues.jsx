import React from 'react'
import JsonData from './data.json'
function resolveUserIssues(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                    <td>
                        <button type="button" className="btn btn-primary">Resolve Issues</button>
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

                    <th>Issue ID</th>
                    <th>User ID</th>
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

export default resolveUserIssues();
