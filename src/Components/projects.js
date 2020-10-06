import React, { Component } from "react";
import {
  Grid,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div className="projects-grid">
        <Grid>
          {/* Countdown Timer */}

          <Card className="box-grid" shadow={5}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(./img/Countdown.PNG) center / cover",
              }}
            >
              Countdown Timer
            </CardTitle>
            <CardText>
              This project was built using HTML, CSS and Vanilla JS. And
              Bootstrap framework, of course.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/missdobis/countdowntimer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <a
                href="https://dobiscountdowntimer.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Netlify</Button>
              </a>
            </CardActions>
          </Card>

          {/* My Playlist */}

          <Card className="box-grid" shadow={5}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(./img/Playlist.PNG) center / cover",
              }}
            >
              My Playlist
            </CardTitle>
            <CardText>
              This project was built using HTML, CSS and Vanilla JS. And also,
              with Bootstrap for responsiveness.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/missdobis/My-Playlist"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <a
                href="https://dobisplaylist.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Netlify</Button>
              </a>
            </CardActions>
          </Card>

          {/* My Music App */}

          <Card className="box-grid" shadow={5}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(./img/Music.PNG) center / cover",
              }}
            >
              My Music App
            </CardTitle>
            <CardText>This project was built using HTML, CSS only.</CardText>
            <CardActions border>
              <a
                href="https://github.com/missdobis/My-music"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <a
                href="https://mymusicapp.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Netlify</Button>
              </a>
            </CardActions>
          </Card>

          {/* Validated Form */}

          <Card className="box-grid" shadow={5}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(./img/Form.PNG) center / cover",
              }}
            >
              Validated Form
            </CardTitle>
            <CardText>
              This project was built with Bootstrap framework, Vanilla js for
              validation and sweetalert.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/missdobis/registration-form"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <a
                href="https://dobisform.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Netlify</Button>
              </a>
            </CardActions>
          </Card>

          {/* Guessing Game */}

          <Card className="box-grid" shadow={5}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(./img/Game.PNG) center / cover",
              }}
            >
              Guessing Game
            </CardTitle>
            <CardText>
              This project was built using HTML, CSS and Vanilla JS. And also,
              with Bootstrap for responsiveness.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/missdobis/guessing-game"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Github</Button>
              </a>
              <a
                href="https://myguessingame.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Netlify</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default Projects;
