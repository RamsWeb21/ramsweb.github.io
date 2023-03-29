import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Message</LinkTitle>
          <LinkItem href='+6282221313338'>(+62)82221313338</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='ramsweb31@gmail.com'>ramsweb31@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialIcons href='https://github.com/RamsWeb21'>
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/rifqi-alwan-72607a25a/'>
          <AiFillLinkedin />
        </SocialIcons>
        <SocialIcons href='https://github.com/RamsWeb21'>
          <AiFillGithub />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
