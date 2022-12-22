import { useState } from "react";

export default function ToDoItem(props) {
const [colorChange, setColorChange] = useState(false)
const color = colorChange ? 'text-bg-success' : 'text-bg-danger'

const [showEdit, setShowEdit] = useState()

  return (
    <>
      <ul className="list-group">
      <li className={`list-group-item p-3 ${color}`} onClick={() => setShowEdit(!showEdit)}>
          <div className="d-flex align-items-center">
            <span className="flex-fill">{props.textText}</span>
            <div className="btn-group">
              <button className="btn btn-outline-light" onClick={() => setColorChange(!colorChange)}>
                <i className="fa-solid fa-repeat" />
              </button>
              <button className="btn btn-outline-light" onClick={props.onClick}>
                <i className="fa-regular fa-trash-can" />
              </button>
            </div>
          </div>
        </li>

{ showEdit &&
        <li className="list-group-item p-3">
          
            <div className="input-group">
              <input type="text" className="form-control" value="Play game" />
              <button className="btn btn-primary">
                <i className="fa-solid fa-check" />
              </button>
              <button className="btn btn-secondary">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          
        </li>
        }
      </ul>
    </>
  );
}
