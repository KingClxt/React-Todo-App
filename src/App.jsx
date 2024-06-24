import {Input} from "./component/Input.jsx";
import {Item} from "./component/Item.jsx";
import {useState} from "react";


function App() {
    const [add, setAdd] = useState('')
    const [items, addItem] = useState([{text:"Musculation", finish:true}])
    const handleAddItem = () =>{
        if(add.trim() !==''){
            addItem([...items, {text:add.trim(), finish: false}])
            setAdd('')
        }
        else{
            alert("Veuillez saisir quelque chose")
        }

    }
    const handleClearAllItem = ()=>{
        addItem([])
    }
    const handleDeleteItem = (index)=>{
        const newItem = [...items]
        newItem.splice(index, 1)
        addItem(newItem)
    }
    const setItemFinish = (index)=>{
        const tab = [...items]
        tab[index].finish = !tab[index].finish
        addItem(tab)
    }
    return <div className="container w-50 mt-5">
        <AddItemsSection
            add={add}
            setAdd={setAdd}
            addItems={handleAddItem}
        />
        <AllItems
            items={items}
            deleteItem={handleDeleteItem}
            clearItems={handleClearAllItem}
            setFinished={setItemFinish}
        />
    </div>
}

function AddItemsSection({add, setAdd, addItems}){
    return <div>
        <h2>TODO LIST</h2>
        <div className="d-flex">
            <Input name="addInput" value={add} type='textnull' id="addInput" onChange={setAdd} />
            <button className='btn btn-primary px-5' onClick={()=>addItems()}>+</button>

        </div>
    </div>
}

/**
 *
 * @param items
 * @param clearItems
 * @returns {JSX.Element}
 * @constructor
 */
function AllItems({items, deleteItem,clearItems, finished, setFinished}){
    return <div>
    <ul className="list-unstyled mt-3">
        {
            items.length>0?
            items.map((element, i)=>
                <Item
                    setFinished={setFinished}
                    deleteItem={deleteItem}
                    index={i}
                    key={i}
                    item={element}
                />):
            <p className='text-center'>
                Aucune tache n'a été ajouter
            </p>
        }
    </ul>
    <span className='d-flex justify-content-between align-items-center my-3'>
        <p className='m-0'>Il y a {items.length} tache{items.length>=2 && 's'}</p>
        <button onClick={()=> clearItems()} className='btn btn-warning'>Supprimer tous</button>
    </span>
    </div>

}
export default App
