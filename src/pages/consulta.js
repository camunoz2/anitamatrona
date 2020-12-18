import React from "react"
import {Link} from "gatsby"
import {motion, useCycle} from "framer-motion"

import imgLogo from "../assets/_landing/anita_logo.png"
import imgBg from "../assets/_landing/landing_bg.png"
import imgProfile from "../assets/_landing/anita_profile.png"
import imgInsta from "../assets/_landing/ig_logo.png"
import imgFacebook from "../assets/_landing/fb_logo.png"
import {MenuToggle} from "../components/menu-toggle"

const Consulta = () => {


    const [isOpen, toggleOpen] = useCycle(false, true);



    return (
        <div className="bg-cover bg-no-repeat bg-center h-screen flex flex-col justify-between" style={{backgroundImage: `url(${imgBg})`}}>
            <div className="flex justify-between items-center" style={{backgroundColor:"#E9FCFB"}}>
                <img src={imgLogo} alt="logo anitamtrona" className="my-4 md:my-0 ml-8 h-8 justify-self-center"/>
                <ul className="hidden md:flex md:my-4">
                    <Link to="/">
                        <li className="mr-6">Inicio</li>
                    </Link>
                    <Link to="/todos-talleres">
                        <li className="mr-6">Servicios</li>
                    </Link>
                    <a href="https://www.instagram.com/anitamatrona/">
                        <li className="mr-6">Instagram</li>
                    </a>
                    <Link to="/todos-talleres">
                        <li className="mr-6">Talleres</li>
                    </Link>
                    <a href="https://wa.me/56992391139">
                        <li className="mr-6">Contacto</li>
                    </a>
                </ul>


                <div className={`${isOpen ? "block" : "hidden"} absolute inset-0`} style={{backgroundColor:"#E9FCFB"}}>
                    <ul className="flex flex-col justify-between items-center py-56">
                        <Link to="/">
                            <li className="text-5xl font-black">Inicio</li>
                        </Link>
                        <Link to="/todos-talleres">
                            <li className="text-5xl font-black">Servicios</li>
                        </Link>
                        <a href="https://www.instagram.com/anitamatrona/">
                            <li className="text-5xl font-black">Instagram</li>
                        </a>
                        <Link to="/todos-talleres">
                            <li className="text-5xl font-black">Talleres</li>
                        </Link>
                        <a href="https://wa.me/56992391139">
                            <li className="text-5xl font-black">Contacto</li>
                        </a>
                    </ul>
                </div>
                <motion.nav
                    className="mr-10 z-10"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                >
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
            </div>
                <div className="flex flex-col items-center">
                    <img className="h-48" src={imgProfile} alt="imagen perfil anita"/>
                    <p className="text-2xl md:text-4xl text-white text-center md:w-1/2">No sólo una consulta clínica de matrona, <span className="italic">también</span> <span className="font-black">el espacio que nosotras necesitamos.</span></p>
                    <div className="flex flex-col items-center md:flex-row my-12">
                        <a href="https://wa.me/56992391139" className="px-4 py-2 my-4 md:my-0 md:mr-16" style={{backgroundColor:"#ECD444"}}>Reservar ahora</a>
                        <a href="https://matrona.setmore.com/" className="px-4 py-2" style={{border:"1px solid #ECD444", color:"#ecd444"}}>Agenda digital</a>
                    </div>

                </div>
                <div>
                    <div className="py-6 px-4" style={{backgroundColor:"#ECD444"}}>
                        <p><span className="font-bold">Importante:</span><br></br>Hola a todas! La atención que realizo, por motivos de la contigencia sanitaria, es por <span className="font-bold">vía videollamada</span>, sin embargo ya he conversado con muchas pacientes y todas han quedado muy satisfechas con la atención y cada día vamos mejorando en aquello. Atrévete!.</p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row bg-white py-4 justify-between">
                        <img className="hidden md:block max-w-xs md:ml-8 md:h-8" src={imgLogo} alt="logo"/>
                        <p>También me puedes seguir en mis redes sociales, de preferencia instagram donde soy más activa. </p>
                        <div className="flex justify-around items-center">
                            <a href="https://www.instagram.com/anitamatrona/">
                                <img className="h-10 mx-8" src={imgInsta} alt="instagram logo"/>
                            </a>
                            <a href="https://www.facebook.com/anitamatrona/">
                                <img className="h-10 mx-8" src={imgFacebook} alt="facebook logo"/>
                            </a>
                        </div>
                    </div>

                </div>
        </div>
    )
}   

export default Consulta