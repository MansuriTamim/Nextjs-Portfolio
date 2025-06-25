import { slugs, techs } from '@/constants/skills';
import DotPattern from '../ui/dot-pattern';
import IconCloud from '../ui/icon-cloud';
import TechTag from './TechTag';

const Techs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-12">
      <div className="relative">
        <div className="flex flex-col items-center justify-center gap-8 rounded-lg bg-none ">
       
          <div className="flex flex-wrap gap-x-3 gap-y-2 md:max-w-[600px] md:items-center md:justify-center ">
            {techs.map((tech) => (
              <TechTag
                key={tech.label}
                title={tech.label}
                gradientColor={tech.bgColor}
              />
            ))}
          </div>

          <div>
          </div>
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern bottom-0 border  opacity-50"
      />
    </section>
  );
};
export default Techs;
