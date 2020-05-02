import React from 'react';
import { Helmet } from 'react-helmet';
import './_contact.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      subject: '',
      message: '',
      hasValidationError: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(
      this.state.name,
      this.state.surname,
      this.state.email,
      this.state.subject,
      this.state.message
    );

    if (
      this.state.name === '' ||
      this.state.surname === '' ||
      this.state.email === '' ||
      this.state.subject === '' ||
      this.state.message === ''
    ) {
      this.setState({ hasValidationError: true });
      return false;
    } else {
      this.setState({ hasValidationError: false });
    }
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {});
  }

  render() {
    return (
      <section className="contentBox">
        <Helmet>
          <title>CONTACT - İBRAHİM AGAY</title>
        </Helmet>
        <div className="contactForm">
          <h1>- CONTACT FORM -</h1>
          <form onSubmit={this.handleSubmit}>
            {this.state.hasValidationError && (
              <span>Lütfen alanları kontrol ediniz.</span>
            )}
            <input
              type="text"
              placeholder="Name"
              required
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            ></input>
            <input
              type="text"
              placeholder="Surname"
              value={this.state.surname}
              onChange={(event) =>
                this.setState({ surname: event.target.value })
              }
            ></input>
            <input
              type="email"
              placeholder="E-Mail"
              required
              value={this.state.email}
              onChange={(event) => this.setState({ email: event.target.value })}
            ></input>
            <input
              type="text"
              placeholder="Subject"
              value={this.state.subject}
              onChange={(event) =>
                this.setState({ subject: event.target.value })
              }
            ></input>
            <textarea
              placeholder="Message"
              value={this.state.message}
              onChange={(event) =>
                this.setState({ message: event.target.value })
              }
            ></textarea>
            <input type="submit" value="SEND"></input>
          </form>
        </div>
      </section>
    );
  }
}
