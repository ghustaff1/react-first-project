import Header from "../header/header";
import Entry from "../entry/entry";
import About from "../about/about";
import { Component } from "react";
import './app.scss';

class App extends Component{
  constructor(props){
    super();
    this.state={
      navLinks:["Coffe house", "Our coffee", "For your pleasure"],
      entry:{
        entryTitle:'Everything You Love About Coffee',
        entrySubtitle:'We makes every day full of energy and taste Want to try our beans?'
      }
    }
  }

  render(){
    return(
      <div className="app">
        <Header
        navLinks={this.state.navLinks}/>
        <Entry
        EntryTitle={this.state.entry.entryTitle}
        EntrySubtitle={this.state.entry.entrySubtitle}/>
        <About/>
      </div>
    )
  }
}
export default App;