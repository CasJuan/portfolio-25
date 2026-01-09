import resume from './JuanCastro-CV.pdf'

export const meData = {
    saludos: "👋 Hola, me llamo",
    nombre: "Juan Castro",
    roles: [
        "Frontend Developer"
    ],
    descripcion:"Soy desarrollador Frontend enfocado en crear interfaces web claras, funcionales y centradas en la experiencia del usuario. Trabajo con Vue.js y Tailwind CSS en proyectos de producto.",
    socialLinks: [
        {
            name:"GitHub",
            url: "https://github.com/CasJuan",
            icon:"Github"
        },
        {
            name:"Linkedin",
            url: "https://www.linkedin.com/in/juan-ignaciocastro/",
            icon:"Linkedin"
        },
        /* {
            name:"Email",
            url: "castrojuanig25@gmail.com",
            icon:"Mail"
        } */
    ],
    ctaButtons: [
        {
            text: "Descargar CV",
            href: resume,
            variant: "primary",
            download: true
        },
        {
            text: "Proyectos",
            href: "#projects",
            variant: "secondary"
        }
    ]
}