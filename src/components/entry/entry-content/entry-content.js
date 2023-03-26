import './entry-content.scss';
import EntryBtn from '../entry-btn/entry-btn';
const EntryContent=(props)=>{
  return(
    <div className="entry-content">
      <div className="entry-subtitle">{props.subtitle}</div>
      <EntryBtn/>
    </div>
  )
}
export default EntryContent;