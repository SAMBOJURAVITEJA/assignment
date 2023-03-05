import {Component} from 'react'

import './index.css'

import Rendering from '../Rendering'

class InitialList extends Component {
  state = {input: ''}

  updating = event => {
    this.setState({
      input: event.target.value,
    })
  }

  render() {
    const {input} = this.state
    const {initialHistoryList} = this.props
    const initialHistoryList2 = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(input.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="heading-container">
          <div className="img-container1">
            <img
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
          </div>
          <div className="content-container">
            <div className="img-container2">
              <img
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <input
              onChange={this.updating}
              placeholder="Search history"
              type="text"
            />
          </div>
        </div>
        <ul className="body-container">
          {initialHistoryList2.map(each => (
            <Rendering each={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default InitialList
