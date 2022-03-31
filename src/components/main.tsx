import React, { useState } from 'react';
import "./main.css";
const Main = () => {
    const [] = useState();

    return (
        <div className="outer">
            <div className="container">
                <h2 className="Title" id="JobTitle">Job Title</h2>
                <h4 className="Title" id="Description">Job Description</h4>
                <h4 className="Title" id="Requirements">Job Requirements</h4>
                <h4 className="Title" id="Location">Location</h4>
                <h4 className="Title" id="Salary">Estamated Salary</h4>
                <h4 className="Title" id="Benifits">Benifits</h4>
                <h4 className="Title" id="About">About the company</h4>
            </div>
            <div className="buttons">
                <button className="button" id="Apply">Apply</button>
                <button className="button" id="Save">Save</button>
                <button className="button" id="Pass">Pass</button>
            </div>
        </div>
    )
}

export default Main;