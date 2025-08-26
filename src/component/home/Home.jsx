import { useState } from "react";
import "./Home.css";


export default function Home ()  {
    const [ completed, setCompleted ] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setCompleted(true);
        window.open("https://github.com/tokslaw7", "_blank");
    };

    const toggleDialog = () => setIsOpen(!isOpen);

    return (
    <div className="hero">
        <div className="hero-content">
        <h1 className="hero-title">Full-Stack Software Engineer & Enterprise Architect</h1>
        <div>
            <div className="intro-words">Software Engineer & Enterprise Architect</div>

            <p className="hero-subtext">
              Transforming complex business challenges into scalable software solutions through innovative architecture and cutting-edge technology.
            </p>

            <div className="intro-actions">
                <button onClick={handleClick} className="btn-secondary">Visit GitHub</button>
                    <button onClick={handleClick} className="btn-primary">View Works</button>
                <button onClick={toggleDialog} className="btn-outline">Contact Me!</button>
                {/*opendialog modal for contact page details - fill form*/}
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
                            <h2 className="text-xl font-semibold mb-4">Contact Form</h2>

                            <form className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border p-2 rounded"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border p-2 rounded"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows="4"
                                    className="border p-2 rounded"
                                />

                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
                                >
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    </div>
    );
};



