import { useEffect, useState, React } from "react"
import { Link } from "react-router-dom"
import { MouseOutlined } from "@mui/icons-material"
import "./HomeStyle.css"
import Timeline from "../TimeLine/TimeLine.jsx"
import * as THREE from "three"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import moonImage from "../../images/moon.jpg"
import venusImage from "../../images/venus.jpg"
import spaceImage from "../../images/wallpaper/bg-Superwave2.jpg"
import { Typography } from "@mui/material"
// import bg1 from "../../images/paige-cody.jpg"
import bg1 from "../../images/wallpaper/bg4.jpg"
import YoutubeCard from "../../components/YoutubeCard/YoutubeCard"
// import YoutubeCard from "../YoutubeCard/YoutubeCard";
import {
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs,
    SiHiveBlockchain,
    SiWeb3Dotjs,
    SiSolidity,
    SiRust,
} from "react-icons/si"

import image1 from "../../images/wallpaper/bg5.jpg"
import image2 from "../../images/wallpaper/bg6.jpg"
import image3 from "../../images/wallpaper/bg7.jpg"
import image4 from "../../images/wallpaper/bg8.jpg"
import Testimonials from "../testimonials/Testimonials"

const Home = () => {
    useEffect(() => {
        const textureLoader = new THREE.TextureLoader()
        const moonTexture = textureLoader.load(moonImage)
        const venusTexture = textureLoader.load(venusImage)
        const spaceTexture = textureLoader.load(spaceImage)

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.set(4, 4, 8)
        // const canvas = document.getElementById("canvas")
        const canvas = document.querySelector(".homeCanvas")
        const renderer = new THREE.WebGLRenderer({ canvas })

        // const geometry = new THREE.BoxGeometry(1, 1, 1)
        // const moonGeometry = new THREE.SphereGeometry(3, 32, 32)
        const moonGeometry = new THREE.SphereGeometry(2, 64, 64)
        const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture })
        const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial)

        const venusGeometry = new THREE.SphereGeometry(3, 64, 64)
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture })
        const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial)
        venusMesh.position.set(8, 5, 5)

        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        // const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

        const pointLight = new THREE.PointLight(0xffffff, 1)
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1)

        // pointLight.position.z = 10
        pointLight.position.set(3, 6, 6)
        pointLight2.position.set(-8, -5, -5)
        // camera.position.set(4, 4, 8)

        // const lightHelper = new THREE.PointLightHelper(pointLight, 1)

        // const mesh = new THREE.Mesh(geometry, material)

        scene.add(moonMesh)
        scene.add(venusMesh)
        scene.add(pointLight)
        scene.add(pointLight2)
        scene.background = spaceTexture

        const constSpeed = 0.01
        window.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth / 2) {
                moonMesh.rotation.x -= constSpeed
                moonMesh.rotation.y += constSpeed
                venusMesh.rotation.x -= constSpeed
                venusMesh.rotation.y += constSpeed
            }

            if (e.clientX > window.innerWidth / 2) {
                moonMesh.rotation.x -= constSpeed
                moonMesh.rotation.y -= constSpeed
                venusMesh.rotation.x -= constSpeed
                venusMesh.rotation.y -= constSpeed
            }

            if (e.clientY > window.innerHeight / 2) {
                moonMesh.rotation.x -= constSpeed
                moonMesh.rotation.y += constSpeed
                venusMesh.rotation.x -= constSpeed
                venusMesh.rotation.y += constSpeed
            }

            if (e.clientX <= window.innerWidth / 2) {
                moonMesh.rotation.x -= constSpeed
                moonMesh.rotation.y += constSpeed
                venusMesh.rotation.x -= constSpeed
                venusMesh.rotation.y += constSpeed
            }
        })

        // scene.add(lightHelper)
        // moonMesh.position.set(6, 3, 5)

        // moonMesh.rotation.y = 1
        // camera.position.z = 10

        const animate = () => {
            requestAnimationFrame(animate)
            moonMesh.rotation.y += 0.001
            venusMesh.rotation.y += 0.001

            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.render(scene, camera)
        }

        animate()

        return () => {
            // second
        }
        // }, [third])
    }, [])

    return (
        <div className="home">
            <canvas className="homeCanvas"></canvas>
            <div className="homeCanvasContainer">
                <Typography variant="h1">
                    <p>S</p>
                    <p>U</p>
                    <p>S</p>
                    <p>H</p>
                    <p>A</p>
                    <p>N</p>
                    <p>T</p>
                </Typography>

                <div className="homeCanvasBox">
                    <Typography variant="h2">DESIGNER</Typography>
                    <Typography variant="h2">DEVELOPER</Typography>
                    <Typography variant="h2">TRAINER</Typography>
                    <Typography variant="h2">CONTENT CREATOR</Typography>
                </div>

                <Link to="/projects">COSMOS OF PROJECTS</Link>
            </div>
            <div className="homeScrollBtn">
                <MouseOutlined />
            </div>

            {/* Timeline Work */}
            <div className="homeContainer">
                <Typography variant="h3">TIMELINE - JOURNEY OF SUPERNOVA</Typography>
                {/* <Timeline timelines={[1, 2, 3, 4]} /> */}
                <Timeline />
            </div>

            {/* Skills */}

            <div className="homeSkills">
                <Typography variant="h3">SKILLS</Typography>

                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src={bg1} alt="face1"></img>
                    </div>

                    {/* <div className="homeCubeSkills"> */}
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src={bg1} alt="face2"></img>
                    </div>

                    {/* <div className="homeCubeSkills"> */}
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src={bg1} alt="face3"></img>
                    </div>

                    {/* <div className="homeCubeSkills"> */}
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src={bg1} alt="face4"></img>
                    </div>

                    {/* <div className="homeCubeSkills"> */}
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src={bg1} alt="face5"></img>
                    </div>

                    {/* <div className="homeCubeSkills"> */}
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src={bg1} alt="face6"></img>
                    </div>
                </div>

                <div className="cubeShadow"></div>

                <div className="homeskillsBox" id="homeskillsBox">
                    {/* <SiCplusplus /> */}

                    {/* <SiJavascript /> */}
                    <SiRust />
                    <SiNodedotjs />
                    <SiThreedotjs />
                    <SiHiveBlockchain />
                    <SiWeb3Dotjs />
                    <SiExpress />
                    <SiSolidity />
                    <SiReact />
                </div>
            </div>

            {/* <div className="homeYoutube">
                <Typography variant="h3">YOUTUBE VIDEOS</Typography>
                <div className="homeYoutubeWrapper">
                    <YoutubeCard image={image1} title="Sample1" />
                    <YoutubeCard image={image2} title="Sample2" />
                    <YoutubeCard image={image3} title="Sample3" />
                    <YoutubeCard image={image4} title="Sample4" />
                </div> */}

            <div className="homeYoutube">
                <Typography variant="h3">CUSTOMER TESTIMONIALS</Typography>
                <div className="homeYoutubeWrapper">
                    <Testimonials />
                    {/* <YoutubeCard image={image1} title="Sample1" />
                    <YoutubeCard image={image2} title="Sample2" />
                    <YoutubeCard image={image3} title="Sample3" /> */}
                    {/* <YoutubeCard image={image4} title="Sample4" /> */}
                </div>

                {/* <div className="homeYoutubeWrapper">
                    {youtubes.map((item) => (
                        <YoutubeCard
                            image={item.image.url}
                            title={item.title}
                            url={item.url}
                            id={item._id}
                            key={item._id}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Home
