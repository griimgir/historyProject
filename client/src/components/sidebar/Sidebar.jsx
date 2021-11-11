import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
// import sidebarPic from './purpleFlowers.jpg'

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT</span>
                <img
                    src="https://cdn.discordapp.com/attachments/790031571876446220/901662506953629746/sidebar.png"
                    alt=""
                />
                <p>
                Alberc Ej Salcedo
                </p>
            </div>
            <div className="sidebarItem">
                {/* <span className="sidebarTitle">CATEGORIES</span> */}
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Project Spec</span>
                <div className="sidebarSocial">
                    {/* <p>Project spec</p> */}
                    {/* <p>Full-stack developer: written in JavaScript, React(frontend), MERN(backend), restAPI(database in MongoDB)</p> */}
                    {/* <i className="sidebarIcon fab fa-github"></i> */}
                </div>
                <div className="sidebarSocial">
                <p>Full-stack development - written in JavaScript, React(frontend), Express(backend), MongoDB(Database), restAPI</p>
                </div>
            </div>
        </div>
    );
}
