import React, { Component } from 'react';
import {CardList} from '../src/components/card-list/card-list.component';
import TOOL_DATA from './tool.data';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';
import { Footer } from './components/footer/footer.component';

class App extends Component{
    constructor(){
      super();


      this.state = {
        tools : TOOL_DATA,
        searchField: ''
      };
    }

    handleChange = e => {
      this.setState({searchField: e.target.value})
    }



render(){
  const {tools, searchField} = this.state;
  const filteredTools = tools.filter(tool => tool.name.toLowerCase()
  .includes(searchField.toLowerCase())
  
  )
  return(
    <div className='App'>
      <div className='heading'>
      <h1>The tools</h1></div>
      <SearchBox 
      placeholder = 'Search Tools by Name'
      handleChange = {this.handleChange}
      />
       <div>
      <CardList tools={filteredTools} />
      <Footer name='Ranjeet Singh' />
    </div>
      </div>
     
  )
}


}
export default App;
