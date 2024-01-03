import { useState } from "react";
import Checkbox from "./Checkbox";

const TodoItem = ({
  id,
  title,
  createdAt,
  updatedAt,
  done,
  onRemove,
  onEdit,
}) => {
  const [checked, setChecked] = useState(done);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localTitle, setLocalTitle] = useState(title);

  const handleClickRemove = () => {
    onRemove(id);
  };

  const handleClickEdit = () => {
    onEdit(id, localTitle, checked);
    //수정후 수정중 해제
    toggleIsEdit();
  };

  const handleCheck = (e) => {
    console.log(title + e.target.checked);
    setChecked(e.target.checked);
    if (e.target.checked) {
      onEdit(id, localTitle, true);
    } else {
      onEdit(id, localTitle, false);
    }

    // setChecked((checked) => !checked);
    console.log(checked);
    //작동확인
    // onEdit(id, localTitle, checked);
  };

  return (
    <li className="list-item">
      <div className="item-title">
        <input type="checkbox" checked={checked} onChange={handleCheck} />
        <div>
          {isEdit ? (
            <textarea
              className="item-edit"
              value={localTitle}
              onChange={(e) => setLocalTitle(e.target.value)}
            />
          ) : (
            <div>{localTitle}</div>
          )}
        </div>
      </div>
      <div className="item-btns">
        {isEdit ? (
          <>
            <button onClick={handleClickEdit}>수정 완료</button>
          </>
        ) : (
          <>
            <button onClick={toggleIsEdit}>수정</button>
            <button onClick={handleClickRemove}>삭제</button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
