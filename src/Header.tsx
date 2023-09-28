import "./assets/main.css"

function Header (): JSX.Element {

    return (
        <header className="bg-red-500 w-full h-screen">
            <div className="w-1/2 h-full bg-blue-400">
                <p className="">
                    Hi there, I am
                </p>
                <h1 className="">
                    Hayden Hargreaves
                </h1>
                <p className="">
                    Developer - Software Engineer
                </p>
                <button className="">
                    Learn More
                </button>
            </div>
        </header>
    );
}

export default Header;
