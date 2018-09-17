export default class WordCard extends
Component {
render() {
 return (
 <div>
{ Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }
 </div>
 );
 }
}
activationHandler = c => { console.log(`${c} has been activated.`) }
...
<CharacterCard value={c} key={i} 
activationHandler={this.activationHandler}/>