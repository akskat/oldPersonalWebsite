import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav
            id="nav-wrap"
            style={{
              color: "#fff",
              fontFamily: "sans-serif ",
              backgroundColor: "#2B2B2B",
            }}
          >
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Hjem
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  Om meg
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  CV
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Hobby
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Kontakt meg
                </a>
              </li>
            </ul>
          </nav>

          <div
            className="row banner"
            style={{
              color: "#fff",
              fontFamily: "sans-serif ",
              backgroundColor: "#2B2B2B",
              alignSelf: "flex-start",
              borderRadius: 12,
              padding: 8,
              borderWidth: 1,
              width: "50%",
            }}
          >
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h2
                style={{
                  color: "#fff",
                }}
              >
                Student
              </h2>
              <h3>
                Kommunikasjonsteknologi og digital sikkerhet ved NTNU Trondheim.
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
