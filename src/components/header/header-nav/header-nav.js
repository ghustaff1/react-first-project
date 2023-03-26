import HeaderNavItem from './header-nav-item/header-nav-item';
import seedPng from './img/header-nav-seed.png';
import './header-nav.scss';

const HeaderNav=(props)=>{

  const links=props.navLinks.map((link, i)=>{
    const id=link;
    const seed=(
    <div className="header-nav-seed">
        <a href="#">
          <img src={seedPng} alt="seed" />
        </a>
    </div>
    );
    return(
      <HeaderNavItem
      seed={i===0?seed:null}
      key={id}
      link={link}
      />
    )
  })
  return(
    <nav className="app-header-nav">
      {links}
    </nav>
  )
}
export default HeaderNav;