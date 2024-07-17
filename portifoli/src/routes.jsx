import {BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Projetos  from "./pages/Projetos"
import Contatos from "./pages/Contatos"

/*
PAra usar o ROuter devemos instala no projecto o React router-dom
Quando estamos a trabalhar com rotas no react, só tevemo eter em conta os seguites elementos:
 1-> Importar que devemo ter que que ter o Path(caminho) Ele vai nos levar a até onde está a nosaa pagina ou oque será renderizado
 
 2->Ele aponta para o elemento a ser renderizado

 obs:Cada rota com seu Router()
*/
export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> 
                </Route>
                <Route path="/Sobre" element={<Sobre />}> 
                </Route>
                <Route path="/Projetos" element={<Projetos />}> 
                </Route>
                <Route path="/Contatos" element={<Contatos />}> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}