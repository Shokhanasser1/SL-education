import { memo, useState } from "react";

function Home() {
    const [active1, setActive1] = useState("children");

    return (
        <section className="home">
            <div className="head">
                <div>
                    <h2>Educational platform</h2>
                    <h2>SL Education</h2>
                    <h3>Current knowledge for beginners and professionals</h3>
                </div>
            </div>
            <div className="types">
                <div>
                    <div>
                        <p>
                            Who do you want to become?
                            <br />
                            <br />
                            It's time to find yourself and choose the right
                            course :)
                            <br />
                            <br /> Good luck!
                        </p>
                    </div>
                    <img src="bird.png" alt="" />
                </div>
                <div>
                    <div>
                        <h2
                            className={`${
                                active1 === "children" ? "active1" : ""
                            }`}
                            onClick={() => setActive1("children")}
                        >
                            <img src="young-1.png" />
                            Children
                        </h2>
                        <h2
                            className={`${
                                active1 === "teenagers" ? "active1" : ""
                            }`}
                            onClick={() => setActive1("teenagers")}
                        >
                            <img src="young-2.png" />
                            Teenagers
                        </h2>
                        <h2
                            className={`${
                                active1 === "adults" ? "active1" : ""
                            }`}
                            onClick={() => setActive1("adults")}
                        >
                            <img src="young-3.png" />
                            Adults
                        </h2>
                    </div>
                    <section>
                        <h3>Robotics</h3>
                        <h3>Creating games</h3>
                        <h3>Web development</h3>
                        <h3>Multimedia</h3>
                        <h3>Chess</h3>
                        <h3>3D modeling and design</h3>
                        <h3>English</h3>
                        <h3>Blogging</h3>
                        <h3>Soft skills</h3>
                    </section>
                </div>
            </div>
        </section>
    );
}
export default memo(Home);
