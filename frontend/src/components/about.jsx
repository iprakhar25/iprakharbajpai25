import React, { useState, useEffect } from "react";

const About = () => {
    const fullName = "prakhar bajpai"; // Name to be typed
    const [typedName, setTypedName] = useState(""); // Ensure it's initialized as an empty string
    const [index, setIndex] = useState(0); // Index for tracking position
    const typingSpeed = 200; // Typing speed in milliseconds

    useEffect(() => {
        if (index < fullName.length) {
            const timeout = setTimeout(() => {
                setTypedName((prev) => prev + fullName.charAt(index));
                setIndex(index + 1); // Move index forward
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [index]); // Now depends on index, so it updates properly

    return (
        <section id="aboutme" className="section">
            <h2>
                <span id="begg">hi, i'm&nbsp;</span>
                <span id="about-name"><strong>{typedName}</strong></span>
                <span className="cursor">_</span> {/* Blinking Cursor Effect */}
            </h2>
            <p> i say i love programming—not because it’s trendy or anything, but because solving problems just gives me this weird kind of satisfaction. Like, when something finally works after hours of trying? That feeling hits different.
                <br />But to be real, if you ask me what I love the most — it's sports. Always has been. I’ve dreamed of being a professional racer for as long as I can remember. The speed, the adrenaline, the focus—I crave that. It's a big part of who I am.
                Tech is where I’ve found my space though. I like building things that mean something. I like the process, the late nights, the “ah it finally works” moments. But beyond all that, I think I'm just a good-natured guy who tries to stay real, keep learning, and enjoy the ride—wherever it leads.</p>
            {/* <p>
                A passionate <strong>Java Developer</strong> with a knack for problem-solving and building efficient, scalable solutions.
            </p>
            <p>
                I love tackling complex algorithms and debugging code to create seamless experiences.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur quia hic repellendus molestiae nulla maiores aut.
            </p> */}
        </section>
    );
};

export default About;
