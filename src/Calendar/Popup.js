import React from "react";
import { hot } from "react-hot-loader/root";
import "./Popup.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class PopupModal extends React.Component {
  render() {
    return (
      <div className="popup-main">
        <div className="popup-inner">
          <div class="container container-popup">
            <div class="row headingRow">
              <span className="Popup-heading">
                {this.props.data.title.rendered}
              </span>
              <div onClick={this.props.display} className="icon cross-icon">
                close
              </div>
            </div>

            <div class="row">
              <span className="key">Organizer name : </span>
              <span className="value">{this.props.data["Organizer Name"]}</span>
            </div>

            <div class="row">
              <span className="key">Location : </span>
              <span className="value">{this.props.data.Location}</span>
            </div>

            <div class="row">
              <span className="key">Date : </span>
              <span className="value">{this.props.date.toString()}</span>
            </div>

            <div class="row">
              <span className="key">Website : </span>
              <a href={this.props.data.URL} target="_blank" className="value">
                {this.props.data.URL}
              </a>
            </div>

            <div class="row">
              <span className="key">Twitter Handle : </span>
              {this.props.data.Twitter ? (
                <span className="value">{this.props.data.Twitter}</span>
              ) : (
                <span className="value">NA</span>
              )}
            </div>

            <div className="row row-button">
              <button onClick={this.props.display} className="btn btn-primary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(PopupModal);
