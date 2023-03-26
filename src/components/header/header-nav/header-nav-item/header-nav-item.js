import { Component } from "react";
import './header-nav-item.scss'
class HeaderNavItem extends Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <li className="header-nav-item">
        {this.props.seed}
        <a href="#">{this.props.link}</a>
      </li>
    )
  }
}
export default HeaderNavItem;