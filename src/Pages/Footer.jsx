import { useContext } from "react";
import { AuthContext } from "../Provider/Context";
import './Css/footer.css'


const Footer = () => {

    const {isDarkMode} = useContext(AuthContext);

    return (
      <div className={isDarkMode ? 'background-dark' : 'background'}>
       <div className="mt-16">
       <footer className=" footer p-10 justify-between  max-w-7xl mx-auto">
            <aside>
               <img className="w-20 h-20 rounded-full" src="https://i.ibb.co/9tMryJ6/1.png" alt="" />
                <p>Career Compass Ltd.<br/>Providing best job opportunities since 2019</p>
            </aside> 
            <nav>
                <h6 className="footer-title">Services</h6> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
      </footer>
       </div>
      </div>
    );
};

export default Footer;