import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { CreateNode } from './CreateNode';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { NodeSummaryTable } from './MyNodes';
import { Nodes } from './Nodes';
import { Overview } from './Overview';
import { Rewards } from './Rewards';
import { TotalNodesSummary } from './TotalNodeSummary';
import { TVLSummary } from './TVLSummary';

const Base = () => (
  <div className="antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <div className=" flex flex-col max-w-1000 mx-auto w-full mb-10rem">
      <Overview />

      <div className="flex flex-column flex-sm-row justify-center space-x-1rem pt-3rem">
        <div className="flex items-center p-10  space-x-2rem  info-card">
          <Nodes />
        </div>
        <div className="flex items-center p-10  space-x-2rem  info-card">
          <Rewards />
        </div>
        <div className="flex items-center p-10  space-x-2rem  info-card">
          <TotalNodesSummary />
        </div>
        <div className="flex items-center p-10  space-x-2rem  info-card">
          <TVLSummary />
        </div>
      </div>
    </div>

    <CreateNode />
    <NodeSummaryTable />
    <Footer />
  </div>
);

export { Base };
