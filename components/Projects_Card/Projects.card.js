import style from './Projects.card.module.css'
import Image from 'next/image'
import background from '../../public/background.png'

const ProjectCard = () => {
    return (
        <div className={style.container}>
            <Image src={background} alt='tennet_image' />
            <div className={style.tittle}>
                <h3>TENNET</h3>
            </div>
            <div className={style.description}>
                <p>Este proyecto fue realizado en grupo junto a mis compañeros de bootcamp Miguel Delgado y Cristian Calderón.
                    Se trata de un pequeño videojuego en dos dimensiones de disparos y plataformas, donde el jugador deberá eiminar a todos los enemigos del mapa para progresar,
                    Un aspecto interesante es que el jugador puede controlar la dirección de las balas a la vez que se mueve en ambas direcciones.
                </p>
            </div>
        </div>
    )
}

export default ProjectCard