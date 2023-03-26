import HeaderNav from './header-nav/header-nav';
import './header.scss';

const Header=(props)=>{
  return(
    <header className="header">
      <div className="container">
        <HeaderNav
        navLinks={props.navLinks}/>
      </div>
    </header>
  )
}
export default Header;