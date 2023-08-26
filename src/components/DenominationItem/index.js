// Write your code here
import './index.css'

const DenominationItem = props => {
  const {subtarctMoneyProp, denominationsEachObjectProp} = props
  const {value, id} = denominationsEachObjectProp

  const clickedOnButton = () => {
    subtarctMoneyProp(id)
  }

  return (
    <li>
      <button type="button" className="btnEl" onClick={clickedOnButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
