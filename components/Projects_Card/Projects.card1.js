import style from './Projects.card.module.css'
import Image from 'next/image'
import background from '../../public/background.png'

const ProjectCard1 = () => {
    return (
        <div className={style.container}>
            <Image src={background} alt='tennet_image' />
            <div className={style.tittle}>
                <h3>
                    <a>BeatleWeb</a>
                </h3>
            </div>
            <div className={style.descriptionBox}>
                <p className={style.description}>Este fue mi proyecto final de bootcamp, BeatleWeb es una página web realizada por mi padre
                    en los años 90 donde muestra todo su trabajo relacionado con The Beatles y entre ellos, La historia de the beatles en comics
                    un cómic dividido en cápitulos donde se narra la historia del grupo desde sus inicios. El proyecto nace con la idea de actualizar
                    la página web a los tiempos de hoy en día, por ello el proyecto fue realizado con React para el frontend y Express y Node para
                    el backend, ademas se implementaron algunas librerias como i18n que permite cambiar el idioma de la página de español a inglés
                    y React flip-book que realiza una animación de libro al pasar las páginas de cada capítulo.
                </p>
            </div>
        </div>
    )
}

export default ProjectCard1