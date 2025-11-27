import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { projectHeadLine, projectIntro, projects } from '@/config/infoConfig'
import { activities } from '@/config/projects'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: projectHeadLine,
}

export default function Projects() {
  return (
    <SimpleLayout
      title={projectHeadLine}
      intro={projectIntro}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 pb-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-gradient-to-r from-transparent via-muted to-transparent">
          <h2 className="flex flex-row items-center justify-start gap-3 text-xl font-semibold tracking-tight md:text-3xl opacity-90 mb-4 group">
            <Calendar size={28} className="text-primary group-hover:scale-110 transition-transform duration-300"/>
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Hobbies & Volunteer</span>
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {activities.map((activity) => (
              <ActivityCard key={activity.name} activity={activity} titleAs='h3'/>
            ))}
          </ul>
        </div>
    </SimpleLayout>
  )
}
