import React from 'react'
import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
//  Layout ДЛЯ ТОГО ЧТО Б НА АБСОЛЮТНО ЛЮБОЙ ПУТЬ ЧТО-ТО РЕНДЕРИТЬ
// OUTLET ОБЬЯЗАТЕЛЕН ДЛЯ КОМПОНЕНТОВ РОДИТЕЛЬСКИХ МАРШРУТОВ
const Layout = () => {
    return (

        <>
            <header>
                <ul>
                    {/* это на какой ЮРЛ оно нас должно переводить */}
                    <li><NavLink to="/"> DOM PAGE</NavLink></li>
                    <li><NavLink to="/dogs"> collections</NavLink></li>
                </ul>
            </header>


            {/* ДЛЯ РЕНДЕРА ВЛОЖЕНЫХ МАРШРУТОВ!!!!! */}
            <main>
                <Suspense><Outlet /></Suspense></main>
            <footer></footer>
        </>
    )
}

export default Layout

