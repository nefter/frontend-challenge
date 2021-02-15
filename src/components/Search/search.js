import React, { useRef, useState } from 'react';
import "./search.scss"
const Search = ({list, filter, onUpdate}) => {
    const input = useRef(null);
    const [ query, setQuery ] = useState(null);

    const updateQuery = (ele) => {
        setQuery(ele.currentTarget.value);
    }

    const callUpdate = () => {
        const filtered = list.filter( (item) => !query || filter(query, item));
        onUpdate(filtered);
    }

    return (
        <div>
            <input ref={input} type="search" onKeyUp={updateQuery}/>
            <button onClick={callUpdate}>Search</button>
        </div>
    )
}

export default Search;
