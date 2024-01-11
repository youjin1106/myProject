import { useEffect } from "react";
import { useTodoStore } from "../store/Store";
import BookmarkItem from "./BookmarkItem";
import { createPortal } from "react-dom";

const Bookmark = ({
  // bookmarkList,
  // setBookmarkList,
  // onCreate,
  toggleBookmark,
}) => {
  const { onCreate, bookmarkList, getBookmarkList } = useTodoStore();
  const closeToggle = (e) => {
    if (e.target.className === "list-modal-background") toggleBookmark();
  };

  //0111추가
  useEffect(() => {
    getBookmarkList();
  }, []);

  return (
    <>
      {createPortal(
        <div className="list-modal-background" onClick={closeToggle}>
          <div className="list-modal">
            <span>즐겨찾기 목록</span>
            <ul>
              {bookmarkList ? (
                bookmarkList.map((it, idx) => (
                  <BookmarkItem
                    key={idx}
                    title={it}
                    onCreate={onCreate}
                    // bookmarkList={bookmarkList}
                    // setBookmarkList={setBookmarkList}
                  />
                ))
              ) : (
                <span>추가한 내용이 없습니다</span>
              )}
            </ul>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Bookmark;
