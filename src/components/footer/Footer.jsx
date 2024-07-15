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
          <a href="https://www.linkedin.com/in/danilo-cruz-8805a2213" target='_blank'>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="https://github.com/daansmyth" target='_blank'>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer