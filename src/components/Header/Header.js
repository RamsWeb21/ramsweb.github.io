import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
  <Div1>
    <Link href="/" style={{ display:'flex', alignItems:'center', color:'white', marginBottom: '20' }}>
        <DiCssdeck size="3rem" /> <Span>Rifqi Alwan Portfolio</Span>
    </Link>
  </Div1>
  <Div2>
    <li>     
        <NavLink href='#projects'>Projects</NavLink>
    </li>
    <li>
        <NavLink href='#tech'>Technologies</NavLink>
    </li>
    <li>
        <NavLink href='#about'>About</NavLink>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href='https://github.com/RamsWeb21https://github.com'>
      <AiFillGithub size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://instagram.com'>
      <AiFillInstagram size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/rifqi-alwan-72607a25a/tps://linkedin.com'>
      <AiFillLinkedin size='3rem'/>
    </SocialIcons>
  </Div3>
 </Container>
);

export default Header;
