import { Circle, Scale } from 'lucide-react'

export interface taskCardProps {
  name: string
  subtitle: string
  description: string
  domain: 'Tech' | 'Design' | 'Management' | 'Video'
  deadline: Date
  isCompleted?: boolean
}

const domainColor = {
  Tech: '#3572A5',
  Design: '#A9B520',
  Management: '#69',
  Video: '#A63DAF',
}

export default function TaskCard({
  name,
  subtitle,
  description,
  domain,
  deadline,
  isCompleted = false,
}: taskCardProps) {
  return (
    <article className="border-b-2 border-[#30363D] flex flex-row sm:gap-3 md:gap-6  justify-between items-center pt-6 pb-2">
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="font-semibold text-[#58A6FF] text-lg sm:text-xl ">
            {name}
          </h3>
          <span className="text-[#8B949E] text-xs sm:text-sm font-light">
            {subtitle}
          </span>
        </div>

        <p className="text-sm sm:text-base">{description}</p>

        <div className="flex flex-row gap-4 text-[#8B949E] font-normal sm:text-base text-xs">
          <p className="flex flex-row gap-1 sm:gap-2 items-center ">
            <Circle
              color=""
              fill={domainColor[domain]}
              className="w-3 sm:w-5"
            />
            <span className="h-fit">{domain}</span>
          </p>
          <p className="flex flex-row gap-1 sm:gap-2 items-center">
            <Scale className="w-3 sm:w-5" />
            <span>DeadLine: {deadline.toLocaleDateString('en-IN')}</span>
          </p>
        </div>
      </div>

      <button
        className={`border-2 border-[#30363D] h-fit rounded-full 
    px-2 text-xs sm:px-4 sm:py-1 sm:text-base 
    w-full sm:w-auto ${isCompleted && 'bg-[#2da641]'}`}
      >
        {isCompleted ? 'Completed' : 'Pending'}
      </button>
    </article>
  )
}
