type ICTATVLProps = {
  tvltitle: string;
  tvl: string;
};

const TVL = (props: ICTATVLProps) => (
  <div className="flex flex-col sm:text-left sm:flex-row justify-evenly">
    <div className="text-2xl font-semibold text-center">
      <div>{props.tvltitle}</div>
      <div>{props.tvl}</div>
    </div>
  </div>
);

export { TVL };
