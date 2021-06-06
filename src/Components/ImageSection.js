import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
           
            <div className="about-info">
                <h4>I am<span> Priya Majali</span></h4>
                <p className="about-text">
                    I'm pursuing Computer Science and Engineering at KLETU. 
                    I am currently in third year. I wish to pursue a career in  
                    software Development and looking opportunities for the same. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Priya Majali</p>
                        <p>: 21</p>
                        <p>: Indian</p>
                        <p>: English, Kannada, Hindi, Marathi</p>
                        <p>: Belgaum, Karnataka</p>
                        <p>: India</p>
                    </div>
                </div>
                
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;