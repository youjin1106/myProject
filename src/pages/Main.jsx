import { useEffect, useState } from "react";
import Todo, {
  deleteTodo,
  deleteTodos,
  editTodo,
  insertTodo,
} from "../api/Todo";
import TodoList from "../components/TodoList";
import TodoEditor from "../components/TodoEditor";
import Bookmark from "../components/Bookmark";
// import Weather from "../api/Weather";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [bookmarkList, setBookmarkList] = useState();

  const getTodoList = async () => {
    const getData = await Todo();
    const initData = getData.map((it) => {
      return {
        id: it.id,
        order: it.order,
        title: it.title,
        done: it.done,
        createdAt: it.createdAt,
        updatedAt: it.updatedAt,
      };
    });
    setData(initData);
  };

  const getBookmarkList = () => {
    const res = JSON.parse(localStorage.getItem("title"));
    setBookmarkList(res);
  };

  useEffect(() => {
    getTodoList();
    getBookmarkList();
  }, []);

  const onCreate = async (title) => {
    const createdData = await insertTodo(title);
    const newTodo = {
      title: createdData.title,
      id: createdData.id,
      done: createdData.done,
      createdAt: createdData.createdAt,
      updatedAt: createdData.updatedAt,
    };
    setData([newTodo, ...data]);
  };

  const onRemove = async (targetId) => {
    await deleteTodo(targetId);
    const newTodoList = data.filter((it) => it.id !== targetId);
    setData(newTodoList);
  };

  const onEdit = async (targetId, title, done) => {
    const result = await editTodo(targetId, title, done);
    console.log(result);
    setData(
      data.map((it) =>
        it.id === targetId ? { id: targetId, title: title, done: done } : it
      )
    );
  };

  const onRemoveCheckedAll = async () => {
    const idList = data
      .map((it) => {
        if (it.done === true) return it.id;
      })
      .filter((data) => data !== undefined);
    await deleteTodos(idList);

    //수정된 리스트
    const newList = data
      .map((it) => {
        if (it.done !== true) {
          return it;
        }
      })
      .filter((data) => data !== undefined);
    setData(newList);
  };

  return (
    <div className="main-page">
      <div className="main-page__line-style">
        <div className="main-page__line-style__title">To do list</div>
        <div className="main-page__line-style__moreTodo">
          <button>즐겨찾기</button>
        </div>
        <TodoEditor onCreate={onCreate} />
        <TodoList
          todoList={data}
          setTodoList={setData}
          onRemove={onRemove}
          onEdit={onEdit}
          onRemoveCheckedAll={onRemoveCheckedAll}
          bookmarkList={bookmarkList}
          setBookmarkList={setBookmarkList}
        />
      </div>
      <Bookmark bookmarkList={bookmarkList} setBookmarkList={setBookmarkList} />
    </div>
  );
};

export default MainPage;
