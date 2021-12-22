import { Section } from '../layout/Section';
import { TVL } from '../usersummary/TVL';

const TVLSummary = () => (
  <Section>
    <TVL tvltitle="TVL" tvl="$3" />
  </Section>
);

export { TVLSummary };
