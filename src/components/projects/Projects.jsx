import React from "react"
import "./ProjectsStyle.css"
import { AiOutlineProject } from "react-icons/ai"
import { Button, Typography } from "@mui/material"
// import projectImage from "../../images/wallpaper/bg7.jpg"

import { Delete } from "@mui/icons-material"
import { FaRegSmileWink } from "react-icons/fa"
import projectImage1 from "../../images/project_images/supra.png"
import projectImage2 from "../../images/project_images/uday_bg1.png"
import projectImage3 from "../../images/project_images/solsong_bg.png"
import projectImage4 from "../../images/project_images/nft-minter_bg.png"

// import { deleteProject, getUser } from "../../actions/user";
// import { useDispatch } from "react-redux"

// const url = "https://github.com/aryabhat1"

// const url_ngo = "https://relaxed-dijkstra-bb0497.netlify.app/"
// const url_dashboard = "https://cbdc-dapp-dashboard.herokuapp.com/"

// const proj_image_ngo = ""
// const proj_image_dashboard = ""

export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
}) => {
    return (
        <>
            <a href={url} className="projectCard" target="black">
                <div>
                    <img src={projectImage} alt="Project Image" srcset="" />
                    <Typography variant="h5">{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant="h4">About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant="h6">Tech Stack: {technologies}</Typography>
                </div>
            </a>
            {isAdmin && (
                <Button style={{ color: "rgba(40, 40, 40, 0.7)" }}>
                    <Delete />
                </Button>
            )}
        </>
    )
}

const Projects = () => {
    const projects = [1]

    return (
        <div className="projects">
            <Typography variant="h3">
                Projects <AiOutlineProject></AiOutlineProject>
            </Typography>
            <div className="projectsWrapper">
                {projects.map((project, index) => (
                    <ProjectCard
                        url="https://supra.onrender.com"
                        projectImage={projectImage1}
                        projectTitle="Supra Infosystem - Hardware Repair Shop"
                        description="This is a Full stack (MERN Stack) based web application for a IT Repair Shop. The employees can issue notes/labels to stick on Computers that they receive for repair."
                        technologies="MongoDB, Express, NodeJS, ReactJS, MaterialUI, CSS, HTML and associated libraries"
                    />
                ))}
                {/* </div> */}

                {/* <div className="projectsWrapper"> */}
                {projects.map((project, index) => (
                    <ProjectCard
                        url="https://relaxed-dijkstra-bb0497.netlify.app/"
                        projectImage={projectImage2}
                        projectTitle="Uday Foundation"
                        description="This is a website for a NGO- Uday Foundation. We have described about present operations, achivements and credentials through the use of cards and tabs."
                        technologies="HTML, CSS, Bootstrap, Javascript and associated libraries."
                    />
                ))}

                {projects.map((project, index) => (
                    <ProjectCard
                        url="https://solsong.netlify.app"
                        projectImage={projectImage3}
                        projectTitle="Solsong"
                        description="This is a Decentralised Repository of Songs using Solana Protocol at its backend. This requires phanton wallet (https://phantom.app/)for connection."
                        technologies="Rust, NextJS, tailwindcss, MaterialUI-icons and associated libraries"
                    />
                ))}

                {projects.map((project, index) => (
                    <ProjectCard
                        url="https://arya-nft-minter.vercel.app/"
                        projectImage={projectImage4}
                        projectTitle="NFT of Flower"
                        description="This is a NFT project of selling images of flowers. This is on Solana Blockchain. The project is hosted on flick and images are stored in pinata. There will be requirement of phantom wallet(https://phantom.app/) to connect wallet."
                        technologies="NextJS, Solana Candy machine, pinata and many more"
                    />
                ))}
            </div>

            <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
                All The Projects Shown Above Are Made By Me In Association With Experts From Client
                Across The Globe
                <FaRegSmileWink />
            </Typography>
        </div>
    )
}

export default Projects
