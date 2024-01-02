import TodoItem from "./TodoItem";

const TodoList = ({ todoList, onRemove, onEdit, onRemoveCheckedAll }) => {
  return (
    <div>
      <h2>할 일 목록</h2>
      <button onClick={onRemoveCheckedAll}>완료 일괄 삭제</button>
      <div>
        {todoList.map((it) => (
          <TodoItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
