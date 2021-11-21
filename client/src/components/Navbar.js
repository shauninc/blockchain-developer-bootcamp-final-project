import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav 
      className="navbar navbar-dark bg-primary p-3 variant-dark"
     variant="dark"
      >
        <div 
        className="text-white"
        >
          MyFiles
        </div>
        <ul className="navbar-nav px-3">
          <li>
            <small id="account">
          
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                   Linked Wallet--> 
                  {this.props.account.substring(0,6)}...{this.props.account.substring(38,42)}
              </a>
            </small>
          
          </li>
        </ul>
      </nav>
      
    );
  }
}

export default Navbar;