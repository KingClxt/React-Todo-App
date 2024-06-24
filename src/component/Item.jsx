export function Item({item,index,deleteItem, setFinished}){
    const style = {textDecoration:item.finish?'line-through':''}
    return <li className='d-flex align-items-center justify-content-between my-2'>
        <p className='m-0 fw-semibold 'style={style}>{item.text}</p>
        <div className='d-flex align-items-center'>
            <div className='form-switch'>
                <input type="checkbox" checked={item.finish} onChange={()=>setFinished(index)} className='form-check-input'/>
            </div>
            <button onClick={() => deleteItem(index)} className="btn btn-danger">x</button>
        </div>
    </li>
}