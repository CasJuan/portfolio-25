import React from 'react'
import {Github, Linkedin, Mail, Code, Palette, Smartphone, ExternalLink} from 'lucide-react'

export const About = ({hasAnimated}) => {
    const features = [
        {
            icon: <Code className=' w-8 h-8 mb-4 text-black'/>,
            title: 'Clean Code',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae earum! Maiores sequi ratione corporis soluta aperiam nulla repellat harum, perferendis nemo ipsa reiciendis sed odit doloribus modi assumenda dolor."
        },
        {
            icon: <Palette className=' w-8 h-8 mb-4 text-black'/>,
            title: 'Ux UI',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae earum! Maiores sequi ratione corporis soluta aperiam nulla repellat harum, perferendis nemo ipsa reiciendis sed odit doloribus modi assumenda dolor."
        },
        {
            icon: <Smartphone className=' w-8 h-8 mb-4 text-black'/>,
            title: 'Responsive',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae earum! Maiores sequi ratione corporis soluta aperiam nulla repellat harum, perferendis nemo ipsa reiciendis sed odit doloribus modi assumenda dolor."
        },
        {
            icon: <ExternalLink className=' w-8 h-8 mb-4 text-black'/>,
            title: 'Perfomance',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae earum! Maiores sequi ratione corporis soluta aperiam nulla repellat harum, perferendis nemo ipsa reiciendis sed odit doloribus modi assumenda dolor."
        },
    ];


    return(
        <section id='about' className=' py-16 px-6 bg-gray-50'>
            <div className='max-w-6xl mx-auto'>
                <div className={`transition-all duration-1000 delay-200  ${hasAnimated.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className=' text-4xl font-bold mb-12 text-center'>
                        About
                    </h2>
                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                        <div></div>

                    </div>

                </div>

            </div>
        </section>
    )


 
}
