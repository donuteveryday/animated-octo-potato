import { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button?: ReactNode;
};

const MyRewards = (props: ICTABannerProps) => (
  <div className="flex flex-col  sm:text-center sm:flex-row  justify-evenly ">
    <div className="text-2xl font-semibold">
      <div>{props.title}</div>
      <div>{props.subtitle}</div>
      <div className="-mb-11">{props.button}</div>
    </div>
  </div>
);

export { MyRewards };
