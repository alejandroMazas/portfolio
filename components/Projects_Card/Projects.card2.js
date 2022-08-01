import style from './Projects.card.module.css'
import Image from 'next/image'
import background from '../../public/background.png'

const ProjectCard2 = () => {
    return (
        <div className={style.container}>
            <Image src={background} alt='tennet_image' />
            <div className={style.tittle}>
                <h3>
                    <a>Eat and Road</a>
                </h3>
            </div>
            <div className={style.descriptionBox}>
                <p className={style.description}>Este proyecto fue realizado en pareja junto a mi compañero de bootcamp Isaac Miralles. Eat and Road
                    es una aplicación desarrollada con Express y Node, y que implementa la api de google maps para la geolocalización,
                    se trata de una página web de restaurantes de carretera en España, donde el usuario puede valorar, comentar y crear entradas de restaurantes
                    que haya probado y publicarlos en la página, para que los demás usuarios puedan conocerlo a modo de recomendación. la página permite
                    buscar restaurantes por comunidad autónoma y guardar los restaurantes en el perfil de usuario además cuenta con un juego de roles en el cual
                    el administrador, puede crear, editar y eliminar tanto las entradas de los restaurantes como a los propios usuarios.
                </p>
            </div>
        </div>
    )
}

export default ProjectCard2