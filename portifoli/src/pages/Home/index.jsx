import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/container'
import style from './Home.module.css'

/* className={`${style.btn} ${style.btn_red}`}
    naod estamosusar class dupla devemoster atencão e usar sempre os templtes string (` `) e o sifrão ($) como se fosse uma variavel 
    exemplo : ` ${style.btn} ${style.bg_h}` nunca podemos usar - sempre devemos usar _ quando são várias classe.
*/
function Home() {
    return (
        <>
            <Header />
            <Container>
                <section className={style.home}>
                    <div className={style.apresentacao}>
                        <p>
                            Olá, sou <br />
                            <span>Esmael Adriano</span> <br />
                            Dev Full Stack
                        </p>
                        <Link to="/sobre" 
                        className={`${style.btn} ${style.btn_red}`}>
                            Saiba mais sobre mim
                        </Link>
                    </div>
                    <figure>
                        <img className={style.img_home} src="/developer-red.jpg" alt="Imagem de Home" />
                    </figure>
                </section>
            </Container>
            <Footer />
        </>
    )

}
export default Home
