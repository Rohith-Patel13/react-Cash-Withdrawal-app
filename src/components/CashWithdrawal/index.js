// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {moneyInRupees: 2000}

  subtarctMoney = idNum => {
    const {denominationsList} = this.props
    const {moneyInRupees} = this.state
    const resultRupees = denominationsList.filter(
      eachObjectFilter => eachObjectFilter.id === idNum,
    )
    console.log(resultRupees) // array of obect
    const reductionAmount = resultRupees[0].value

    this.setState({moneyInRupees: moneyInRupees - reductionAmount})
  }

  render() {
    const {denominationsList} = this.props
    const {moneyInRupees} = this.state

    return (
      <div className="bg">
        <div className="innerCard">
          <div className="profileCard">
            <div className="profileLogoCircle">
              <p className="profileLogo">s</p>
            </div>
            <p className="profileName">Sarah Williams</p>
          </div>
          <div className="balanceCard">
            <div>
              <p className="text">Your Balance</p>
            </div>

            <div>
              <p className="rupeesRemained">{moneyInRupees}</p>
              <p className="text">In Rupees</p>
            </div>
          </div>

          <p className="withdrawText">Withdraw</p>
          <p className="text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="rupeesIncrementButtonsCard">
            {denominationsList.map(eachObject => (
              <DenominationItem
                denominationsEachObjectProp={eachObject}
                subtarctMoneyProp={this.subtarctMoney}
                key={eachObject.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
