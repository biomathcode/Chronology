import React, {useState, useEffect} from 'react';
import Papa from 'papaparse';
import {FadeExample} from '../animations/onScrollReveal';

const Fetchingdata = ({url}) => {
    const [data, setData] = useState([])
    const [query, SetQuery] = useState('');
    const [status, setStatus] = useState('idle');
    
    useEffect(() => {
        setStatus("fetching")
        console.log(url)
        Papa.parse(url, {
            download: true,
            header: true,
            complete: function(results) {
                setData(results.data);
            }
        });
        setStatus("Done!!!")
    },[url])
    return (
        <div>
            {status}
            {console.log(data)}
            {data.map(obj => {
                return (
            <FadeExample
                Year={obj.Year}
                img={obj.Image}
                Description={obj.Description}
                />
                )
            })
            }
            
        </div>
    )
}

export default Fetchingdata;