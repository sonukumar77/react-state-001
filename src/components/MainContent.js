const MainContent = ({ value }) => {

    return (
        <div className="mainContent">
            <div className="card">
                <h3 className="text-pink">The WET Codebase</h3>
                <p className={value ? "text-white" : "text-black"}>Sunday 4th, 2020 11 min read</p>
                <p className={value ? "text-white" : "text-black"}>Come waste your time with me.</p>
            </div>
            <div className="card">
                <h3 className="text-pink">The WET Codebase</h3>
                <p className={value ? "text-white" : "text-black"}>Sunday 4th, 2020 11 min read</p>
                <p className={value ? "text-white" : "text-black"}>Come waste your time with me.</p>
            </div>
            <div className="card">
                <h3 className="text-pink">Goodby, Clean Code</h3>
                <p className={value ? "text-white" : "text-black"}>Friday 22nd, 2019 5 min read</p>
                <p className={value ? "text-white" : "text-black"}>Let clean code guide you. Then let it go.</p>
            </div>
            <div className="card">
                <h3 className="text-pink">My Decade In Review</h3>
                <p className={value ? "text-white" : "text-black"}>Saturday 11th 2018 5 min read</p>
                <p className={value ? "text-white" : "text-black"}>A personal reflection.</p>
            </div>
            <div className="card">
                <h3 className="text-pink">What Are The React Team Principles</h3>
                <p className={value ? "text-white" : "text-black"}>Thursday 4th 2015 5 min read</p>
                <p className={value ? "text-white" : "text-black"}>A personal reflection.</p>
            </div>
        </div>
    )
}

export default MainContent;