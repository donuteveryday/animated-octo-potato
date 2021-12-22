type ICTAOverallProps = {
  tvltitle: string;
  tvl: string;
};

const Overall = (props: ICTAOverallProps) => (
  <div className="flex flex-col sm:text-left sm:flex-row justify-evenly">
    <div className="text-xl font-semibold text-center">
      <div>{props.tvltitle}</div>
      <div>{props.tvl}</div>
    </div>
  </div>
);

export { Overall };
