import Menu from '../components/menu';
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
      </div>
    </div>
    

  );
} 