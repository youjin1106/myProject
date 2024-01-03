import { useState } from "react";

const TodoEditor = ({ onCreate }) => {
  const [state, setState] = useState({
    title: "",
  });

  const handleSubmit = () => {
    onCreate(state.title);
    setState({ title: "" });
  };

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="editor-area">
      <textarea
        className="editor-area__textarea"
        onChange={handleChangeState}
        value={state.title}
        placeholder="할 일 입력"
        name="title"
      />
      <button className="submitBtn" onClick={handleSubmit}>
        추가
      </button>
    </div>
  );
};

export default TodoEditor;
