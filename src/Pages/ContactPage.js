import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5776869722918!2d74.50595621468081!3d15.826206789031412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf668774bb3c21%3A0x355c7a3672e005a!2sSixth%20Cross%20Rd%2C%20Krish%20Colony%2C%20Angol%2C%20Belgaum%2C%20Karnataka%20590006!5e0!3m2!1sen!2sin!4v1622950276159!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 9449326099'}  title={'Phone'}/>
                    <ContactItem icon={email} text1={'priyamajali@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Karnataka,  Belgaum'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;