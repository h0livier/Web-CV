import {useState} from "react";

export default function Navigation(){

    const [activeLink, setActiveLink] = useState(1)
    const navLinks = [
        {id: 1, link: '#', label: 'Home'},
        {id: 2, link: '#', label: 'Features'},
        {id: 3, link: '#', label: 'Pricing'},
        {id: 4, link: '#', label: 'Faq'},
        {id: 5, link: '#', label: 'About'},
    ]

    return (
        <div className="container">
            <header className="d-flex justify-content-end py-3">
                <ul className="nav nav-pills">
                    {navLinks.map(item => <li className="nav-item" onClick={() => setActiveLink(item.id)}>
                        <a href={item.link} className={"nav-link " +(activeLink === item.id && 'active')} aria-current="page">{item.label}</a>
                    </li>)}
                </ul>
            </header>
        </div>
    )

}