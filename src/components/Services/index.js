import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServiceElements';
import Icon1 from '../../images/blue_vote.jpg'
import Icon2 from '../../images/blueshirt.png'
import Icon3 from '../../images/spread.png'

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Fight Voter Suppression</ServicesH2>
                        <ServicesP>Voting rights are under attack nationwide as states pass voter suppression laws</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Register</ServicesH2>
                        <ServicesP>Fill out your voter's registration card online or in person</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Spread The Word</ServicesH2>
                        <ServicesP>Exercise your fundamental right to cast a ballot</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer> 
        </>
    )
}

export default Services
