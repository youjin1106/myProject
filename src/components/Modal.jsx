import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  toggleIsEdit,
  localTitle,
  setLocalTitle,
  updatedAt,
  done,
  handleCheck,
  handleClickEdit,
  handleClickRemove,
}) => {
  const checkboxRef = useRef(null);
  const textareaRef = useRef(null);
  const [latestEditTime, setLatestEditTime] = useState(updatedAt);

  useEffect(() => {
    if (done) {
      checkboxRef.current.checked = true;
    }
    textareaRef.current.focus();
  }, []);

  const closeToggle = (e) => {
    if (e.target.className === "list-modal-background") toggleIsEdit();
  };

  const timeDataSet = (time) => {
    if (!time) {
      time = new Date();
    }
    const d = new Date(time).toDateString().split(" ");
    const t = new Date(time).toTimeString().split(" ")[0];
    const [, month, date, year] = d;
    return year + " " + month + " " + date + " " + t;
  };

  const updatedTime = latestEditTime
    ? timeDataSet(updatedAt)
    : timeDataSet(latestEditTime);

  return (
    <>
      {createPortal(
        <div className="list-modal-background" onClick={closeToggle}>
          <div className="list-modal">
            <div className="list-modal__info-area">
              <div className="list-modal__info-area__edit">
                <input
                  type="checkbox"
                  ref={checkboxRef}
                  onChange={handleCheck}
                />
                <textarea
                  className="list-modal__info-area__textarea"
                  value={localTitle}
                  ref={textareaRef}
                  onChange={(e) => setLocalTitle(e.target.value)}
                  onFocus={(e) =>
                    (e.target.selectionStart = e.target.value.length)
                  }
                />
              </div>
              <span className="list-modal__info-area__date">
                최신 수정일 {updatedTime}
              </span>
            </div>
            <div className="list-modal__button-area">
              <button onClick={handleClickEdit}>수정완료</button>
              <button onClick={handleClickRemove}>삭제</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
