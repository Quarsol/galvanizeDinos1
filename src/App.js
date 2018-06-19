import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import JobList from "./components/JobList"
import JobForm from "./components/JobForm"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      listings: []
    }
  }
componentDidMount(){
  fetch("./listings.json")
  .then(response => response.json())
  .then(listings => {
    this.setState({
      listings: listings
    })
  })
}

submitJobListing = (listing) => {
  this.setState({
    listings: this.state.listings.concat(listing)
  })
}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobList listings = {this.state.listings}/>
          <JobForm submitJobListing = {this.submitJobListing}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
