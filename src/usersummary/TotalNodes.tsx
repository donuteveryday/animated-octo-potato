type ICTATotalNodesProps = {
  nodetitle: string;
  nodecount: string;
};

const TotalNodes = (props: ICTATotalNodesProps) => (
  <div className="flex flex-col sm:text-left sm:flex-row justify-evenly">
    <div className="text-2xl font-semibold text-center">
      <div>{props.nodetitle}</div>
      <div>{props.nodecount}</div>
    </div>
  </div>
);

export { TotalNodes };
