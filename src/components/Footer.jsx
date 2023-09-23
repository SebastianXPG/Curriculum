import "../components/Footer.css"; // Importa el archivo CSS



function Footer(){
    return(
        <div className="footer">
            <ul className="footer-list">
                <li><a href="https://api.whatsapp.com/send?phone=573147398347 " target="blank">WhatsApp</a></li>
                <li><a href="https://github.com/SebastianXPG" target="blank">GitHub</a></li>
                <li><a href="mailto:juanusugas18@gmail.com" target="blank">Email</a></li>
            </ul>
        </div>
    );
}
export default Footer;

