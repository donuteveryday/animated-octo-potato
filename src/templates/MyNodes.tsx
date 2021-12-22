import { Section } from '../layout/Section';
import { MyNodesTable } from '../usersummary/Table';

const NodeSummaryTable = () => (
  <Section>
    <MyNodesTable
      date="Date"
      name="Name"
      value="Value"
      pendingrewards="Pending Rewards"
    />
  </Section>
);

export { NodeSummaryTable };
