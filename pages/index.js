import Link from 'next/link'
export default function Index() {
  return(
    <div className="site">
      <div className="site__wrapper">
      <div className="site__menu">
          <Link href="/"><a><div className="site__logo">
            <img className="site__logo_pic" src="/img/logo.png"></img>
            <p className="site__logo_name">gellyzxc</p>
            </div></a></Link>
            <div className="site__buttons_nav">
              <div className="site__buttons_in">
              <Link href="/"><a>Home</a></Link>
              <Link href="/about"><a>About</a></Link>
              <Link href="/candy"><a>Candy</a></Link>
              <Link href="/new"><a>New</a></Link>
              <div className="rounded_btn"><Link href="/support"><a>SUPPORT</a></Link></div>
              </div>
          </div>
      </div>
      <div className="site__content">
        <div className="content__slider"><img className="ya_daun" src='https://upload.wikimedia.org/wikipedia/commons/d/d3/Zxcursed.gif'></img></div>
      </div>
      </div>
    </div>

  );
} 