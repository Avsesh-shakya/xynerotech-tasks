import React from 'react'
import './Home.css'
import logo from "../assets/RTF-logo.png";
import couplecar from "../assets/young-couple-car.jpg";
import fatherworking from "../assets/father-working-with-laptop.png";
import portraitfamily from "../assets/portrait-family.jpg";
import companylogo1 from "../assets/logo-1.png";
import companylogo2 from "../assets/ztt-logo-1024x540-2.png";
import companylogo3 from "../assets/15188-3.jpg";
import companylogo4 from "../assets/affinidi-5.png";
import companylogo5 from "../assets/tmc-7.jpg";
import companylogo6 from "../assets/sumsung-8.png";
import familygup from "../assets/family-gup.png";
import happycouple from "../assets/happy-couple.jpg";
import maleword from "../assets/male-work.jpg";
import group from "../assets/grp.png";
import doc from "../assets/doc.png";
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import icon5main from "../assets/icon5main.png"
import linkedin from '../assets/linkedin.png'
import playStore from '../assets/playstore.png'
import appleStore from '../assets/apple.png'


const Home = () => {
  return (
    <div>
      <header className='header'>
        <div className="left-icon">
          <ul>
            <li><i className="fa-solid fa-phone" style={{ "color": "#F1831B" }}></i>+(111)99_454_234</li>
            <li><i className="fa-solid fa-envelope" style={{ "color": "#F1831B" }}></i>rtsinsurence@gmail.com</li>
            <li><i className="fa-solid fa-location-dot" style={{ "color": "#F1831B" }}></i>New Word city us</li>

            <div className='right'>

              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </ul>
        </div>
      </header>
      <nav className='navbar'>
        <div className="navbar-logo">
          <img src={logo} alt="Webside logo" />
        </div>
        <div className="navbar-item">
          <ul>
            <li className="list-item">Home</li>
            <li className="list-item">Services</li>
            <li className="list-item">Elements</li>
            <li className="list-item">Contact</li>
          </ul>

        </div>
        <div className="navbar-button">
          <button className="login-button ">Login</button>
          <button className="Quote-button ">Geta Quote</button>
        </div>
      </nav>

      {/* Home- section */}
      <section className='home-section'>
        <div className="left-content">
          <h1>Your Trusted</h1>
          <h2>Insurance </h2>
          <h2>Partner</h2>
          <p>Making insurance accessible, valuable, Your protection is our <span>life commitment</span></p>
          <button>Explore products<i className="fa-solid fa-arrow-right-long"></i></button>
          <button>Learn more <i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
        <div className="right-content">
          <div className="image-box"><button>Health Insurence</button><img src={couplecar} alt="" /></div>
          <div className="image-box"><img src={portraitfamily} alt="" /><button>Motor Insurence</button></div>
          <div className="image-box"><button>Home Insurence</button><img src={fatherworking} alt="" /></div>

        </div>
      </section>


      <div className="trasted-company">
        <div className="heading">
          <h1>Trusted by Leading Companies</h1>
        </div>
        <div className="company-icon">
          <img src={companylogo1} alt="" />
          <img src={companylogo2} alt="" />
          <img src={companylogo3} alt="" />
          <img src={companylogo4} alt="" />
          <img src={companylogo5} alt="" />
          <img src={companylogo6} alt="" />

        </div>
      </div>

      <div className="insurence-product">
        <div className="top-button">
          <button>Our Service</button>
        </div>
        <div className="insurence-heading">
          <h1>Insurence Products</h1>
          <p>Comprehensive insurance solutions tailored to your individual and business</p>
          <p>needs with industry-leading coverage and competitive rates</p>
        </div>
        <div className="products-cards-top">
          <div className="main-card-img">
            <img src={familygup} alt="" />
          </div>
          <div className="card-buttom-image">
            <img src={group} alt="" />
            <h2>Health Insurence</h2>
            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit sed do.</p>
            <button>Learn More<i className="fa-solid fa-arrow-right-long"></i> </button>
          </div>
        </div>
        <div className="products-cards-top">
          <div className="main-card-img">
            <img src={happycouple} alt="" />
          </div>
          <div className="card-buttom-image">
            <img src={group} alt="" />
            <h2>Health Insurence</h2>
            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit sed do.</p>
            <button>Learn More<i className="fa-solid fa-arrow-right-long"></i> </button>
          </div>
        </div>
        <div className="products-cards-top">
          <div className="main-card-img">
            <img src={maleword} alt="" />
          </div>
          <div className="card-buttom-image">
            <img src={doc} alt="" />
            <h2>Health Insurence</h2>
            <p>Lorem ipsum dolor sit amet, consecte adipisicing elit sed do.</p>
            <button>Learn More<i className="fa-solid fa-arrow-right-long"></i> </button>
          </div>
        </div>

      </div>

      <div className="insurence-service-section">
        <div className="main-card">
          <div className="heading">
            <h1>Why Choose RTF</h1>
            <h1>Isurence ?</h1>
          </div>
          <div className="card-points">
            <h5>Expert Guidance</h5>
            <p>Our certified professionals provide personalized advice tailored to your unique needs.</p>
          </div>
          <div className="card-points">
            <h5>24/7 Support</h5>
            <p>Round-the-clock assistance when you need it most, because emergencies don't wait.</p>
          </div>
          <div className="card-points">
            <h5>Trusted Partners</h5>
            <p>We work with A-rated insurance companies to ensure your claims are paid promptly.</p>
          </div>
          <div className="card-points">
            <h5>Simplified Process</h5>
            <p>From quotes to claims, we've streamlined everything to save you time and hassle.</p>
          </div>
        </div>
        <div className=" child-card  ">
          {/* icon  */}
          <div className="child-heading">
            <h5>Your Protection, Our Promise</h5>
            <p>Dedicated to Safeguarding whatmatters most to you</p>
          </div>
        </div>
      </div>
      {/* Analyst-section  */}
      <div className="data-analyst">
        <div className="data-analyst-heading">
          <h1>Glimpses of our -</h1>
          <div className="buttons">
            <button>E.B Portal</button>
            <button>Employee App</button>
          </div>
        </div>
        <div className="data-analyst-left-side-icons">
          <div className="icon"><img src={icon1} alt="" />Hr Dashboard </div>
          <div className="icon"><img src={icon2} alt="" />Claim List </div>
          <div className="icon"><img src={icon3} alt="" />Policy List </div>
          <div className="icon"><img src={icon4} alt="" />Monthly Reporting </div>
        </div>
        <div className="data-analyst-right-side-content">
          <img src={icon5main} alt="" />
        </div>
      </div>

      {/* contact  */}

      <div className="contact-section">
        <div className="contact-heading">
          <h1>Ready to Get Protected?</h1>
          <p>Take the first step towards securing your future. Get a personalized </p>
          <p>insurance quote in just minutes and discover how affordable protection can be
          </p>
        </div>
        <div className="contact-button">
          <button className='contact-btn1'>Get Free Quote <i className="fa-solid fa-arrow-right-long"></i></button>
          <button className='contact-btn2'>+1(555) 123-4567</button>
        </div>
        <div className="contact-icons">
          <div className="contact-icon"><i className="fa-solid fa-phone  " style={{ 'color': '#F39209', 'border': '1px solid #F39209' }}></i>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567</p>
            <p>Available 24/7 for emergencies</p>
          </div>
          <div className="contact-icon"><i className="fa-solid fa-envelope " style={{ 'color': '#59CD3A', 'border': '1px solid #59CD3A' }}></i>
            <h3>Email US</h3>
            <p>info@rtfinsurance.com</p>
            <p>We’ll respond within 24 hours</p>
          </div>
          <div className="contact-icon"><i className="fa-solid fa-location-dot" style={{ 'color': '#F39209', 'border': '1px solid #F39209' }}></i>
            <h3>Visit Us </h3>
            <p>123 Insurance Ave ,SUIT </p>
            <p>Monday - Friday, 9AM - 6PM</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <img src={logo} alt="RTF Logo" />
            <div className="social-icons">
              <i class="fa-brands fa-square-instagram" ></i>
              <i class="fa-brands fa-facebook" style={{ 'color': '#1877F2' }}></i>
              <img src={linkedin} alt="linkedin" />
            </div>
          </div>

          <div className="footer-columns">
            <div>
              <h4>Learn More</h4>
              <ul>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Blogs</li>
                <li>Careers</li>
                <li>Privacy & Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            <div>
              <h4>RTF Care Products</h4>
              <ul>
                <li>Health Insurance</li>
                <li>Home & Digital Care</li>
                <li>Motor Insurance</li>
                <li>Travel Insurance</li>
                <li>Opd & Wellness</li>
              </ul>
            </div>

            <div>
              <h4>RTF Business</h4>
              <ul>
                <li>S.E.M. Insurance</li>
                <li>Employee Benefit Insurance</li>
                <li>Office Package Insurance</li>
                <li>Liability Insurance</li>
                <li>Engineering Insurance</li>
              </ul>
            </div>

            <div className="footer-apps">
              <h4>App for Employees</h4>
              <div className="footer-apps-img">
                <img src={playStore} alt="Google Play" />
                <div>
                <h6>GET IN ON</h6>
                <h5>Google Play</h5>
                </div>
              </div>
              <div className="footer-apps-img">
                <img src={appleStore} alt="Apple Store" />
                <div>
                <h6>Download on the</h6>
                <h5>App Store</h5>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 RTF Insurance Brokers Pvt Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </footer>


    </div>

  )


}

export default Home
