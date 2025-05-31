const add = ({newItem, setNewItem, addItem}) => {
  return(
    <div className="add">
      
      <input type="text" 
      placeholder="Add Item"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
    </div>
  );
}

export default add;