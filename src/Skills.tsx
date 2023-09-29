import "./assets/main.css"

function Skills (): JSX.Element {
    return (
        <section className="h-screen w-full bg-dark-background flex">
            <div className="h-full w-1/3 flex items-center justify-center">
                <div className="h-2/3 w-3/4 bg-dark-popup rounded-md shadow-md shadow-black">

                </div>
            </div>

            <div className="h-full w-1/3 flex items-center justify-center">
                <div className="h-2/3 w-3/4 bg-dark-popup rounded-md shadow-md shadow-black flex flex-col">
                    <div className="">

                    </div>
                    <div className="">
                        <h1 className="text-dark-buttons text-4xl">
                            Languages
                        </h1>
                    </div>
                    <div className="">
                        <p className="text-dark-text-active">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nam facilis! Non voluptate nesciunt numquam labore facere similique delectus vitae atque. Vitae quia autem doloremque itaque dolores. Placeat, maxime perferendis.
                        </p>
                    </div>
                </div>
            </div>

            <div className="h-full w-1/3 flex items-center justify-center">
                <div className="h-2/3 w-3/4 bg-dark-popup rounded-md shadow-md shadow-black flex flex-col">
                    <div className="">

                    </div>
                    <div className="">
                        <h1 className="text-dark-buttons text-4xl">
                            Frameworks
                        </h1>
                    </div>
                    <div className="">
                        <p className="text-dark-text-active">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nam facilis! Non voluptate nesciunt numquam labore facere similique delectus vitae atque. Vitae quia autem doloremque itaque dolores. Placeat, maxime perferendis.
                        </p>
                    </div>
                </div>
            </div>
        


        </section>
    );
}

export default Skills;