import style from './Projects.card.module.css'
import Image from 'next/image'
import background from '../../public/background.png'

const ProjectCard1 = () => {
    return (
        <div className={style.container}>
            <Image src={background} alt='tennet_image' />
            <div className={style.tittle}>
                <h3>TENNET</h3>
            </div>
            <div className={style.descriptionBox}>
                <p className={style.description}>Este proyecto fue realizado en Canvas junto a mis compañeros de bootcamp Miguel Delgado y Cristian Calderón.
                    Se trata de un pequeño videojuego en dos dimensiones de disparos y plataformas, donde el jugador deberá eiminar a todos los enemigos del mapa para progresar,
                    Un aspecto interesante es que el jugador puede controlar la dirección de las balas a la vez que se mueve en ambas direcciones.
                </p>
            </div>
            <button></button>
        </div>
    )
}

export default ProjectCard1