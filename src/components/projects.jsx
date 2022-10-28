import React from "react";


function Projects() {
    const scrollToTop =() =>{
        window.scrollTo({
            top:0,
            behaviour:"smooth",
        })
    }

    const sendEmail =() =>{
      
    }
  return (
    <>
      <section id="projects" className="text-dark bg-primary m-4">
        <h2 className="text-center text-light">Projects</h2>
        <div className="card">
          <img src="./Calculator.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-title text-center">
              Calculator
            </p>
            <p className="card-text">
              A calculator app built using Plain vanilla JavaScript for all your needs.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="./Calculator.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="./Calculator.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="./Calculator.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="m-4 p-4">
        <div className="row bg-light text-primary">
          <form className="col-6 mt-4 p-4" onSubmit={sendEmail()}>
            <h2>Leave a message</h2>
            <div className="mb-3">
              <input type="text" className="form-control" id="usrName"
                placeholder="Your Name"/>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="userEmail"
                placeholder="Your Email"/>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="msgSubject"
                placeholder="Subject"/>
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="message" rows="5" placeholder="Message">
            </textarea>
          <button type="submit" className="btn btn-primary mt-4">Send Message</button>
            </div>
          </form>
          <div className="col-6 mt-4 p-4">
            <h2>Get in Touch</h2>
            <p className="p-4">I am always open to new challenges and opportunities. Connect with me on LinkedIn if you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <div className="icons ">
            <a href="https://www.linkedin.com/in/shubhkaush342">
            <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/shubhkaush342">
            <i className="bi bi-github"></i>
            </a>
            <a href="mailto:skaushal342@gmail.com">
            <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://twitter.com/Skaushal342">
            <i className="bi bi-twitter"></i>
            </a>
            <a href="https://www.facebook.com/shubhamkaushalrockz">
            <i className="bi bi-facebook"></i>
            </a> 
            </div>
          </div>
        </div>
      </section>
      <section className="footer bg-gradient text-light text-center fs-6">
            <footer>
                <hr />
                <p>
                Designed By Shubham Kaushal
                </p>
                <p>Using React and BootStrap</p>
                <p>2022</p>
                Photo by <a className="text-info" href="https://unsplash.com/@pramodtiwari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pramod Tiwari</a> on <a className="text-info" href="https://unsplash.com/t/business-work?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </footer>
            <div className="arrow mt-0 mb-0 m-4 fs-4">
                <button  onClick={scrollToTop}><i className="bi bi-arrow-up-circle"></i></button>
            </div>
      </section>
    </>
  );
}

export default Projects;
