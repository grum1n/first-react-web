import './App.css';
import Logo from './Logo';
import TopNav from './TopNav';

function Header() {
  return (
    <header class="site-header" id="dark-header">
        <div class="container flex-container">
            <Logo />
            <TopNav />
            <div id="menu" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="#contacts-map">Contacts</a>
            </div>
            <div class="menu-button">
                <a href="javascript:void(0)" onclick="openNav()"><i class="fa fa-bars"></i></a>
            </div>
        </div>
    </header>
    
  );
}

export default Header;