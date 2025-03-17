import { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setinputValue] = useState('');
  
    const onImputChage = ({target})=>{
        
        setinputValue(target.value);
    }

    const onSummit =()=>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;

        // setCategories(categories =>[ inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
        
    }
  
    return (
    
    <form onSubmit={onSummit}>
        <input
        type = "text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onImputChage}
    
    />
    </form>
    
  )
}
