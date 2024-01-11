import { useEffect, useState } from "react";
import Todo, {
  // deleteTodo,
  // deleteTodos,
  editTodo,
  insertTodo,
  // insertTodo,
} from "../api/Todo";
import TodoList from "../components/TodoList";
import TodoEditor from "../components/TodoEditor";
import Bookmark from "../components/Bookmark";
import { useTodoStore } from "../store/Store";

const MainPage = () => {
  const { getTodoList, getBookmarkList } = useTodoStore();
  // const [bookmarkList, setBookmarkList] = useState();
  const [bookmarkModal, setBookmarkModal] = useState(false);
  const toggleBookmark = () => setBookmarkModal(!bookmarkModal);

  // const getTodoList = async () => {
  //   const getData = await Todo();
  //   const initData = getData.map((it) => {
  //     return {
  //       id: it.id,
  //       order: it.order,
  //       title: it.title,
  //       done: it.done,
  //       createdAt: it.createdAt,
  //       updatedAt: it.updatedAt,
  //     };
  //   });
  //   setData(initData);
  // };

  // const getBookmarkList = () => {
  //   const res = JSON.parse(localStorage.getItem("title"));
  //   let bookmarkArr = [];
  //   if (res) bookmarkArr = res.split(",");
  //   setBookmarkList(bookmarkArr);
  // };

  useEffect(() => {
    getTodoList();
    // getBookmarkList();
  }, []);

  // const onCreate = async (title) => {
  //   const createdData = await insertTodo(title);
  //   const newTodo = {
  //     title: createdData.title,
  //     id: createdData.id,
  //     done: createdData.done,
  //     createdAt: createdData.createdAt,
  //     updatedAt: createdData.updatedAt,
  //   };
  //   setData([newTodo, ...data]);
  // };

  // const onRemove = async (targetId) => {
  //   await deleteTodo(targetId);
  //   const newTodoList = data.filter((it) => it.id !== targetId);
  //   setData(newTodoList);
  // };

  // const onEdit = async (targetId, title, done) => {
  //   const result = await editTodo(targetId, title, done);
  //   console.log(result);
  //   setData(
  //     data.map((it) =>
  //       it.id === targetId ? { id: targetId, title: title, done: done } : it
  //     )
  //   );
  // };

  // const onRemoveCheckedAll = async () => {
  //   const idList = data
  //     .map((it) => {
  //       if (it.done === true) return it.id;
  //     })
  //     .filter((data) => data !== undefined);
  //   await deleteTodos(idList);

  //   //수정된 리스트
  //   const newList = data
  //     .map((it) => {
  //       if (it.done !== true) {
  //         return it;
  //       }
  //     })
  //     .filter((data) => data !== undefined);
  //   setData(newList);
  // };

  return (
    <div className="main-page">
      <div className="main-page__line-style">
        <div className="main-page__line-style__top">
          <div className="main-page__line-style__top__title">To do list</div>
          <div className="main-page__line-style__top__moreTodo">
            <button onClick={toggleBookmark}>즐겨찾기</button>
          </div>
          <TodoEditor
          // onCreate={onCreate}
          />
        </div>
        <TodoList
        // todoList={getTodoList}
        // setTodoList={setTodoList}
        // onRemove={onRemove}
        // onEdit={onEdit}
        // onRemoveCheckedAll={onRemoveCheckedAll}
        // bookmarkList={bookmarkList}
        // setBookmarkList={setBookmarkList}
        />
      </div>
      {bookmarkModal && (
        <Bookmark
          // bookmarkList={bookmarkList}
          // setBookmarkList={setBookmarkList}
          // onCreate={onCreate}
          toggleBookmark={toggleBookmark}
        />
      )}
    </div>
  );
};

export default MainPage;
