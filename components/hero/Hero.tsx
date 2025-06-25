import { cn } from '@/lib/utils';
import AnimatedGradientText from '../ui/animated-gradient-text';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative px-6 pb-44" style={{ contain: 'layout' }}>
      <div className="pt-48">
        <h1 className="h1-bold flex flex-col items-start md:items-center">
<span className="text-gray-100">Writing code</span>{' '}
<span className="text-gray-300">that works</span>{' '}
<span className="text-gray-500 italic">...eventually</span>



        </h1>
      </div>

      <div className="mt-12 flex flex-col-reverse gap-8 md:flex-row md:justify-center md:gap-20 lg:gap-32">
        <div className="flex w-fit flex-col items-start gap-4">
          <p className="font-Silkscreen font-normal uppercase text-gray-400 md:mt-8 md:text-2xl">
            Tamim.m · software Developer
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/motamim/"
              target="_blank"
            >
              <AnimatedGradientText className="rounded-full px-5 py-2 text-lg hover:cursor-pointer">
                🤝 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-400" />{' '}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                  )}
                >
Let’s build. Or break. Or both.

                </span>
              </AnimatedGradientText>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:flex-col">
          <p className="font-Silkscreen font-normal uppercase text-gray-400">
            Building...
          </p>
          <p className="w-fit rounded-md bg-celtic px-2 font-Silkscreen text-[18px] font-normal uppercase">
            <span className="text-oceangreen">Well designed</span>
          </p>
          <p className="w-fit rounded-md bg-downriver px-2 font-Silkscreen text-[18px] font-normal uppercase">
            <span className="text-dodgerblue">well architected</span>
          </p>
          <p className="w-fit rounded-md bg-antiquebronze px-2 font-Silkscreen text-[18px] font-normal uppercase">
            <span className="text-foreground">and scalable</span>
          </p>
          <p className="w-fit rounded-md bg-revolver px-2 font-Silkscreen text-[18px] font-normal uppercase">
            <span className="text-violet-400/85">web apps</span>
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute top-0 -z-20 size-full overflow-hidden opacity-50 [mask-image:radial-gradient(900px_circle_at_top,#000,transparent)]">
        <AnimatedGridPattern
          numSquares={120}
          maxOpacity={0.2}
          duration={5}
          repeatDelay={1}
          colors={[
            'rgba(60, 177, 121, 1)',
            'rgba(157, 91, 210, 1)',
            'rgba(205, 43, 49, 1)',
            'rgba(189, 75, 0, 1)',
            'rgba(247, 206, 0, 1)',
            'rgba(250, 147, 78, 1)',
            'rgba(54, 158, 255, 1)',
          ]}
          className="inset-x-[4.5px] inset-y-[-30%] h-[150%]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(#000_50%,transparent)]">
        <div className="grid-pattern pointer-events-none absolute inset-0" />
      </div>
    </section>
  );
};
export default Hero;
