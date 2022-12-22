import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddButton from "./coponents/AddButton";
import ToDoItem from "./coponents/ToDoItem";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

function App() {
  const [dataList, setDataList] = useState([
    { id: uuidv4(), title: "Learning", completed: false},
    { id: uuidv4(), title: "Shopping", completed: false}
  ]);

  const [text, setText] = useState("");
  const showEditMode = (index) => {
  }
  
  const newTodo = () => {
    const newList = { id: uuidv4(), title: text, completed: false}
//set state เพิ่มข้อมูล 
setDataList([newList, ...dataList])
    //setstate when insert todolist will disappear
setText('')
  }
//state for clear
  const clearText = () => {
    setText('')
  }

  //state deleteitem use filter to map with the different of item
const delText = (id) => {
const filteredData = dataList.filter(item => item !== id )
setDataList(filteredData)
}



  return (
    <div className="container pt-5" style={{ maxWidth: 576 }}>
      
        <AddButton onSubmit={newTodo} onChange={(e) => setText(e.target.value)} onClick={clearText} content={text}></AddButton>
      
      <br />
      
        {dataList.map((data, index) => 
          <ToDoItem key={data.id} editMode={data.isEditMode} textText={data.title} onClick={ () => delText(data)} />
        )}
    
    </div>
  );
  
}

export default App;
