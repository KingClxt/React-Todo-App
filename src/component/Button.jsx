export function Button({text, onClick, classes}){
    return <button className={'btn '+classes} onClick={()=>{onClick}}>{text}</button>
}