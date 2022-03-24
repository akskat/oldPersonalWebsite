import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>Om meg selv</h2>
            <p>
              Jeg er en student som går andre året på Kommunikasjonsteknologi og
              digital sikkerhet, med plan om å spesialisere meg innen
              informasjonssikkerhet. Jeg har en sterk interesse innen både
              informasjonssikkerhet og kunstig intelligens. Ved siden av emnene
              ved studiet mitt tar jeg andre emner knyttet til både programmering og
              kunstig intelligens. Å løse problemer ved bruk av
              programmeringskunnskap som kunstig intelligens er noe spesielt jeg
              brenner for.
            </p>

            
          </div>
        </div>
      </section>
    );
  }
}
