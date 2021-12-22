import { ReactNode } from 'react';

type ICTNodeFormProps = {
  nodename: string;
  amountOfTokens: string;
  button?: ReactNode;
};

const Nodeform = (props: ICTNodeFormProps) => (
  <div className="flex items-center justify-evenly">
    <header className="-mb-8">
      <h1 className="text-2xl font-bold whitespace-pre-line leading-hero">
        Create Node
      </h1>
    </header>
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.nodename}</span>
      </label>
      <input
        type="text"
        placeholder="Node Name"
        className="input input-bordered"
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.amountOfTokens}</span>
      </label>
      <input
        type="text"
        placeholder="Amount of Tokens"
        className="input input-bordered"
      />
    </div>
    <div className="py-3 whitespace-no-wrap  -mb-9">{props.button}</div>
  </div>
);

export { Nodeform };
