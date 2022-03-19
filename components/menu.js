import Image from 'next/image'
import Link from 'next/link'
import logo from "../img/logo.png"
export default function Menu() {
    return(
        <div className="site__menu">
        <Link href="/"><a><div className="site__logo">
            <Image src={logo} width="48" height="48"  className="site__logo_pic" ></Image>
          <p className="site__logo_name">gellyzxc</p>
          </div></a></Link>
          <div className="site__buttons_nav">
            <div className="site__buttons_in">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/category"><a>Category</a></Link>
            <div className="rounded_btn"><Link href="/support"><a>SUPPORT</a></Link></div>
            </div>
        </div>
        </div>
    )
}