import './about.scss';
import TopicTitle from '../topic-title/topic-title';
import SeedDivider from '../seed-divider/seed-divider';
import AboutContent from './about-content/about-content';
const About=()=>{
  return (
    <div className="about">
      <div className="container">
      <TopicTitle
      title="About Us"/>
      <SeedDivider
      color='black'/>
      <AboutContent/>
      </div>
    </div>

  )
}
export default About;