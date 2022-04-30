import React, { useState } from "react";
import Axios from "axios";

function CreateHouse(props) {
  const [hno, setHno] = useState("");
  const [htype, setHtype] = useState("");
  const [bno, setBno] = useState("");
  const [sid, setSid] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (hno && htype && bno && sid) {
      Axios.post("http://localhost:3001/addhouse", {
        House_Number: hno,
        Type_Of_House: htype,
        Block_Number: bno,
        Society_ID: sid,
      }).then((res) => {
        if (res.data.message === "OK!") {
          alert("House Added!");
        } else {
          alert("An Error Occured!");
        }
      });
    } else {
      alert("Please Fill the Form");
    }
  }
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card bg-dark col-md-6 offset-md-3 offset-md-3">
            <br></br>
            <h3 className="text-center text-success">Add House</h3>

            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>House Number</label>
                  <input
                    type="text"
                    placeholder="Enter House Number"
                    name="hno"
                    className="form-control"
                    value={hno}
                    onChange={(e) => {
                      setHno(e.target.value);
                    }}
                    autoComplete="off"
                  />
                  <label>Type of House</label>
                  <input
                    type="text"
                    placeholder="Enter Type of House"
                    name="htype"
                    className="form-control"
                    value={htype}
                    onChange={(e) => {
                      setHtype(e.target.value);
                    }}
                    autoComplete="off"
                  />

                  <label>Block Number</label>
                  <input
                    type="text"
                    placeholder="Enter Block Number"
                    name="transactionNumber"
                    className="form-control"
                    value={bno}
                    onChange={(e) => {
                      setBno(e.target.value);
                    }}
                    autoComplete="off"
                  />
                  <label>Society ID</label>
                  <input
                    type="text"
                    placeholder="Enter Society ID"
                    name="transactionNumber"
                    className="form-control"
                    value={sid}
                    onChange={(e) => {
                      setSid(e.target.value);
                    }}
                    autoComplete="off"
                  />

                  <br />
                  <button
                    className="btn btn-success"
                    style={{
                      marginLeft: "2%",
                      borderRadius: "7px",
                      width: "46%",
                    }}
                    onClick={handleSubmit}
                  >
                    <h6>Confirm</h6>
                  </button>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateHouse;
