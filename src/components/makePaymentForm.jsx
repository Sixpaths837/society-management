import React, { useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

function MakePaymentButton(props) {
  const [tmode, setTmode] = useState("");
  const [tnumber, setTnumber] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.value);
    if (tmode && tnumber) {
      Axios.post("http://localhost:3001/makepayment", {
        tno: tnumber,
        tmode: tmode,
        Payment_ID: JSON.stringify(props.value),
      }).then((res) => {
        if (res.data.message) {
          alert(res.data.message);
          setOpen(false);
        } else {
          alert("An Error has Occurred!");
        }
      });
    } else {
      alert("Please fill the Details!");
    }
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Make Payment
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <div>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="card col-md-10 offset-md-1 offset-md-1">
                <br />
                <h3 className="text-center text-success">
                  Submit Payment Details
                </h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Transaction Mode</label>
                      <input
                        placeholder="Enter Transaction Mode"
                        name="transactionMode"
                        className="form-control"
                        value={tmode}
                        onChange={(e) => {
                          setTmode(e.target.value);
                        }}
                        autoComplete="off"
                      />

                      <label>Transaction Number</label>
                      <input
                        type="transactionNumber"
                        placeholder="Enter Transaction Number"
                        name="transactionNumber"
                        className="form-control"
                        value={tnumber}
                        onChange={(e) => {
                          setTnumber(e.target.value);
                        }}
                        autoComplete="off"
                      />
                    </div>
                    <br />
                    <button
                      className="btn btn-success"
                      style={{
                        marginLeft: "26%",
                        borderRadius: "7px",
                        width: "46%",
                      }}
                      onClick={handleSubmit}
                    >
                      <h6>Confirm</h6>
                    </button>
                  </form>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default MakePaymentButton;
