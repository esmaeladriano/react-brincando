import style from './Container.module.css'

/* Aqui é uso a props (propriedade childre prara inticar que o que vai passar como parametro estará dentro da seccion) */
//A linha de baixo servi para desablitamos a regra do eslin de props-type
// eslint-disable-next-line react/prop-types
export default function Container({ children }){
    return(
        <section className={style.container}>
            { children }
        </section>
    )
}