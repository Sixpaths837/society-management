import React from "react";

function UserHouse(props) {
  return (
    <div className="container" style={{ width: "90%" }}>
      <div className="row">
        <div className="col m-2"></div>
        <div className="col-6 m-2">
          <div className="row">
            <div className=" card bg-dark col-12 m-2">
              <br />
              <h4 className={"text-success"}>House Details</h4>
              <ul className="list-group m-4">
                <li className="list-group-item  m-0 border border-dark">
                  House No. : {props.user[1].House_Number}
                </li>
                <li className="list-group-item  m-0 border border-dark">
                  Type : {props.user[1].Type_of_House}
                </li>
                <li className="list-group-item  m-0 border border-dark">
                  Block : {props.user[1].Block_Number}
                </li>
                <li className="list-group-item  m-0 border border-dark">
                  Society : {props.user[1].Name_of_Society}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col m-2"></div>
      </div>
    </div>
  );
}

export default UserHouse;
