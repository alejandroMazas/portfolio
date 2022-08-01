import ProjectCard1 from '../components/Projects_Card/Projects.card1'
import ProjectCard2 from '../components/Projects_Card/Projects.card2'
import ProjectCard3 from '../components/Projects_Card/Projects.card3'
import styles from '../styles/Projects.module.css'

const proyectos = () => {

    return (
        <div className={styles.container}>

            <h2 className={styles.title}>Proyectos</h2>

            {/* <p>En este apartado muestro los proyectos de desarrollo realizados durante el bootcamp en Ironhack tanto individuales como en grupo</p> */}

            <div className={styles.cardBox}>

                <ProjectCard1></ProjectCard1>

                <ProjectCard2></ProjectCard2>

                <ProjectCard3></ProjectCard3>

            </div>

        </div>

    )
}

export default proyectos