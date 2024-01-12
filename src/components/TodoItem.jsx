import React, { useState } from "react";
import Modal from "./Modal";
import { useTodoStore } from "../store/Store";

const TodoItem = ({ id, title, updatedAt, done }) => {
  const [checked, setChecked] = useState(done);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localTitle, setLocalTitle] = useState(title);
  const { onRemove, onEdit, bookmarkList, setBookmarkList } = useTodoStore();

  const handleClickRemove = () => {
    onRemove(id);
  };

  const handleClickEdit = () => {
    onEdit(id, localTitle, checked);
    toggleIsEdit();
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
    if (e.target.checked) {
      onEdit(id, localTitle, true);
    } else {
      onEdit(id, localTitle, false);
    }
  };

  const addBookmark = () => {
    let newState = "";
    const listString = bookmarkList.join(",");
    bookmarkList.length !== 0
      ? !bookmarkList.includes(title.trim())
        ? (newState = listString + "," + title.trim())
        : (newState = listString)
      : (newState = title.trim());
    localStorage.setItem("title", JSON.stringify(newState));
    const newArr = newState.split(",");
    setBookmarkList(newArr);
  };

  return (
    <li className="list-item">
      <div className="item-title">
        <input type="checkbox" checked={checked} onChange={handleCheck} />
        <div>
          {isEdit && (
            <>
              <div>
                <Modal
                  toggleIsEdit={toggleIsEdit}
                  localTitle={localTitle}
                  setLocalTitle={setLocalTitle}
                  updatedAt={updatedAt}
                  done={done}
                  handleCheck={handleCheck}
                  handleClickEdit={handleClickEdit}
                  handleClickRemove={handleClickRemove}
                />
              </div>
            </>
          )}
          <div>{localTitle}</div>
        </div>
      </div>
      <div className="item-btns">
        <button onClick={addBookmark}>즐찾</button>
        <button onClick={toggleIsEdit}>수정</button>
        <button onClick={handleClickRemove}>삭제</button>
      </div>
    </li>
  );
};

export default React.memo(TodoItem);
