import React from "react";
import API from '../../utils/API';

class LogoutButton extends React.Component {

    logout = () => {
        API.logout()
        .then(user => {
          console.log("logging out in homeownercheck.js: ", user);
          sessionStorage.clear();
          window.location.reload();
  
        })      
      }

render() {
    return (
        // <button type="button" className="btn btn-outline-dark">Logout</button>
        <button type="button" className="btn btn-outline-dark" onClick={this.logout}>Logout</button>
    );
}

};

export default LogoutButton;