import React, { Component } from "react"
import Header from './components/Header/Header'
import Confirmed from './components/Confirmed/Confirmed'
import Recovered from './components/Recovered/Recovered'
import Deaths from './components/Deaths/Deaths'
import "./styles.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      confirmed: null,
      recovered: null,
      deaths: null
    }
  }

  fetchPoland = async () => {
    fetch(
      "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/ArcGIS/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=177&cacheHint=true%27",
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          confirmed:
            json.features[
              json.features.findIndex(where => {
                return where.attributes.Country_Region === "Poland"
              })
            ].attributes.Confirmed
        })
        this.setState({
          deaths:
            json.features[
              json.features.findIndex(where => {
                return where.attributes.Country_Region === "Poland"
              })
            ].attributes.Deaths
        })
        this.setState({
          recovered:
            json.features[
              json.features.findIndex(where => {
                return where.attributes.Country_Region === "Poland"
              })
            ].attributes.Recovered
        })
      })
  }

  async componentDidMount() {
    await this.fetchPoland()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Confirmed confirmed={this.state.confirmed} />
        <Deaths deaths={this.state.deaths} />
        <Recovered recovered={this.state.recovered} />
      </div>
    )
  }
}

export default App;
