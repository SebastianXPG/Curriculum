import "../components/Header.css"; // Importa el archivo CSS
import Logo from '../assets/img/Logo.png'; // Importa la imagen

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Logo" className='logo' />
            <h1 className="header-title">Juan Sebastian Usuga Velez</h1>
        </div>
    );
}

export default Header;