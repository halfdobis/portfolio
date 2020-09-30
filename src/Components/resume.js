import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from './education';


class Resume extends Component {
    render() {
        return (
            <div style={{ background: 'whitesmoke' }}>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="./img/dobis.jpg"
                                alt="avatar"
                                style={{ height: "250px" }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Adaobi Ezenwa</h2>
                        <h4 style={{ color: '#141E30' }}>Programmer | Hardware Engineer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Adaobi is a Software Developer who is also a Hardware
                        Engineer. Currently working as a Hardware Engineer at Hinckley
                        Associates and interning as a FrontEnd developer at Dev_Careers
                        with both companies based in Lagos, Nigeria.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>No 6 Ayodele street, Abule-Oja, Yaba, Lagos State, Nigeria.</p>
                        <h5>Phone</h5>
                        <p>+234 8104223355</p>
                        <h5>Email</h5>
                        <p>missdobis@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;