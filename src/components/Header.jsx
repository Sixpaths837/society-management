import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Header(props) {
  async function logout() {
    await Axios.get("http://localhost:3001/logout").then((response) => {
      console.log(response);
    });
  }
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <Link
            to="/society-management/"
            style={{ textDecoration: "none" }}
            className="text-light"
          >
            <div style={{ width: "100%" }}>
              <h3>&nbsp;Society-Management</h3>
            </div>
          </Link>
          {props.logIn !== "" ? (
            <div style={{ width: "50%", textAlign: "right" }} className="m-2">
              <button className="btn btn-warning btn-sm">
                <a
                  onClick={logout}
                  href="http://localhost:3000/society-management/"
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </a>
              </button>
            </div>
          ) : (
            ""
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
