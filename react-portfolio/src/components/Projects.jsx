import React from 'react'
import {projects} from '../data/projects'
import { ProjectsCards } from './ProjectsCards'

export const Projects = ({hasAnimated}) => {
  return (
    <section id='projects' className=' py-16 px-6'>
        <div className=' max-w-6xl mx-auto'>
            <div className={`transition-all duration-1000 delay-300 ${hasAnimated.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className=' text-4xl font-bold mb-12 text-center'>Proyectos</h2>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <h3 className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">En Proceso ...</h3>
                        </div>
                    ) : (
                        projects.map((project, index) => (
                            <ProjectsCards key={index} project={project}/>
                        ))
                    )}
                </div>
            </div>

        </div>

    </section>
  )
}
