import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialIcons, SocialIconLinks, SocialMediaWrap, SocialLogo, SocialMedia, WebsiteRights } from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/">
                                Vote
                            </SocialLogo>
                            <WebsiteRights>
                                Vote ©️ {new Date().getFullYear()} All rights reserved
                            </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLinks href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLinks>
                                <SocialIconLinks href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLinks>
                                <SocialIconLinks href="/" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLinks>
                                <SocialIconLinks href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLinks>
                                <SocialIconLinks href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLinks>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
