import {Component} from 'react'

import {BiBold, BiItalic, BiUnderline} from 'react-icons/bi'

import './App.css'

class App extends Component {
  state = {bold: false, italic: false, underline: false}

  toggleBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  toggleItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  toggleUnderine = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    const bol = bold ? '#faff00' : '#f1f5f9'
    const itl = italic ? '#faff00' : '#f1f5f9'
    const und = underline ? '#faff00' : '#f1f5f9'

    const bolText = bold ? 'bold' : ''
    const itlText = italic ? 'italic' : ''
    const undText = underline ? 'underline' : ''

    return (
      <div className="mainContainer">
        <div className="innerContainer">
          <div className="imageContainer">
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="textInputContainer">
            <div className="selectorIconsContainer">
              <button
                onClick={this.toggleBold}
                className="customButton"
                type="button"
              >
                <BiBold style={{fontSize: '28px', color: bol}} />
              </button>
              <button
                onClick={this.toggleItalic}
                className="customButton"
                type="button"
              >
                <BiItalic style={{fontSize: '28px', color: itl}} />
              </button>
              <button
                onClick={this.toggleUnderine}
                className="customButton"
                type="button"
              >
                <BiUnderline style={{fontSize: '28px', color: und}} />
              </button>
            </div>
            <textarea
              style={{
                textDecoration: undText,
                fontWeight: bolText,
                fontStyle: itlText,
              }}
              className="textArea"
              cols="80"
              rows="30"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
