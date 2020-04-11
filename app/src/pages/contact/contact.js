import React from 'react';
import MainLayout from "../../layouts/MainLayout/index";
import './_contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <MainLayout>
      <section className="contentBox">
        <div className="contactForm">
          <h1>- CONTACT FORM -</h1>
          <form>
            <input type="text" name="Name" placeholder="Name"></input>
            <input type="text" name="Surname" placeholder="Surname"></input>
            <input type="text" name="EMail" placeholder="EMail"></input>
            <input type="text" name="Konu" placeholder="Konu"></input>
            <textarea name="Message" placeholder="Message"></textarea>
            <input type="submit" value="SEND"></input>
          </form>
        </div>
      </section>
    </MainLayout>
    );
  }
}
