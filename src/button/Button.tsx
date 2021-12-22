import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-sm': true,
    'btn-primary': true,
  });

  return <div className={btnClass}>{props.children}</div>;
};

export { Button };
