import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
    const html = 60;
    const css = 75;
    const js = 80;
    const reacts= 50;
  return (
    <>
      <div className="container bg-light text-dark mb-3 pb-3" id="about">
        <div className="row">
          <div className="col-6">
            <div className="container abt-1">
              <div className="row g-2">
                <div className="mt-5 col-6">
                  <div>Name:</div>
                </div>
                <div className="mt-5 col-sm">
                  <div >Shubham Kaushal</div>
                </div>
                <div className="col-6">
                  <div className="">Profile:</div>
                </div>
                <div className="col-sm">
                  <div className="">Associate Software Developer</div>
                </div>
                <div className="col-6">
                  <div className="">Email:</div>
                </div>
                <div className="col-sm">
                  <div className="">skaushal342@gmail.com</div>
                </div>
              </div>
              <div className="col-6 ml-3 mt-4">
               <div className="row">
               <label htmlFor="html">HTML
                <ProgressBar variant="info" now={html} label={`${html}%`} id="html"/>
               </label>
               </div>
               <div className="row">
               <label htmlFor="css">CSS
               <ProgressBar variant="info" now={css} label={`${css}%`} id="css"/>
               </label>
               </div>
               <div className="row">
               <label htmlFor="javascript">JavaScript
               <ProgressBar variant="info" now={js} label={`${js}%`} id="javascript"/>
               </label>
               </div>
               <div className="row">
               <label htmlFor="react">React
               <ProgressBar variant="info" now={reacts} label={`${reacts}%`} id="react"/>
               </label>
               </div> 
              </div>
            </div>
          </div>
          <div className="mt-4 col-6 rt">
            <h2 className="text-decoration-underline">About Me</h2>
            Previously i have worked as an Associate Software Developer at
            Fresche Solutions. Currently i am looking forward to working in Web
            development as I have always been passionate about it. I am also
            learning different JavaScript frameworks. Web development
            calls to all my passions as it incorporates creativity and problem
            solving , something i enjoy immensely.
            <hr className="border border-primary border-1 opacity-50"></hr>
            Some of the other technologies i have worked /familiar with are as
            follows.
            <ul className="list-group mt-2">
              <li className="list-group-item text-info  bg-dark">JavaScript</li>
              <li className="list-group-item text-info  bg-dark">HTML</li>
              <li className="list-group-item text-info  bg-dark">CSS</li>
              <li className="list-group-item text-dark  bg-info">React JS</li>
              <li className="list-group-item text-info bg-dark">C++</li>
              <li className="list-group-item text-info  bg-dark">SQL</li>
              <li className="list-group-item text-info  bg-dark">COBOL</li>
            </ul>
          </div>
        </div>
      </div>
      <section id="experience" className=" m-4 text-wrap">
      <div className="p-4 mt-4 bgx">
    <img src="./bgx.jpg" alt="office-bg"/>
      <h2 className="text-center fs-1 bgx-text fw-bold">Work Experience</h2>
      <h3 className="bgx-text fw-bold">Fresche Solutions</h3>
      <h4 className="bgx-text fw-semibold text-decoration-underline">Intern</h4>
      <h4 className="bgx-text">September 2021 - March 2022</h4>
      <p className="bgx-text">As an Intern my responsibilities included testing and development of code, creating SQL queries and preparing
        documentation.</p>
      <h4 className="bgx-text fw-semibold text-decoration-underline">Associate Software Developer</h4>
      <h4 className="bgx-text">April 2022 - June 2022</h4>
      <p className="bgx-text"></p>
      <ul className="bgx-text">
        <li>Analyzed and performed maintainence of existing processes.</li>
        <li>Coding and testing for enhancement of applications.</li>
        <li>Created and deployed a new process according to business requirements dealing with large number of records.
        </li>
      </ul>
        </div>
      </section>
    </>
  );
}

export default About;
