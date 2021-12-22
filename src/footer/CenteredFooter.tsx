import { ReactNode } from 'react';

type ICenteredFooterProps = {
  logo?: ReactNode;
  iconList?: ReactNode;
  children?: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.children}
    <nav>
      <ul className="navbar mt-5 flex flex-row justify-center font-medium text-xl "></ul>
    </nav>

    <div className="mt-8 text-sm"></div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
