import cl from "./App.module.scss"
import { Outlet, Link } from "react-router-dom"
import picturePng from "../assets/3.png"
import pictureJpeg from "../assets/1.jpeg"
import PictureSvg from "../assets/4.svg"
import { useState } from "react"

function TODO() {
    TODO2()
}

function TODO2() {
    throw new Error()
}

export const App = () => {
    const [count, setCount] = useState<number>(0)

    const inrement = () => {
    TODO()
    }
    // if (__PLATFORM__ === "desktop") {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }

    // if (__PLATFORM__ === "mobile") {
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    return (
        <div data-testid={"itachi"}>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img src={picturePng} alt="" width={100} />
                <img src={pictureJpeg} alt="" width={100} />
                <div><PictureSvg fill={"red"} width={150} height={150} /></div>
            </div>
            <nav>
                <Link to={"/about"}>About</Link>
                <br />
                <Link to={"/shop"}> Shop</Link >
            </nav>
            Hello world Hello Hello Hello
            < button onClick={ inrement } className={cl.button} > Кнопка</button >
            <Outlet />
        </div >
    );
};

