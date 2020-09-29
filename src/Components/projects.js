import React, { Component } from 'react';
import { Tabs, Tab, Grid, Card, CardTitle, CardText, CardActions, Button, } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                < div className = "projects-grid" >
                    {/* Countdown Timer */}
            
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(./img/Countdown.PNG) center / cover' }}>Countdown Timer</CardTitle>
                        <CardText>
                            This project was built using HTML, CSS and Vanilla JS. And Bootstrap framework, of course.
            </CardText>
                        <CardActions border>
                            <a href="https://github.com/missdobis/countdowntimer" rel="noopener noreferrer" target="_blank">
                                <Button colored>Github</Button>
                            </a>
                            <a href="https://dobiscountdowntimer.netlify.app/" rel="noopener noreferrer" target="_blank">
                                <Button colored>Netlify</Button>
                            </a>
                        </CardActions>
                    </Card>
                    </div>
                
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
               { /* My Playlist */ }
                    
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(./img/Playlist.PNG) center / cover' }}>My Playlist</CardTitle>
            <CardText>
                This project was built using HTML, CSS and Vanilla JS. And also, with Bootstrap for responsiveness.
            </CardText>
            <CardActions border>
                <a href="https://github.com/missdobis/My-Playlist" rel="noopener noreferrer" target="_blank">
                    <Button colored>Github</Button>
                </a>
                <a href="https://dobisplaylist.netlify.app/" rel="noopener noreferrer" target="_blank">
                    <Button colored>Netlify</Button>
                    </a>
            </CardActions>
                    </Card>
                    
                    
                    { /* My Music App */}
                    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(./img/Music.PNG) center / cover' }}>My Music App</CardTitle>
            <CardText>
                This project was built using HTML, CSS only.
            </CardText>
            <CardActions border>
                <a href="https://github.com/missdobis/My-music" rel="noopener noreferrer" target="_blank">
                    <Button colored>Github</Button>
                </a>
                <a href="https://mymusicapp.netlify.app/" rel="noopener noreferrer" target="_blank">
                    <Button colored>Netlify</Button>
                    </a>
            </CardActions>
                    </Card>
                    </div>

            )
        }else if (this.state.activeTab === 2) {
            return (
                < div className = "projects-grid" >
                {/* Validated Form */}
                    
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(./img/Form.PNG) center / cover' }}>Validated Form</CardTitle>
            <CardText>
                This project was built with Bootstrap framework, Vanilla js for validation and sweetalert.
            </CardText>
            <CardActions border>
                <a href="https://github.com/missdobis/registration-form" rel="noopener noreferrer" target="_blank">
                    <Button colored>Github</Button>
                </a>
                <a href="https://dobisform.netlify.app/" rel="noopener noreferrer" target="_blank">
                    <Button colored>Netlify</Button>
                    </a>
            </CardActions>
                    </Card>
                    </ div>

            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Guessing Game */}
                    
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ color: 'black', height: '176px', background: 'url(./img/Game.PNG) center / cover' }}>Guessing Game</CardTitle>
            <CardText>
                This project was built using HTML, CSS and Vanilla JS. And also, with Bootstrap for responsiveness.
            </CardText>
            <CardActions border>
                <a href="https://github.com/missdobis/guessing-game" rel="noopener noreferrer" target="_blank">
                    <Button colored>Github</Button>
                </a>
                <a href="https://myguessingame.netlify.app/" rel="noopener noreferrer" target="_blank">
                    <Button colored>Netlify</Button>
                    </a>
            </CardActions>
                    </Card>
                    </div>

            )
        }
        
    }

    

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Timer</Tab>
                    <Tab>Music</Tab>
                    <Tab>Forms</Tab>
                    <Tab>Games</Tab>
                </Tabs> 
                
                
                    <Grid className="projects-grid">
                        <cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                        </cell>
                    </Grid>
                        
            </div>
        )
    }
}

export default Projects;