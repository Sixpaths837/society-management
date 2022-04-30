import React from "react";

function UserProfileTable(props) {
  return (
    <div className="container" style={{ width: "90%" }}>
      <div className="row">
        <div className="col m-2"></div>
        <div className="col-6 m-2">
          <div className="row">
            <div className=" card bg-dark col-12 m-2">
              <br />
              <h4 className={"text-success"}>User Details</h4>
              <ul className="list-group m-4">
                <li className="list-group-item  m-0 border border-dark">
                  Username : {props.user[0].User_ID}
                </li>
                <li className="list-group-item  m-0 border border-dark">
                  Name : {props.user[0].Name}
                </li>
                <li className="list-group-item  m-0 border border-dark">
                  House No. : {props.user[0].House_Number}
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

export default UserProfileTable;
