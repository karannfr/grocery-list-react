let header = ({itemCount, purchaseCount,searchItem, setSearchItem}) => {
  return(
    <span>Grocery List 🛒       {purchaseCount}/{itemCount} 
    <input type="text" 
      placeholder="Search"
      value={searchItem}
      onChange={(e) => setSearchItem(e.target.value)}
    />
    </span>
  );
}

export default header;