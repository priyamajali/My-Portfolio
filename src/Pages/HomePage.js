import React from 'react'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Priya Majali.</span>
                </h1>
                <p className="h-sub-text">
                    I'm pursuing Computer Science and Engineering at KLETU. 
                    I am currently in third year. I wish to pursue a career in  
                    software Development and looking opportunities for the same. 
                   
                </p>
                <div className="icons">
                    <Link to={{ pathname: "https://www.linkedin.com/in/priya-majali-8876ba153/" }}  target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </Link>
                    <Link to={{ pathname: "https://github.com/priyamajali/" }}  target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                   
                </div>
            </header>
        </div>
    )
}

export default HomePage;