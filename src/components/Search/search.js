import React, { useRef, useState } from 'react';
import "./search.scss"
const Search = ({list, filter, onUpdate}) => {
    const input = useRef(null);
    const [ query, setQuery ] = useState(null);
    const [ displayAutocompleter, setDisplayAutocompleter ] = useState();
    const [ autocompleterList, setAutoacompleterList ] = useState([]);
    const [ selectedFieldFilter, setSelectedFieldFilter ] = useState('title');

    const updateQuery = (evt) => {
        const currentValue = evt.currentTarget.value;
        setQuery(currentValue);
        if(currentValue && currentValue.length > 0) {
            const filteredList = list.filter( (item) => {
                return JSON.stringify(item.fields[selectedFieldFilter]['es-MX'])
                .toLowerCase()
                .indexOf(currentValue) > -1
            });
            setDisplayAutocompleter(true);
            setAutoacompleterList(filteredList);

        }else {
            setDisplayAutocompleter(false);
        }
    }

    const selectAutocompleteItem = (item) => {
        let newFilter = JSON.stringify(item.fields[selectedFieldFilter]['es-MX']);
        newFilter = newFilter.substr(1, newFilter.length -2);
        setQuery(newFilter);
        input.current.value = newFilter;
        setDisplayAutocompleter(false);
    }
    const callUpdate = () => {
        const filtered = list.filter( (item) => !query || filter(query, item));
        onUpdate(filtered);
    }

    return (
        <div className="search-box">
            <select onChange={(e) => setSelectedFieldFilter (e.currentTarget.value)}>
                <option value="title">Title</option>
                <option value="authors">Authors</option>
                <option value="narrators">Narrators</option>
            </select>
            <div className="search-box-entry">
                <input ref={input} type="search" onKeyUp={updateQuery} defaultValue={query}/>
                {displayAutocompleter ?  (
                    <div className="autoacompleter">
                        <ul>
                            {
                                autocompleterList.map( (item, idx) => ( 
                                    <li key={idx} onClick={() => selectAutocompleteItem(item)}>
                                        <div className="cover">
                                            <img alt="cover" src={item.fields.cover['es-MX']}/>
                                        </div>
                                        <div className="details">
                                            <div className="title">{item.fields.title['es-MX']}</div>
                                            <div className="author">author: {item.fields.authors['es-MX'].join(',')}</div>
                                            <div className="narrator">narrator: {item.fields.narrators['es-MX'].join(',')}</div>
                                        </div>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                ) : false}
            </div>
            <button onClick={callUpdate}>Search</button>
        </div>
    )
}

export default Search;
