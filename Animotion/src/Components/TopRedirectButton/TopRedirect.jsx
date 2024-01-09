import React from "react";
import { Link } from "react-router-dom";
import "./TopRedirect.css";

class TopRedirect extends React.Component {
  render() {
    function handleClick(){
      window.scrollTo(0, 0);
    }
    return (
      <>
        <Link to={this.props.location}>
            <div className="RedirectAlnBtn">
                <button class="RedirectBtn" onClick={handleClick}>
                    <svg height="1.2em" class="arrow" viewBox="0 0 512 512">
                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                    </svg>
                    <p class="RedirectTxt">Back to Top</p>
                </button>
            </div>
        </Link>
      </>
    );
  }
}

export default TopRedirect;