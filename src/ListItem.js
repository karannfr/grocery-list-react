let listItem = ({itemId, itemDesc, itemCheck, deleteItem, checkItem}) => {
  return(
    <div className="item" key={itemId}>
      <input className="check" type="checkbox" checked={itemCheck} name="" onChange={() => checkItem(itemId)}/>
      <p style={(itemCheck) ? {textDecoration: "line-through"} : {textDecoration: null}}>{itemDesc}</p>
      <button className="delete" onClick={() => deleteItem(itemId)}>✖</button>
    </div>
  );
}

export default listItem;