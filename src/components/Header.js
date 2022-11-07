import { useState } from "react";
import MainContent from "./MainContent";

const Header = () => {
    const [value, setValue] = useState(false);
    return (
        <>
            <div className={`mainBox ${value ? "darkMode" : "lightMode"}`}>
                <header>
                    <h1 className={value ? "text-white" : "text-black"}>Overreacted</h1>
                    <button onClick={() => { setValue(!value) }} className={value ? "dark-btn" : "light-btn"}>Toggle</button>
                </header>
                <MainContent value={value} />
            </div>

        </>
    )
}

export default Header;