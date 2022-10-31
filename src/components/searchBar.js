import  { useState, useEffect } from 'react';
import axios from 'axios';

import uuid from 'react-uuid';
const SearchBar=()=> {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
                console.log(response.data)
            })
    }, [])
   
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => 
                item.name.toLowerCase().includes(searchInput.toLowerCase())
            )
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <li key={uuid()} style={{listStyle:'none'}}>
                              <p>{item.name}</p>
                              <p>{item.name}</p>
                              </li>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        
                         
                            return (
                                <li key={uuid()} style={{listStyle:'none'}}>
                                  <p>{item.name}</p>
                                  <p>{item.name}</p>
                                  </li>
                            
                        )
                    })
                )}
            
        </div>
    )
}

export default SearchBar