import React from "react";
import { useTodoStore } from "../store/Store";

const BookmarkItem = ({ title }) => {
  const { onCreate, bookmarkList, setBookmarkList } = useTodoStore();
  const addTodoItem = () => {
    onCreate(title);
  };
  const deleteBookmark = () => {
    const newBookmark = bookmarkList.filter((it) => it !== title);
    setBookmarkList(newBookmark);
    localStorage.setItem("title", JSON.stringify(newBookmark.join(",")));
  };

  return (
    <div className="bookmark-list">
      <span className="bookmark-list__item-title">{title}</span>
      <div className="bookmark-list__btn">
        <button onClick={addTodoItem}>추가</button>
        <button onClick={deleteBookmark}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(BookmarkItem);
