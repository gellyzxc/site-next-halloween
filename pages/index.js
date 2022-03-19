import Link from 'next/link'
export default function Index() {
  return(
    <div className="site">
      <div className="site__wrapper">
      <div className="site__menu">
          <div className="site__logo">
            <img className="site__logo_pic" src="/img/logo.png"></img>
            <p className="site__logo_name">gellyzxc</p>
            </div>
            <div className="site__buttons_nav">
              <div className="site__buttons_in">
              <Link href="/about"><a>About</a></Link>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <div className="rounded_btn"><p>SUPPORT</p></div>
              </div>
          </div>
      </div>
      <div className="site__content">
        <div className="content__slider">slaider</div>
      </div>
      </div>
    </div>

  );
} 