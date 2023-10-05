import "./assets/main.css"
import FrontEndImg from "./assets/storefront-outline.svg"
import BackEndImg from "./assets/construct-outline.svg"

interface Props {
    number: number
}

function SkillCard (props: Props): JSX.Element {
    const titles = [ "Frontend Skills", "Backend Skills", "--PLACEHOLDER--" ];
    const images = [ FrontEndImg, BackEndImg, BackEndImg ];

    return (
        <div className="bg-dark-popup w-1/4 h-3/4 rounded-lg">

            <div className="w-full h-1/4 flex items-center justify-center">
                <img src={images[props.number]} alt="skills-icon" className="w-24 h-24 hover:scale-105 transition-all duration-300" />
            </div>

            <h1 className="w-full text-center text-4xl text-white">
                {titles[props.number]}
            </h1>

        </div>
    );
}

export default SkillCard;
