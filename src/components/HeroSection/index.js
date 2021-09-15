import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements'
import { Button } from '../ButtonElement';
import Video from '../videos/video.mp4';

const HeroSection = () => {
    return (
        <>
            <HeroContainer id="home">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Register to Vote</HeroH1>
                    <HeroP>
                    Fighting Voter Suppression
                </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" primary="true" dark="true" exact='true' spy={true} smooth={true} offset={-80} duration={500}>Register Now</Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer> 
        </>
    )
}

export default HeroSection
