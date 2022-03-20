import Menu from '../components/menu';
import Footer from "../components/footer";
import AboutComponent from '../components/about';
export default function About() {
  return(
    <div className="site">
      <div className="site__wrapper">
      <div className="site__menu">
      <Menu />
      </div>
      <div className="site__content">
        <AboutComponent />
      </div>
      <Footer />
      </div>
    </div>
    

  );
} 