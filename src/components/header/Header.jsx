import style from './Header.module.css'
import { useHeader } from './useHeader'

const header = () => {

    const { visivel, btnHamburguer, btnClose, sublistVisivel, btnSublist } = useHeader();

    return (
        <div className={style.container}>
            <i className="fa-solid fa-bars fa-2xl" onClick={btnHamburguer}></i>
            <ul className={style.list} style={{ left: visivel ? '0px' : '-2000px' }}>
                <h2>{"<"}Danilo<b>Cruz{">"}</b></h2>
                <i className="fa-solid fa-xmark fa-2xl" onClick={btnClose}></i>
                <li>
                    <a href="https://www.linkedin.com/in/danilo-cruz-8805a2213" target='_blank'>LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/daansmyth" target='_blank'>Github</a>
                </li>
                <li className={style.sublist}>
                    <span onClick={btnSublist}>Portifólios</span>
                    <a
                        href="https://daansmyth.github.io/leisureimoveis"
                        target='_blank' style={{ display: sublistVisivel ? 'block' : 'none' }}>
                        Projeto Leisure Imóveis
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default header