import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <div className="row">
                <div className="columns contact-details">
                  <h2
                    style={{
                      color: "#fff",
                    }}
                  >
                    Contact
                  </h2>
                  <p className="address">
                    <span>{resumeData.name}</span>
                    <br />
                    <span>{resumeData.address}</span>
                    <br />
                    E-post: akselnk@stud.ntnu.no
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
