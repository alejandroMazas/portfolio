import Head from 'next/head'
import ProjectCard from '../components/Projects_Card/Projects.card'
import styles from '../styles/Projects.module.css'
import backgroundImg from '../public/projects_images/background.png'

const proyectos = () => {

    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <div className={styles.container}>

                <h2 className={styles.title}>Proyectos</h2>

                {/* <p>En este apartado muestro los proyectos de desarrollo realizados durante el bootcamp en Ironhack tanto individuales como en grupo</p> */}

                <div className={styles.cardBox}>

                    <ProjectCard
                        title={"BeatleWeb"}
                        description={"Este fue mi proyecto final de bootcamp, BeatleWeb es una página web realizada por mi padre en los años 90 donde muestra todo su trabajo relacionado con The Beatles y entre ellos, La historia de the beatles en comics un cómic dividido en cápitulos donde se narra la historia del grupo desde sus inicios. El proyecto nace con la idea de actualizar la página web a los tiempos de hoy en día, por ello el proyecto fue realizado con React para el frontend y Express y Node para el backend, ademas se implementaron algunas librerias como i18n que permite cambiar el idioma de la página de español a inglés y React flip-book que realiza una animación de libro al pasar las páginas de cada capítulo."}
                    />
                    <ProjectCard
                        title={"Eat & Road"}
                        description={"Este proyecto fue realizado en pareja junto a mi compañero de bootcamp Isaac Miralles. Eat and Roades una aplicación desarrollada con Express y Node, y que implementa la api de google maps para la geolocalización se trata de una página web de restaurantes de carretera en España, donde el usuario puede valorar, comentar y crear entradas de restaurantes que haya probado y publicarlos en la página, para que los demás usuarios puedan conocerlo a modo de recomendación. la página permite buscar restaurantes por comunidad autónoma y guardar los restaurantes en el perfil de usuario además cuenta con un juego de roles en el cualel administrador, puede crear, editar y eliminar tanto las entradas de los restaurantes como a los propios usuarios."}
                    />
                    <ProjectCard
                        title={"Tennet"}
                        description={"Este proyecto fue realizado en Canvas junto a mis compañeros de bootcamp Miguel Delgado y Cristian Calderón. Se trata de un pequeño videojuego en dos dimensiones de disparos y plataformas, donde el jugador deberá eiminar a todos los enemigos del mapa para progresar, un aspecto interesante es que el jugador puede controlar la dirección de las balas a la vez que se mueve en ambas direcciones."}
                    />
                </div>

            </div>
        </>
    )
}

export default proyectos