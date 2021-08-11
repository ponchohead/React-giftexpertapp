import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {



    const [categories, setCategories] = useState(['blanco']);

    // const handleaAdd = () => {

    //     // setCategories ([...categories, 'verde']);

    //     setCategories (cats => [...cats, 'verde']);
       

    // };

    return (
        <>

            

            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/> 
            <hr/>
            

            <ol>

                {
                    categories.map(category => (
                         <GiftGrid 
                         key= {category}
                         category = {category}
                         />
                         ))

                }

            </ol>
        </>
    )
}

