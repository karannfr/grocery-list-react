import './index.css'
import Header from './Header.js'
import Add from './Add.js'
import { useState,useEffect } from 'react';
import List from './List.js';

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('list');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
  localStorage.setItem('list', JSON.stringify(items));
  }, [items]);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const saveItem = (list) => {
    setItems(list); 
  };
  const deleteItem = (itemId) => {
    let list = items.filter((item) => item.id !== itemId)
    saveItem(list);
  }
  const addItem = () => {
    if(newItem){
      let itemId = items.length;
      let list = [...items];
      list.push({
        id: itemId,
        desc: newItem,
        checked: false
      });
      saveItem(list);
      setNewItem('');
    }
  }
  const checkItem = (itemId) => {
    let list = items.map((item) => item.id === itemId ? {...item,checked: !item.checked} : item)
    saveItem(list);
  }
  return (
    <div className="App">
      <Header 
        itemCount = {items.length}
        purchaseCount ={items.filter((item) => item.checked).length}
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
      />
      <Add 
        newItem = {newItem} 
        setNewItem = {setNewItem}
        addItem = {addItem}
      />
      <List 
        items= {items.filter((item) => new RegExp(searchItem, 'i').test(item.desc))}
        deleteItem={deleteItem}
        checkItem={checkItem}
      />
    </div>
  );
}

export default App;
