import React,{ Component} from 'react';
import Papa from 'papaparse';
import { FadeExample } from '../animations/onScrollReveal';
class App extends Component{
    constructor(props) {
      super(props)
      this.state = {
        url: this.props.url && 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQjRhSKvrWv4EqvhoBT7G1yK_yyo_LssOGyon90pP1bweKuVpBW_UqsEtTfqxViL38Ue_LCLoi2lTwx/pub?output=csv', 
        data: [],
        loading: false
      }
      this.updateData = this.updateData.bind(this);
    }

    //https://docs.google.com/spreadsheets/d/e/2PACX-1vSmIs7t_dJAm68W4DmsyrH9Ycc1dZ4H5mlJHiWVaABQdVMYu71cdzAs3cMSHNlStqRWcuIff7UsKkn3/pub?output=csv
    componentDidMount() {
      Papa.parse(this.state.url, {
        download: true,
        header: true, 
        complete: this.updateData 
      })
    }
    updateData(result) {
      const data = result.data;
      console.log(data);
      this.setState({data: data, loading:true}) 
    }
  
    render() {
      const {data,loading} = this.state

      // const data = [
      //   {Image: "this is a img", Year: "1996",Description: "lsfajsldjfldjfk" },
      //   {Image: "this is a img", Year: "1885",Description: "lsfajsldjfldjfk" },
      //   {Image: "this is a img", Year: "1998",Description: "lsfajsldjfldjfk" },
      //   {Image: "this is a img", Year: "1457",Description: "lsfajsldjfldjfk" }
      // ]
      return(
        <div className="App">
          <h1>This is working</h1>
          <div id="timeline-details">
            {!loading && <h1>Loading ..</h1>}
            {loading && data.map(obj => {
                console.log(data[0].img)
                return(
                  <FadeExample
                  Year={obj.Year}
                  img={obj.Image}
                  Description={obj.Description}
                  />
                )
              })
            }
          </div>
        </div>
      )
    }
  }
  
export default App;