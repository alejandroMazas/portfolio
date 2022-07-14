import Link from 'next/link'
import style from './Navibar.module.css'

const Navibar = () => {
    return (
        <>
            <nav className={style.container}>
                <ul className={style.list}>
                    <li className={style.enl}>
                        <Link href="/"><a className={style.item}>Inicio</a></Link>
                        <Link href="/proyectos"><a className={style.item}>Proyectos</a></Link>
                        <Link href="/proyectos"><a className={style.item}>Proyectos</a></Link>
                        <Link href="/proyectos"><a className={style.item}>Proyectos</a></Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navibar