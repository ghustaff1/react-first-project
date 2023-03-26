import './entry-title.scss';

const EntryTitle=(props)=>{
  //console.log(props.title)
  return(
    <h1 className="entry-title">
      {props.title}
    </h1>
  )
}
export default EntryTitle;