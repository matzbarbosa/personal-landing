import Link from 'next/link';

import { InfiniteSlider } from '@/components/infinite-slider';
import { LogoIcon } from '@/components/logo';
import { Angular, Gemini } from '@/components/logos';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import CSS from './logos/CSS';
import Expo from './logos/Expo';
import Git from './logos/Git';
import HTML from './logos/HTML';
import Ionic from './logos/Ionic';
import JavaScript from './logos/JavaScript';
import Laravel from './logos/Laravel';
import MySQL from './logos/MySQL';
import Nextjs from './logos/Nextjs';
import NodeJs from './logos/NodeJs';
import OpenAI from './logos/OpenAI';
import PostgreSQL from './logos/PostgreSQL';
import Python from './logos/Python';
import React from './logos/React';
import TailwindCss from './logos/Tailwindcss';
import TypeScript from './logos/TypeScript';
import PHP from './logos/php';

export default function IntegrationsSection() {
  return (
    <section>
      <div className="bg-muted dark:bg-background py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
            <div
              role="presentation"
              className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
            ></div>
            <div>
              <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
                <IntegrationCard>
                  <HTML />
                </IntegrationCard>
                <IntegrationCard>
                  <CSS />
                </IntegrationCard>
                <IntegrationCard>
                  <JavaScript />
                </IntegrationCard>
                <IntegrationCard>
                  <TypeScript />
                </IntegrationCard>
                <IntegrationCard>
                  <PHP />
                </IntegrationCard>
                <IntegrationCard>
                  <Python />
                </IntegrationCard>
              </InfiniteSlider>
            </div>
            <div>
              <InfiniteSlider gap={24} speed={20} speedOnHover={10} reverse>
                <IntegrationCard>
                  <Angular />
                </IntegrationCard>
                <IntegrationCard>
                  <Expo />
                </IntegrationCard>
                <IntegrationCard>
                  <Ionic />
                </IntegrationCard>
                <IntegrationCard>
                  <Laravel />
                </IntegrationCard>
                <IntegrationCard>
                  <Nextjs />
                </IntegrationCard>
                <IntegrationCard>
                  <NodeJs />
                </IntegrationCard>
                <IntegrationCard>
                  <React />
                </IntegrationCard>
                <IntegrationCard>
                  <TailwindCss />
                </IntegrationCard>
              </InfiniteSlider>
            </div>
            <div>
              <InfiniteSlider gap={24} speed={20} speedOnHover={10}>
                <IntegrationCard>
                  <MySQL />
                </IntegrationCard>
                <IntegrationCard>
                  <PostgreSQL />
                </IntegrationCard>
                <IntegrationCard>
                  <Git />
                </IntegrationCard>
                <IntegrationCard>
                  <OpenAI />
                </IntegrationCard>
                <IntegrationCard>
                  <Gemini />
                </IntegrationCard>
                {/* <IntegrationCard>
                  <N8N />
                </IntegrationCard>
                <IntegrationCard>
                  <Figma />
                </IntegrationCard> */}
              </InfiniteSlider>
            </div>
            <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
              <IntegrationCard
                className="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
                isCenter={true}
              >
                <LogoIcon />
              </IntegrationCard>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Experience in a variety of tools
            </h2>
            <p className="text-muted-foreground">
              I have experience working with a wide range of tools and technologies, including
              popular frameworks and services.
            </p>

            <Button variant="outline" size="sm" asChild>
              <Link href="#">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | 'left-top'
    | 'left-middle'
    | 'left-bottom'
    | 'right-top'
    | 'right-middle'
    | 'right-bottom';
  isCenter?: boolean;
}) => {
  return (
    <div className={cn('bg-background relative z-20 flex size-12 rounded-full border', className)}>
      <div className={cn('m-auto size-fit *:size-5', isCenter && '*:size-8')}>{children}</div>
    </div>
  );
};
