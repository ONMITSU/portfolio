import React from 'react';
import { Button } from 'react-bootstrap';
import { IoLogoLinkedin, IoMail } from "react-icons/io5";

export default function About() {
    return(
        <section id="about">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Yossapon Jantarote</h1>
                    <p className="col-md-8 fs-4">Hello, my name is  Yossapon Jantarote. Developer who's loved to build application with C#</p>
                    <ul>
                        <li>Graduated from Thai-Nichi Institute of Technology (TNI) with first-class honors</li>
                        <li>C# .NET Developer (Windows Form, ASP.NET MVC)</li>
                        <li>Able to communicate with basic japanese</li>
                    </ul>
                    <p style={{marginTop: 30}}>
                        <Button variant="outline-dark" style={{marginRight: 15}} href="https://www.linkedin.com/in/yossapon-jantarote-4328b5194/" target="_blank"><IoLogoLinkedin size="2em"/></Button>
                        {/* <Button variant="outline-dark" href="mailto:ja.yossapon@gmail.com" target="_blank"><IoMail size="2em"/></Button> */}
                    </p>
                </div>
            </div>
        </section>
    );
}