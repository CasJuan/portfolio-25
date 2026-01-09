import { useEffect, useState} from "react"
import { AArrowDown, Github, Linkedin, Mail, Medal, ReceiptTurkishLira } from "lucide-react"
import { meData } from "../data/me"

export const Hero = ({ hasAnimated }) => {

    const [currenTextIndex, setCurrenTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const { roles } = meData;

    useEffect(() => {
        const currentRole = roles[currenTextIndex];

        if (!isDeleting) {
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length + 1))
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(100);
                }, 200);
                return () => clearTimeout(timeout);
            }
        } else {
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, currentText.length - 1))
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setCurrenTextIndex((prev) => (prev + 1) % roles.length);
                setTypingSpeed(150);
            }
        }

    }, [currentText, currenTextIndex, isDeleting, typingSpeed, roles])

    const scrollTopAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden md:mt-2 ">

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center h-full flex flex-col justify-center">
                <div id='hero' className={`transition-all duration-1000 ${hasAnimated.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} >
                    <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium animate-fade-in">
                            {meData.saludos}
                        </span>
                    </div>

                    <h1 className=" text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent animate-fade-in-up">
                        {meData.nombre}
                    </h1>

                    <div className=" h-12 md:h-1/6 mb-6 flex items-center justify-center">
                        <h2 className=" text-2xl md:text-4xl font-semibold text-gray-700">
                            Soy {''}
                            <span className=" relative">
                                <span className=" text-blue-600 font-bold">
                                    {currentText}
                                    <span className=" animate-pulse">
                                    </span>
                                </span>
                                <span className=" absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-blue-500 to-purple-600">

                                </span>
                            </span>
                        </h2>
                    </div>

                    <p className=" text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        {meData.descripcion}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 animate-fade-in-up delay-300">
                        {meData.ctaButtons.map((button, index) => (
                            <a
                                href={button.href}
                                download={button.download}
                                target={button.newTab ? "_blank" : undefined}
                                rel={button.newTab ? "noopener noreferrer" : undefined}
                                className={` group relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm ${button.variant === 'primary' ? 'bg-black text-white shadow-lg hover:shadow-xl hover:bg-gray-800' : 'border-2 border-black text-black hover:bg-black hover:text-white'}`}
                                key={index}
                            >
                                {button.variant === 'primary' && (
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    </div>
                                )}
                                <span className= {button.variant === 'primary' ? 'relative z-10' : '' }>
                                    {button.text}
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="flex justify-center space-x-6 mb-8 animate-fae-in-up delay-300">
                        {meData.socialLinks.map((social, index) => {
                            const IconComponent = social.icon === 'Github' ? Github : social.icon === 'Linkedin' ? Linkedin : Mail
                            return (
                                <a key={index} href={social.url} target="_blank" className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-10">
                                    <IconComponent
                                        className=" w-6 h-6 text-gray-700 group-hover:text-black transition-colors "
                                    />

                                </a>
                            )
                        })}
                    </div>

                    <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-float delay-100"></div>
                    <div className="absolute top-40 right-40 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-float delay-300"></div>
                    <div className="absolute bottom-40 left-20 w-5 h-5 bg-green-400 rounded-full opacity-60 animate-float delay-200"></div>
                    <div className="absolute bottom-40 right-10 w-5 h-5 bg-orange-400 rounded-full opacity-60 animate-float delay-1000"></div>

                </div>

            </div>

        </section>
    )
}
