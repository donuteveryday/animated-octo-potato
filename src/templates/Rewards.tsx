import Link from 'next/link';

import { Button } from '../button/Button';
import { MyRewards } from '../cta/MyRewards';
import { Section } from '../layout/Section';

const Rewards = () => (
  <Section>
    <MyRewards
      title="My Rewards"
      subtitle="$0"
      button={
        <Link href="">
          <a>
            <Button>Claim All</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Rewards };
