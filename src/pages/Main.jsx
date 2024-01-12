import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoEditor from "../components/TodoEditor";
import Bookmark from "../components/Bookmark";
import { useTodoStore } from "../store/Store";
import React from "react";

const MainPage = () => {
  const { getTodoList } = useTodoStore();
  const [bookmarkModal, setBookmarkModal] = useState(false);
  const toggleBookmark = () => setBookmarkModal(!bookmarkModal);

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div className="main-page">
      <div className="main-page__line-style">
        <div className="main-page__line-style__top">
          <div className="main-page__line-style__top__title">To do list</div>
          <div className="main-page__line-style__top__moreTodo">
            <button onClick={toggleBookmark}>즐겨찾기</button>
          </div>
          <TodoEditor />
        </div>
        <TodoList />
      </div>
      {bookmarkModal && <Bookmark toggleBookmark={toggleBookmark} />}
    </div>
  );
};

export default React.memo(MainPage);
