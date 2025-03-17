import React from 'react'
import Card from '../utils/Card/Card';

const Seemoreprojects = () => {

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
    <div>
      <div className="projectsdiv">
            <h1 className="my-projects-heading">My Projects</h1>
            <h1 className="my-projects-heading-2">Each project is a unique piece of development 🧩</h1>
            
            
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
    </div>
  )
}

export default Seemoreprojects
