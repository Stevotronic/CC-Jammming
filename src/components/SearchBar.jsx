import React from "react";
import styles from "./SearchBar.module.css"
import SearchResults from "./SearchResults";

export default function SearchBar(props){
    const searchHandler = (event) => {
        const song = event.target.value;
        props.onChange(song);
      };

    return <>
    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <label>Search your favorite songs</label>
        <input type="text" name="name" value={props.searchValue} onChange={searchHandler}/>
    </form>
    </>
};
