import React,{ Component} from 'react';
import Papa from 'papaparse'
import ReactImageTextAnimation from 'react-image-text-animation';
import Animated from 'react-spring'

class App extends Component{
    constructor() {
      super()
      this.state = {
        data: []
      }
      this.updateData = this.updateData.bind(this);
    }
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vSmIs7t_dJAm68W4DmsyrH9Ycc1dZ4H5mlJHiWVaABQdVMYu71cdzAs3cMSHNlStqRWcuIff7UsKkn3/pub?output=csv
    componentDidMount() {
      Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQjRhSKvrWv4EqvhoBT7G1yK_yyo_LssOGyon90pP1bweKuVpBW_UqsEtTfqxViL38Ue_LCLoi2lTwx/pub?output=csv', {
        download: true,
        header: true, 
        complete: this.updateData
      })
    }
    updateData(result) {
      const data = result.data;
      console.log(data);
      this.setState({data: data}) 
    }
  
    render() {
      const {data} = this.state
      return(
        <div className="App">
          <div id="timeline-details">
            {!data && <h1>Loading ..</h1>}
            {data.map(obj => {
                console.log(data[0].img)
                return(
                  <div key={obj.Year}>
                    <p>{obj.Year}</p>
                    <p>{obj.Description}</p>
                    <img
                    src={obj.Image} 
                    alt={obj.Year}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
  
export default App;