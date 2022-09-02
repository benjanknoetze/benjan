//Contact page form

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
		<div className="p-5">
	  <h5 className="Heading pl-3 mt-3">Please leave a message</h5>
      <form className="p-3 contactForm"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xrgoqvaq"
        method="POST"
      >
        <label className="formLabel">Email:</label>
		  <br></br>
		<input className="formInput" type="email" name="email" /> <br></br>
        <label className="formLabel mt-2">Message:</label> <br></br>
		<input className="formInput pb-5 mb-3" type="text" name="message" /> <br></br>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="cardButton">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
	  <style global jsx>{`
			.Heading {
				color: #fff;
				font-weight: 800;
			}
			.contactText {
				color: #fff;
			}
			.formLabel {
				color: #ffffff75;
				font-family: 'Source Sans Pro',sans-serif;
			}
			.formInput {
				background-color: #ffffff15;
				width: 75%;
				border: none;
				border-radius: 4px;
			}
			.cardbutton {
				width: 100% !important;
			}
			@media (min-width: 800px) {
				.cardButton {
				  width: 15% !important;
				}
				}
			`}</style>
	  </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}