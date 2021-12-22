import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background>
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button className="btn btn-ghost">Buy $N3</button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Button>Connect Wallet</Button>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Hero };
