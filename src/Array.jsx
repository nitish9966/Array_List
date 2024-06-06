import {useState} from 'react'

function Array(){
    const [fruits,setFruits]=useState(["Apple","Mango","Orange"]);

    function handleAdd(){
        const addItem=document.getElementById('food').value;
        document.getElementById('food').value="";

        setFruits(f=>[...f,addItem]);
    }
    function handleRemove(index){
        setFruits(fruits.filter((_,i)=>i !== index))
    }

    return(
        <>
        <h2>List of Fruits</h2>
        <div>
            <ul>
                {fruits.map((fruit,index)=>
                <li key={index} onClick={()=>handleRemove(index)}>
                    {fruit}</li>
                )}
            </ul>
            <input type='text' id='food' placeholder='Enter a Fruit Name'/>
            <button onClick={handleAdd}>Add Item</button>
        </div>
        </>
    )

}

export default Array;