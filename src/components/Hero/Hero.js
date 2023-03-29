import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
       Courteous and enthusiastic, I am interested in IT and everything in its orbit.
      </SectionText>
      <Button onClick={() => window.location = 'https://guthub.com' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;