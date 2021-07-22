import React, { Component } from 'react';
import CardList from './components/CardList.js';
import SearchBox from "./components/searchBox"
import "./App.css"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
      searchField: " ",
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }
  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  };

  render() {

    const {items,searchField} = this.state;
    const filteredItems = items.filter(
      item => item.name.toLowerCase()
      .includes(searchField.toLowerCase())
    )


    const{ isLoaded} = this.state;

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    else {
       return (
          <div className="App">
            <SearchBox placeholder="search box"
          handleChange={this.onSearchChange} />

          <CardList items={filteredItems}/>
          </div>    
    );

    }
  }
}

export default App;
