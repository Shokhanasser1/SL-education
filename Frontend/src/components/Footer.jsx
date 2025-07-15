import { memo } from "react";
import emailjs from "emailjs-com";

function Footer() {
    const SERVICE_ID = "service_zolbm24";
    const TEMPLATE_ID = "template_z5ti9ph";
    const PUBLIC_KEY = "XQCUsrOdBJ2_APhDS";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
            (result) => {
                alert("Message Sent Successfully");
            },
            (error) => {
                console.log(error.text);
                alert("Something went wrong!");
            }
        );
        e.target.reset();
    };
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
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="name"
                        type="text"
                        required
                        placeholder="Your name"
                        name="user_name"
                    />
                    <input
                        type="number"
                        required
                        placeholder="Your phone number"
                        name="user_phone"
                    />
                    <input
                        type="email"
                        required
                        placeholder="Your e-mail"
                        name="user_email"
                    />
                    <p>
                        By clicking the button, I agree to the processing of
                        personal data and to the rules for using the Platform
                    </p>
                    <button type="submit">Send</button>
                </form>
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
