import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Axios from "axios";

function ResolveIssueButton(props) {
  const [reply, setReply] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (reply) {
      Axios.post("http://localhost:3001/addreply", {
        Issue_ID: JSON.stringify(props.value),
        reply: reply,
      }).then((res) => {
        if (!res.data.err) {
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
        Resolve Issue
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <div>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="card col-md-10 offset-md-1 offset-md-1">
                <h3 className="text-center text-success">Reply to the Issue</h3>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Reply</label>
                      <input
                        placeholder="Enter Reply"
                        name="reply"
                        className="form-control"
                        value={reply}
                        onChange={(e) => {
                          setReply(e.target.value);
                        }}
                        autoComplete="off"
                      />
                    </div>

                    <br />
                    <button
                      className="btn btn-success"
                      style={{
                        marginLeft: "27%",
                        borderRadius: "7px",
                        width: "46%",
                      }}
                      onClick={handleSubmit}
                    >
                      <h6>Submit</h6>
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

export default ResolveIssueButton;
