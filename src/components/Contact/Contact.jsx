import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='full-contact-me-section'>
      <h1 className='contact-me-section-heading'>Contact</h1>
      <h2 className='contact-me-section-heading-2'>Don't be shy! Hit me up! 👇</h2>
      <div className='contact-card-bg'>
        <div className="contactcard">
            <div>
                <img src="https://muhammadzuhaib.vercel.app/assets/map-78db43e9.png"/>
            </div>
            <div>
                <h3>Location</h3>
                <span>Karachi, Pakistan.</span>
            </div>
        </div>
        
        <div className="contactcard">
            <div>
                <img src="https://muhammadzuhaib.vercel.app/assets/mail-244cd395.png"/>
            </div>
            <div>
                <h3>Mail</h3>
                <span>rh07386421@gmail.com</span>
            </div>
        </div>
        
        <div className="contactcard">
            <div>
                <img src="https://muhammadzuhaib.vercel.app/assets/whatsapp-92dbd961.png"/>
            </div>
            <div>
                <h3>WhatsApp</h3>
                <span>0315 5939808</span>
            </div>
        </div>
        
        <div className="contactcard">
            <div>
                <img src="https://muhammadzuhaib.vercel.app/assets/linkedIn-39adcf08.png"/>
            </div>
            <div>
                <h3>LinkedIn</h3>
                <span>Not Available</span>
            </div>
        </div>
        
        <div className="contactcard">
            <div>
                <img src="https://muhammadzuhaib.vercel.app/assets/facebook-d640fc25.png"/>
            </div>
            <div>
                <h3>Facebook</h3>
                <span>Not Your Raza</span>
            </div>
        </div>
        
        <div className="contactcard">
            <div>
                <img src="https://muhammadzuhaib.vercel.app/assets/Instagram_logo_2016.svg-76ee701b.webp"/>
            </div>
            <div>
                <h3>Instagram</h3>
                <span>Not Your Raza</span>
            </div>
        </div>
        

      </div>
    </div>
  )
}

export default Contact
