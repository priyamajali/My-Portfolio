import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage(){
    return ( 
    <div>
        <Tittle title={'About Me'} span={'About Me'} />
        <ImageSection />
        <Tittle title={'My Skills'} span={'My Skills'} />
        <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'MEAN STACK'} progress={'60%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Django'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'C++'} progress={'90%'} width={'40%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'90%'} width={'25%'} />
                <SkillsSection skill={'Algorithms'} progress={'70%'} width={'76%'} />
            </div>

            <Tittle title={'Testimonials'} span={'Testimonials'} />
            <div className="servives-container">
                <ServicesSection title={'Pooja'} 
                text={'"Great Experience...."'}
                />
                <ServicesSection title={'Xyz'} 
                text={'"Something good..."'}
                />
                <ServicesSection title={'abc'} 
                text={'"Great Experience...."'}
                />

                
            </div>
    </div>
    )
}

export default AboutPage;