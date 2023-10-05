import "./assets/main.css"
import SkillCard from "./SkillCard.tsx"

function Skills (): JSX.Element {
    return (
        <section className="h-screen w-full bg-dark-background flex flex-col">
            <div className="w-full h-1/6 flex items-center justify-center">
                <h1 className="text-6xl font-bold text-white">
                    My Skills
                </h1>
            </div>

            <div className="w-full h-5/6 flex items-center justify-evenly">
                <SkillCard number={0}/>
                <SkillCard number={1}/>
                <SkillCard number={2}/>
            </div>



        </section>
    );
}

export default Skills;
