import React from "react";

export default function SideMenu(){
    return (
        <div>
            <div className="layout">
                <div className="sidebar">
                    <div className="techstack-sidebar">
                        <div className="stack-list">
                            <h4>TECH STACK</h4>
                            <p>JavaScript (Node.js, React, TypeScript)</p>
                            <p>PHP (Laravel, CodeIgniter)</p>
                            <p>MySQL, Redis, PostgreSQL</p>
                            <p>Docker, Jenkins</p>
                            <p>AWS, Azure</p>
                        </div>
                    </div>
                    <div className="skills">
                        <h4>SKILLS</h4>
                        <p id = "skills-list">Full-Stack Development</p>
                        <p>Enterprise Architecture (TOGAF)</p>
                        <p>Cloud Engineering</p>
                        <p>API Design & Integration</p>
                        <p>DevOps & Automation</p>
                        <p>Cybersecurity Fundamentals</p>
                    </div>
                </div>
            </div>
        </div>
    )
}