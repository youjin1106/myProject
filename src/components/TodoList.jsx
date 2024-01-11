import { ReactSortable } from "react-sortablejs";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useTodoStore } from "../store/Store";

const TodoList = () =>
  // {
  // todoList,
  // setTodoList,
  // onRemove,
  // onEdit,
  // onRemoveCheckedAll,
  // bookmarkList,
  // setBookmarkList,
  // }
  {
    const { todoList, setTodoList, onRemoveCheckedAll } = useTodoStore();
    const [filter, setFilter] = useState("all");
    const allList = () => setFilter("all");
    const finishedList = () => setFilter("finished");
    const unfinishedList = () => setFilter("unfihished");

    const filterList = () => {
      const filterCallBack = (item) => {
        if (filter === "finished") {
          return item.done === true;
        } else {
          return item.done === false;
        }
      };
      const copyList = JSON.parse(JSON.stringify(todoList));

      const filteredList =
        filter === "all"
          ? copyList
          : copyList.filter((it) => filterCallBack(it));

      return filteredList;
    };
    // useEffect(() => {
    //   filteredList = filterList();
    // }, []);
    // useEffect(() => {
    //   filteredList = filterList();
    // }, [todoList]);
    const filteredList = filterList();
    console.log(todoList);
    console.log(filteredList);

    const deletedAllfilter = () => {
      const idList = todoList
        .map((it) => {
          if (it.done) return it.id;
        })
        .filter((data) => data !== undefined);
      onRemoveCheckedAll(idList);
    };

    return (
      <div>
        <button onClick={allList}>전체보기</button>
        <button onClick={unfinishedList}>미완료 보기</button>
        <button onClick={finishedList}>완료만 보기</button>
        <button onClick={deletedAllfilter}>완료 삭제</button>
        {todoList.length === 0 && <Skeleton />}
        <ReactSortable
          tag="ul"
          list={todoList}
          setList={(newlist) => setTodoList(newlist)}
          className="list-container"
        >
          {filteredList &&
            filteredList.map((it) => (
              <TodoItem
                key={it.id}
                {...it}
                // onRemove={onRemove}
                // onEdit={onEdit}
                // bookmarkList={bookmarkList}
                // setBookmarkList={setBookmarkList}
              />
            ))}
        </ReactSortable>
      </div>
    );
  };

export default TodoList;
