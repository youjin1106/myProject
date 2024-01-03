import { ReactSortable } from "react-sortablejs";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todoList, onRemove, onEdit, onRemoveCheckedAll }) => {
  console.log(todoList);
  const [list, setList] = useState(todoList);
  console.log(list);
  return (
    <div>
      <button onClick={onRemoveCheckedAll}>완료만 삭제</button>
      <button>미완료 보기</button>
      <button>완료만 보기</button>
      <ReactSortable list={list} setList={setList} className="list-container">
        {todoList.map((it) => (
          <TodoItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </ReactSortable>
    </div>
  );
};

export default TodoList;
