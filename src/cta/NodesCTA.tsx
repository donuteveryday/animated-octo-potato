import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button?: ReactNode;
};

const NodesCTA = (props: ICTABannerProps) => (
  <div className="flex flex-col sm:text-left sm:flex-row justify-evenly">
    <div className="text-2xl font-semibold text-center">
      <div>{props.title}</div>
      <div>{props.subtitle}</div>
    </div>
  </div>
);

export { NodesCTA };
