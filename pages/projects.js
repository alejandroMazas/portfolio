import ProjectCard1 from '../components/Projects_Card/Projects.card'
import styles from '../styles/Projects.module.css'

const proyectos = () => {

    return (
        <div className={styles.container}>

            <h2>Proyectos</h2>

            <p>En este apartado muestro los proyectos de desarrollo realizados durante el bootcamp en Ironhack tanto individuales como en grupo</p>

            <div className={styles.cardBox}>

                <ProjectCard1></ProjectCard1>

                <ProjectCard1></ProjectCard1>

                <ProjectCard1></ProjectCard1>

            </div>

        </div>

    )
}

export default proyectos