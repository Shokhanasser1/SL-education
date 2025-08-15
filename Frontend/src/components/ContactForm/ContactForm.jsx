import emailjs from "@emailjs/browser";
import { useRef } from "react";

const SERVICE_ID = "service_13olx2k";
const TEMPLATE_ID = "template_15uxoih";
const PUBLIC_KEY = "UwiSQWp0B5Ai1dz3t";

export default function ContactForm() {
    const formRef = useRef();


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                SERVICE_ID, 
                TEMPLATE_ID, 
                formRef.current, 
                { publicKey: PUBLIC_KEY }
            );
            alert("Message Sent Successfully");
            formRef.current.reset();
        } catch (error) {
            console.error("Failed to send message:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <form ref={formRef} onSubmit={handleOnSubmit}>
            <input
                type="text"
                name="from_name"
                required
                placeholder="Your name"
            />
            <input
                type="email"
                name="reply_to"
                required
                placeholder="Your email"
            />
            <textarea
                name="message"
                required
                placeholder="Your message"
            ></textarea>
            <button type="submit">Send</button>
        </form>
    )
}