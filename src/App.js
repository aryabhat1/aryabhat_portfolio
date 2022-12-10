import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Login from "./components/login/Login"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser, loadUser } from "./actions/user"
import AdminPanel from "./components/Admin/AdminPanel"
import Timeline from "./components/Admin/Timeline"
import Youtube from "./components/Admin/Youtube"
import Project from "./components/Admin/Project"
import Loader from "./components/loader/Loader"

function App() {
    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector((state) => state.login)
    const { loading, user } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getUser())
        dispatch(loadUser())
    }, [dispatch])

    return (
        <Router>
            {/* <Loader /> */}
            <>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                            // youtubes={user.youtube}
                            // timelines={timeline}
                            // skills={skills}
                            />
                        }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/account" element={<AdminPanel />} />
                    <Route path="/admin/timeline" element={<Timeline />} />
                    <Route path="/admin/youtube" element={<Youtube />} />

                    <Route path="/admin/project" element={<Project />} />
                </Routes>

                <Footer />
            </>
        </Router>
    )
}

export default App
