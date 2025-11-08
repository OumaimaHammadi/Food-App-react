
import './Footer.css'
import instagram_icon from '../Assets/images/instagram_icon.png'
import pinterest_icon from '../Assets/images/pinterest_icon.png'
import whatsapp_icon from '../Assets/images/whatsapp_icon.png'
import logo from '../Assets/images/logo_3.jpg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <img src={logo} alt=""  className='footer-icon'/> 



        </div>
        <ul className='footer-links'>
            <li>Compay</li>
            <li>Dishes</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
               
            </div>

            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" />
               
            </div>

            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
               
            </div>
            </div>


            <div className="footer-copyright">
                <hr />
                <p>Copyright @2025-All Right Reserved.</p>
            </div>
    </div>
  )
}

export default Footer