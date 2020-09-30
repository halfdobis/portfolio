import React, { Component } from 'react';
import { Cell, Grid, ProgressBar } from 'react-mdl';


class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{ display: 'flex' }}>
                        <h5>{this.props.skills}</h5>
                        <ProgressBar style={{margin: 'auto', width: '60%'}} progress={this.props.progress} />
                   </div>
                </Cell>
           </Grid>
        )
    }
}

export default Skills;