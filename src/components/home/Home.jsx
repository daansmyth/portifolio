import style from './Home.module.css'
import imgComputer from '../../assets/computer.png'
import imgPrograming from '../../assets/programing.png'

const Home = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>Transforme seu negócio digital <b>com um Front-end de primeira qualidade!</b></h1>
                <p>Ola! Sou Danilo da Cruz, sou de São Paulo e amo mergulhar no desenvolvimento web. Sou desenvolvedor Front-end com conhecimentos em <b>React, HTML, CSS, JavaScript, Git, Github</b>. Você tem planos de fazer ou até mesmo melhorar seu negócio virtual?
                    <span style={{ color: 'var(--color-5th)' }}>Então vamos conversar?</span>
                </p>
                <p>
                    <b style={{ color: 'var(--color-1st)' }}>Me chama no LinkedIn!!!</b>
                </p>
            </div>
            <div className={style.imagem}>
                <img src={imgComputer} alt="" />
                <img src={imgPrograming} alt="" />
            </div>
        </div>
    )
}

export default Home