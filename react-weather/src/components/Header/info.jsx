import React from 'react'


class Info extends React.Component {
  render() {
    return (
      <div>
        {this.props.city &&
          <div>
            <p>Координаты: {this.props.weather}, {this.props.country}</p>
            <p>Погода: {this.props.temperature}</p>
            <p>Восход солнца: {this.props.sunrise}</p>
            <p>Заход солнца: {this.props.sunset}</p>
            </div>
        }
          </div>
    );
  }
}

        export default Info;