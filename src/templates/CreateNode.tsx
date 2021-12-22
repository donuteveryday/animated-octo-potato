// import Link from 'next/link';

import Link from 'next/link';

import { Button } from '../button/Button';
import { Nodeform } from '../Form/Nodeform';
import { Section } from '../layout/Section';

const CreateNode = () => (
  <Section>
    <Nodeform
      nodename="Node Name"
      amountOfTokens="Amount of Tokens"
      button={
        <Link href="">
          <a>
            <Button>Create</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { CreateNode };
