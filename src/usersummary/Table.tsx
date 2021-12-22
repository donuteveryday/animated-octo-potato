import { Button } from '../button/Button';

type ICTATableProps = {
  date: string;
  name: string;
  value: string;
  pendingrewards: string;
};

const MyNodesTable = (props: ICTATableProps) => (
  <div className="overflow-x-auto">
    <header>
      <h1 className="text-2xl font-bold whitespace-pre-line leading-hero">
        Current Nodes
      </h1>
      <br></br>
    </header>
    <table className="table w-full">
      <thead>
        <tr>
          <th>{props.date}</th>
          <th>{props.name}</th>
          <th>{props.value}</th>
          <th>{props.pendingrewards}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>12/12/2021</td>
          <td>Test</td>
          <td>$1000</td>
          <td>$3903</td>
          <td>
            <Button>Claim</Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export { MyNodesTable };
