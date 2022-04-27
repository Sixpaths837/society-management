import React, {useState} from 'react'
import JsonData from './data.json'
function UserProfileTable(){
const [user, setUser,house, Issues,props]= useState({})

    return(
        <div className="container" style={{ width: "90%" }}>
            <div className="row">
                <div className="col m-2">


                </div>
                <div className="col-6 m-2">
                    <div className="row">
                        <div className=" card bg-dark col-12 m-2">
                            <br/>
                            <h4 className={"text-success"}>User Details</h4>
                            <ul className="list-group m-4">
                                <li className="list-group-item  m-0 border border-dark">
                                    Username : {"1"}
                                </li>
                                <li className="list-group-item  m-0 border border-dark">
                                    Name : {"Shyam"}
                                </li>
                                <li className="list-group-item  m-0 border border-dark">
                                    House No. : {"123"}
                                </li>
                                <li className="list-group-item  m-0 border border-dark">
                                    Society ID : {"123"}
                                </li>
                                <li className="list-group-item  m-0 border border-dark">
                                    House No. : {"123"}
                                </li>
                                <li className="list-group-item  m-0 border border-dark">
                                    Type : {"Flat"}
                                </li>
                                <li className="list-group-item  m-0 border border-dark">
                                    Block : {"1"}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col m-2"></div>
            </div>
        </div>
    )
}

export default UserProfileTable;
