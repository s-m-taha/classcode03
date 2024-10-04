import Link from "next/link";
export default function Header(){
    return(
        <div>
        <header className="Header">
        <p className="Header" id="logo">LOGO</p>
        <ul className="header-buttons">
        <Link href="/"><li id="home">HOME</li></Link>
        <Link href="/About-us"><li id="about">ABOUT US</li></Link>
        <Link href="/Contact-us"> <li id="cont">CONTACT US</li></Link>
        <Link href="/Jobs"><li id="job">JOBS</li></Link>
        </ul>
        </header>
        </div>
    )
}