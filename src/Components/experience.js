import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';


class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                   <h5>{this.props.startYear} - {this.props.endYear}</h5>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.companyName}</h4> 
                    <h6>{this.props.jobDescription}</h6>
                </Cell>
           </Grid>
        )
    }
}

export default Experience;