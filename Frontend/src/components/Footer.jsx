import { memo } from "react";

function Footer() {
    return (
        <section className="bottom">
            <section>
                <img src="../../public/bird.png" alt="" />
                <div>
                    <h3>Help with choosing?</h3>
                    <p>
                        Leave a request and our specialists will contact you,
                        answer all your questions and select a suitable training
                        option.
                    </p>
                </div>
            </section>
            <footer>
                <div>
                    <h2>SL Education</h2>
                    <a className="link" href="tel:+998123456789">
                        +998-12-345-67-89
                    </a>
                    <p>Samarqand city, Rudakiy st. , 50-uy</p>
                    <p>info@StartLearningEducation.uz</p>
                    <div></div>
                    <p className="copyright">© Start Learning Education</p>
                </div>
                <div>
                    <h2>For kids</h2>
                    <p>Robototechnic</p>
                    <p>Create Games</p>
                    <p>Programming</p>
                    <p>Multimedia</p>
                    <p>Soft Skills</p>
                    <p>Chess</p>
                    <p>Bloging</p>
                    <p>Robototechnic</p>
                    <p>Create Games</p>
                    <p>Programming</p>
                    <p>Multimedia</p>
                    <p>Soft Skills</p>
                </div>
                <div>
                    <h2>After 12</h2>
                    <p>Web-creating</p>
                    <p>Programming Development</p>
                    <p>Graphic Design</p>
                    <p>Game Development</p>
                    <p>Soft Skills</p>
                    <p>Mobile App Development</p>
                    <p>Bloging</p>
                    <p>Create Games</p>
                    <p>Programming</p>
                    <p>Multimedia</p>
                    <p>Soft Skills</p>
                </div>
                <div>
                    <h2>Teenagers</h2>
                    <p>Development games on Unity</p>
                    <p>Develope FOR</p>
                    <p>Graphic Design</p>
                    <p>Tester FOR</p>
                    <p>Internet Merketing</p>
                    <p>Java developer</p>
                    <p>Python Developer</p>
                    <p>iOS Developer</p>
                    <p>Programming</p>
                </div>
                <div>
                    <h2>Info</h2>
                    <p>About education</p>
                    <p>Meropriyaty</p>
                    <p>News</p>
                    <p>Base of Learning</p>
                    <p>Career</p>
                    <p>Contacts</p>
                </div>
            </footer>
        </section>
    );
}

export default memo(Footer);
