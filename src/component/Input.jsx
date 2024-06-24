export function Input({value, type, name, id, onChange}){
    return <input
            type={type}
            name={name}
            value={value}
            id={id}
            className="form-control me-2"
            onChange={(e)=>onChange(e.target.value)}
        />
}