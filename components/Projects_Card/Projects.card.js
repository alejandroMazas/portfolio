import style from './Projects.card.module.css'
import Image from 'next/image'
import backgroundImg from '../../public/projects_images/background.png'

const ProjectCard = ({ title, description }) => {

    return (
        <div className={style.container}>
            <Image src={backgroundImg} alt='tennet_image' />
            <div className={style.tittle}>
                <h3>
                    <a>{title}</a>
                </h3>
            </div>
            <div className={style.descriptionBox}>
                <p className={style.description}> {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard