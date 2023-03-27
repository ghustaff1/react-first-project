import Header from "../header/header";
import Entry from "../entry/entry";
import About from "../about/about";
import ProductsBest from "../products-best/products-best";
import Footer from "../footer/footer";
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
      },
      bestProductsData:[
        {imgSrc:'products-best-imgs/products-best-img-1.png', alt:'solimoCoffee', title:'Solimo Coffee Beans 2 kg', price:10.73},
        {imgSrc:'products-best-imgs/products-best-img-2.png', alt:'prestoCoffee', title:'Presto Coffee Beans 1 kg', price:15.99},
        {imgSrc:'products-best-imgs/products-best-img-3.png', alt:'arimisticoCoffee', title:'AROMISTICO Coffee 1 kg', price:6.99},
      ]
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
        <ProductsBest
        data={this.state.bestProductsData}/>
        <Footer
        navLinks={this.state.navLinks}/>
      </div>
    )
  }
}
export default App;