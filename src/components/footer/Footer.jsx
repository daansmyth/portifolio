import style from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <hr />
      <div className={style.container}>
        <div className={style.content}>
          <p>&copy;
            <a href="/portifolio">2024 Danilo da Cruz.</a>
          </p>
        </div>
        <div className={style.social}>
          <i className="fa-brands fa-linkedin-in">
            <a href="https://www.linkedin.com/in/danilo-cruz-8805a2213" target='_blank'></a>
          </i>
          <i className="fa-brands fa-github">
            <a href="https://github.com/daansmyth" target='_blank'></a>
          </i>
        </div>
      </div>
    </>
  )
}

export default Footer