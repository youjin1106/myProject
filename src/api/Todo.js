const Todo = async () => {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo",
        username: "KDT7_JangYouJin",
      },
    }
  ).then((res) => res.json());

  return res;
};

export default Todo;

export const insertTodo = async (title) => {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo",
        username: "KDT7_JangYouJin",
      },
      body: JSON.stringify({
        title,
      }),
    }
  ).then((res) => res.json());
  return res;
};

export const deleteTodo = async (id) => {
  const res = await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo",
        username: "KDT7_JangYouJin",
      },
    }
  ).then((res) => res.json());
  return res;
};

export const editTodo = async (id, title, done) => {
  const res = await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo",
        username: "KDT7_JangYouJin",
      },
      body: JSON.stringify({
        title,
        done,
      }),
    }
  ).then((res) => res.json());
  return res;
};

export const deleteTodos = async (ids) => {
  try {
    const res = await fetch(
      "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/deletions",
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          apikey: "KDT7_GrZ1eYBo",
          username: "KDT7_JangYouJin",
        },
        body: JSON.stringify({
          todoIds: ids,
        }),
      }
    ).then((res) => res.json());
    return res;
  } catch (err) {
    console.err("Error : ", err);
  }
};
