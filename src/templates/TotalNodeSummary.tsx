import { Section } from '../layout/Section';
import { TotalNodes } from '../usersummary/TotalNodes';

const TotalNodesSummary = () => (
  <Section>
    <TotalNodes nodetitle="Total Nodes" nodecount="3" />
  </Section>
);

export { TotalNodesSummary };
