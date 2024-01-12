import { useEffect } from "react";
import { useTodoStore } from "../store/Store";
import BookmarkItem from "./BookmarkItem";
import { createPortal } from "react-dom";

const Bookmark = ({ toggleBookmark }) => {
  const { onCreate, bookmarkList, getBookmarkList } = useTodoStore();
  const closeToggle = (e) => {
    if (e.target.className === "list-modal-background") toggleBookmark();
  };

  useEffect(() => {
    getBookmarkList();
  }, []);

  return (
    <>
      {createPortal(
        <div className="list-modal-background" onClick={closeToggle}>
          <div className="list-modal bookmark">
            <div className="list-modal__bookmark-title">즐겨찾기 목록</div>
            <ul>
              {bookmarkList ? (
                bookmarkList.map((it, idx) => (
                  <BookmarkItem key={idx} title={it} onCreate={onCreate} />
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
