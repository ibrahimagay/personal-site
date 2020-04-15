import React from 'react';
import './_home.scss';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <section className="contentBox">
        <div className="aboutBox">
          <h1>- HOME -</h1>
        </div>
      </section>
    );
  }
}
