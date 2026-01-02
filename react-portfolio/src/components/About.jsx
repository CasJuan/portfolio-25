import React from 'react'
import { Github, Linkedin, Mail, Code, Palette, Smartphone, ExternalLink } from 'lucide-react'

export const About = ({ hasAnimated }) => {
    const features = [
        {
            icon: <Code className=' w-8 h-8 mb-4 text-black' />,
            title: 'Analista de Sistemas',
            description: "Formación orientada a los fundamentos de la programación, bases de datos y análisis de sistemas. Durante el recorrido adquirí una base sólida en lógica, resolución de problemas y comprensión integral del desarrollo de software."
        },
        {
            icon: <Palette className=' w-8 h-8 mb-4 text-black' />,
            title: 'Licenciatura Tecnologias Digitales',
            description: "Carrera enfocada en el uso de tecnologías digitales y el desarrollo de soluciones tecnológicas. Actualmente profundizo conocimientos técnicos y conceptuales, con una mirada integral sobre innovación, desarrollo y transformación digital."
        }
    ];


    return (
        <section id='about' className=' py-16 px-6 bg-gray-50'>
            <div className='max-w-6xl mx-auto'>
                <div className={`transition-all duration-1000 delay-200  ${hasAnimated.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className=' text-4xl font-bold mb-12 text-center'>
                        Sobre mì
                    </h2>
                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                        <div className=' flex flex-col justify-center items-center'>
                            <p className=' text-lg text-gray-700 mb-6'>Soy desarrollador Frontend enfocado en crear interfaces claras y funcionales. Trabajo con Vue.js y Tailwind CSS en proyectos reales de producto.</p>
                            <p className=' text-lg text-gray-700 mb-6'>Soy Analista de Sistemas y actualmente curso la Licenciatura en Tecnologías Digitales, con foco en el aprendizaje continuo y el crecimiento profesional.</p>
                            <div className="flex space-x-4">
                                <a href=''><Github className=' w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors' /></a>
                                <a href="https://www.linkedin.com/in/juan-ignaciocastro/" target='_blank'><Linkedin className=' w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors' /></a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className=' bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
                                    {feature.icon}
                                    <h3 className=' font-semibold mb-2'>
                                        {feature.title}
                                    </h3>
                                    <p className=" text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )



}
