import React from "react";
import Header from "./components/Header/index";
import Form from "./components/Header/form";
import Info from "./components/Header/info"

const apiKey = "32965ac00594e9661d348ab6e28b0df6";

class App extends React.Component {



    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`)
        const data = await api_url.json();
       
    }

    render() {
        return (
            <div>
                <Header />
                <Form weatherMethod={this.gettingWeather} />
                <Info
                />
                
            </div>
        )
    }
}

export default App