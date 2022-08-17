import {Component} from 'react'

import './index.css'

class welcome extends Component{
  state = {
    isSubscribed: false
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? "Subscribed" : "Subscribe"
  }

  render() {
    const {buttonText} = this.getButtonText()

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button
          type="button"
          className="sub-button"
          onClick={this.onSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome