import { Component } from "react";
import './header-nav-item.scss'
class HeaderNavItem extends Component{
  constructor(props){
    super();
  }

  render(){
    const clazz=this.props.color==='white'?'header-nav-link white':'header-nav-link black';
    return(
      <li style={{position:this.props.position}} className="header-nav-item">
        {this.props.seed}
        <a className={clazz} href="#">{this.props.link}</a>
      </li>
    )
  }
}
export default HeaderNavItem;