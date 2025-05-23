export function AboutSection() {
    return (
        <section className="bg-linear-to-r from-[#000000] via-[#272727] to-[#494949] p-[50px] flex flex-row">
            <div className="max-w-[450px]">
                <div className="">
                    <h2 className="text-[#70FF00] text-3xl font-bold inline-block">aboutMe <span className="text-white">( )</span></h2>
                </div>
                {/* about me */}
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel consequat mauris. Quisque sodales ipsum aliquet aliquam placerat. Proin varius condimentum sapien. Mauris quis elit nibh. Morbi ut facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper feugiat nunc. </p>
            </div>
            {/* card 1 */}
            <div className="min-w-[500px] p-[10px] ml-auto">
                <div className="bg-neutral-600 p-3 m-2 shadow-2xl">
                    <h3 className="text-white font-bold">Fullstack Developer</h3>
                    <span className="text-[#70FF00] underline">Projects</span>
                    <div className="flex item-center justify-end">
                        <img className="" src="./tags-icon.png" alt=" tags icon" />
                    </div>
                </div>
                {/* card 2 */}
                <div className="bg-neutral-600 p-3 m-2 shadow">
                    <h3 className="text-white font-bold">Freelancer</h3>
                    <span className="text-[#70FF00] underline">Hire me!</span>
                    <div className="flex item-center justify-end">
                        <img src="./curly-braces-icon.png" alt="curly braces icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}
