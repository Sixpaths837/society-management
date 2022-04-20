import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-dark bg-dark">
            <Link to="/society-management/" className="text-light">
              <div>
                <h3>Society-Management</h3>
              </div>
            </Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
