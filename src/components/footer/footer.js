import './footer.scss';
import HeaderNav from '../header/header-nav/header-nav';

const Footer=(props)=>{
    return (
     <div className="footer">
      <div className="container">
      <HeaderNav
      navLinks={props.navLinks}
      color='black'/>
      </div>
     </div>
    )
}
export default Footer;