import './entry.scss';
import EntryTitle from './entry-title/entry-title';
import EntryContent from './entry-content/entry-content';
import SeedDivider from '../seed-divider/seed-divider';
const Entry=(props)=>{
  return(
    <div className="entry">
      <div className='container'>
        <EntryTitle
        title={props.EntryTitle}/>
        <SeedDivider
        color={'white'}/>
        <EntryContent
        subtitle={props.EntrySubtitle}/>
      </div>

    </div>
  )
}
export default Entry;