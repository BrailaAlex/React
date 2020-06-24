import React from "react";

const CORAL = '#ff7f50'
const AQUA  = '#0ff'
const BISQUE = '#ffe4c4'


class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerText: '',
    }
  }

  getBtnColor = (color) => {
      this.setState({
        pickerText: color
      });
  }
  clearPickerText = () => {
      this.setState({
        pickerText: ''
      });
  }
    
    render() {
      return (
        <div>
          <div className="picker__title">
            {this.state.pickerText}
          </div>
          <div>
            <button
              className="picker__button picker__button_coral"
              style={{
                background: CORAL
              }}
              onMouseEnter={() => this.getBtnColor('Coral')}
              onMouseLeave={this.clearPickerText}
            ></button>
            <button
              className="picker__button picker__button_aqua"
              style={{
                background: AQUA
              }}
              onMouseEnter={() => this.getBtnColor('Aqua')}
              onMouseLeave={this.clearPickerText}
            ></button>
            <button
              className="picker__button picker__button_bisque"
              style={{
                background: BISQUE
              }}
              onMouseEnter={() => this.getBtnColor('Bisque')}
              onMouseLeave={this.clearPickerText}
            ></button>
          </div>
        </div>
      )
  }
}

export default ColorPicker;


