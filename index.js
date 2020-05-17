import React, { Component } from "react";

import { debounce } from "lodash";

import axios from "axios";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",

      response: [{ label: "satyam" }, { label: "satyam" }],
    };
  }

  callAPI = debounce(() => {
    const { value } = this.state;
    console.log("API Called");
    axios
      .get(`/api/hello?name=${value}`)
      .then((finalRes) => {
        console.log(finalRes.data);
        //this.setState({response:finalRes.data})
        //api response will put inside the aaray
      })
      .catch((err) => {
        console.log(err);
      });
  }, 500);

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
    //this.callAPI();
  };
  handleSelect = (event) => {
    console.log(event);
  };
  getData = () => {
    var items = this.state.response;
    // console.log(items)
    return items.map((item) => {
      return <option value={item.label}>{item.label}</option>;
    });
  };
  render() {
    return (
      <div>
        <input
          list="data"
          id="ice-cream-choice"
          name="sel"
          onChange={this.handleChange}
        />

        <div>
          <datalist id="data">
            <select name="sel" onChange={this.handleSelect}>
              {this.getData()}
            </select>
          </datalist>
        </div>
      </div>
    );
  }
}
export default HomePage;
