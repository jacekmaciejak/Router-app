import * as React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: ""
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz cos do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Wpisz wiadomosc..."
          />
          <button>Wyslij</button>
        </form>
        <Prompt
          when={this.state.value}
          message="Nie wypelniles formularza. Czy na pewno chcesz isc dalej?"
        />
      </div>
    );
  }
}

export default ContactPage;
