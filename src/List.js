import ListItem from "./ListItem";

const list = ({items,deleteItem,checkItem}) => {
  return(
    <div className="items">
      {items.map((item) => 
        <ListItem 
          itemId = {item.id}
          itemDesc = {item.desc}
          itemCheck = {item.checked}
          deleteItem = {deleteItem}
          checkItem = {checkItem}
        />
      )}
    </div>
  );
}

export default list;