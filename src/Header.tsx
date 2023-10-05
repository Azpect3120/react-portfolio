import "./assets/main.css"
import Github from "./assets/logo-github.svg"

function Header (): JSX.Element {

    return (
        <header className="w-full h-screen flex bg-dark-background">
            <div className="absolute w-full h-28 flex items-center justify-end">
                <a href="https:/github.com/Azpect3120" target="_blank">
                    <img src={Github} className="w-10 h-10 mr-10 transition-all hover:scale-105" />
                </a>
            </div>

            <div className="w-1/2 h-full flex flex-col items-center justify-center cursor-default select-none">
                <h1 className="text-7xl pb-4 font-bold w-2/3 text-dark-text-active">
                    <span className="text-lg font-normal">
                        Hi there, I am
                    </span>
                    <br />
                    Hayden 
                    <br /> 
                    Hargreaves
                </h1>
                <div className="w-2/3">
                    <p className="text-xl text-dark-buttons">
                        <span className="hover:text-dark-buttons-active transition-all">
                            Developer
                        </span>
                        <span className="px-2">
                            - 
                        </span> 
                        <span className="hover:text-dark-buttons-active transition-all">
                            Software Engineer
                        </span>
                    </p>

                    <p className="text-md py-2 text-dark-text-active">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sunt corrupti numquam suscipit quam asperiores et neque at quidem exercitationem, vero expedita eos assumenda provident qui dicta iste aliquam! Consequatur.
                    </p>
                    <button className="bg-dark-buttons hover:bg-dark-buttons-active transition-all my-2 px-8 py-2 rounded-full">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
                <div className="bg-dark-buttons h-2/3 w-2/3 rounded-full">

                </div>
            </div>
        </header>
    );
}

export default Header;
