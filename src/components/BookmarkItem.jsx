const BookmarkItem = ({ title, onCreate, bookmarkList, setBookmarkList }) => {
  const addTodoItem = () => {
    console.log(title);
    onCreate(title);
  };
  const deleteBookmark = () => {
    const newBookmark = bookmarkList.filter((it) => it !== title);
    setBookmarkList(newBookmark);
    localStorage.setItem("title", JSON.stringify(newBookmark.join(",")));
  };

  return (
    <div>
      <span>{title}</span>
      <button onClick={addTodoItem}>추가</button>
      <button onClick={deleteBookmark}>삭제</button>
    </div>
  );
};

export default BookmarkItem;
