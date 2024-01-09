const Bookmark = ({ bookmarkList, setBookmarkList }) => {
  return (
    <div>
      <ul>
        {bookmarkList.map((it, idx) => (
          <li key={idx}>
            {it}
            {/* <button>추가</button>
            <button>삭제</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmark;
