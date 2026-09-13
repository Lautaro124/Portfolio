import { FC, ReactNode } from 'react'

type Props = {
  id: string
  title: string
  intro?: ReactNode
}

const SectionHeading: FC<Props> = ({ id, title, intro }) => (
  <div className="pb-10">
    <h2
      id={`${id}-title`}
      className="inline border-b-4 border-cyan-400 pb-2 text-3xl font-bold sm:text-4xl"
    >
      {title}
    </h2>
    {intro && <p className="max-w-2xl pt-6 text-gray-300">{intro}</p>}
  </div>
)

export default SectionHeading
