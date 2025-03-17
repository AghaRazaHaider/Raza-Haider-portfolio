import { Link } from "react-router-dom";
import React from "react";
import Card from "../../utils/Card/Card";   // Importing Card Component
import './projects.css';    // Importing CSS

function Projects() {
    // Array of Objects
    const projects = [
        { 
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp17-O7kMy6vSg_Naf02hkvvg9ztmjqXjxOA&s",
            title: "Portfolio Website", 
            description: "This is an Awwwards winning Portfolio website clone by me!", 
            live: "https://myportfolio.com" 
        },
        { 
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp17-O7kMy6vSg_Naf02hkvvg9ztmjqXjxOA&s",
            title: "E-commerce Store", 
            description: "This is an Awwwards winning Portfolio website clone by me! ", 
            live: "https://myecommerce.com" 
        },
        {   
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp17-O7kMy6vSg_Naf02hkvvg9ztmjqXjxOA&s",
            title: "Blog CMS", 
            description: "This is an Awwwards winning Portfolio website clone by me!", 
            live: "https://myblogcms.com", 
        },
    ];

    return (
        <div className="projectsdiv">
            <h1 className="my-projects-heading">My Projects</h1>
            <h1 className="my-projects-heading-2">Each project is a unique piece of development 🧩</h1>
            
            <div>
                <div className="card-bg">
                {projects.map((project) => (
                    <Card
                    image={project.image}
                        title={project.title}
                        description={project.description}
                        live={project.live}
                    />
                ))}
            </div>
            </div>
            <div className="see-more-div">
                 <Link to="/seemoreprojects">
            <button className="projects-see-more-button">See More Projects</button></Link>
            </div>
        </div>
    );
}

export default Projects;