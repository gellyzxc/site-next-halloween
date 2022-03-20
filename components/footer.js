import Image from 'next/image'
import Link from 'next/link'
import logo_gellyzxc from "../img/gellyzxc.png"
export default function Footer() {
    return(
        <div className="footer">
        <Link href="/"><a><div className="footer__logo">
            <Image src={logo_gellyzxc} width="20px" height="20px"  className="site__logo_pic" ></Image>
          <p className="footer__logo_name">gellyzxc</p>
          </div></a></Link>
        </div>
    )
}