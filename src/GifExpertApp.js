import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = () =>{

const [categories,setCategories] = useState(['Goku']);    

    return (
        <>
            <h1>Gift Expert App</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr></hr>
            <ol>
                {
                    categories.map( category =>(

                        <GiftGrid
                         key={ category }
                         category={ category }
                         />
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;
