import React from "react"
import "./ProjectsStyle.css"
import { AiOutlineProject } from "react-icons/ai"
import { Button, Typography } from "@mui/material"
import projectImage from "../../images/wallpaper/bg7.jpg"
// import projectImage from "../../images/my_image/boy.svg"
import { Delete } from "@mui/icons-material"
import { FaRegSmileWink } from "react-icons/fa"
// import { deleteProject, getUser } from "../../actions/user";
// import { useDispatch } from "react-redux"

// const url = "https://github.com/aryabhat1"

const url_ngo = "https://relaxed-dijkstra-bb0497.netlify.app/"
const url_dashboard = "https://cbdc-dapp-dashboard.herokuapp.com/"

const proj_image_ngo = ""
const proj_image_dashboard = ""

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
    const projects = [1, 2, 3, 4]

    return (
        <div className="projects">
            <Typography variant="h3">
                Projects <AiOutlineProject></AiOutlineProject>
            </Typography>
            <div className="projectsWrapper">
                {projects.map((project, index) => (
                    <ProjectCard
                        url="https://github.com/aryabhat1"
                        projectImage={projectImage}
                        projectTitle="NFT of Cute Pubs"
                        description="This is a NFT project of selling images of Pubs. This is on Ethereum Virtual Machine. The project is hosted on flick and images are stored in pinata."
                        technologies="Ethereum, Solidity, ether.js, web3uikit, MERN and many more"
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
