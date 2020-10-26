import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div className="landing-grid">
        <Grid>
          <Cell col={12}>
            <div>
              <img src="./img/dobis.jpg" alt="avatar" className="avatar-img" />
            </div>
            <div className="banner-text">
              <h1>Adaobi Ezenwa</h1>
              <h2>FrontEnd Web Developer</h2>

              <hr />
              <p> HTML | CSS | JAVASCRIPT | REACT | BOOTSTRAP | JQUERY </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/adaobi-ezenwa-23926a19a"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/missdobis"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a
                  href="https://www.twitter.com/missdobis?s=09"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
