import React from "react";


  export default function Todo(props) {
    return (
        <li className="todo stak-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div>
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>
                <button type="button" className="btn">
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>

    );
  }
  