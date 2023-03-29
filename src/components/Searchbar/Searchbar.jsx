import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FaSearch } from 'react-icons/fa';
import {SearchbarWrapper, SearchForm,SearchFormButton, SearchFormInput } from './Searchbar.styled';


export function Searchbar({handleInputValue})  {
    const [query, setQuery] = useState('');

    
    const handleSearchInput = (evt) => {
        setQuery(evt.target.value.toLowerCase());
    }

    const onSubmitForm = (evt) => {
        evt.preventDefault();

        if(query.trim() === '') {
            return Notify.failure('Input shouldn`t be empty')
        }
       
       handleInputValue(query);
        setQuery('');
       
    }

    return (

        <SearchbarWrapper>
        <SearchForm onSubmit={onSubmitForm}>
            <SearchFormButton>
            <FaSearch/>
            </SearchFormButton>
            <SearchFormInput value={query} onChange={handleSearchInput}/>
        </SearchForm>
        </SearchbarWrapper>
    )
    
}


// let previousRequest = null;

// function handleRequest(newRequest) {
//     if (previousRequest === newRequest) {
//         return "Запит такий самий, відміна.";
//     } else {
//         previousRequest = newRequest;
//         // Тут виконайте обробку нового запиту
//         return "Обробка нового запиту.";
//     }
// }