import { create } from "zustand";
import Todo, {
  deleteTodo,
  deleteTodos,
  editTodo,
  insertTodo,
} from "../api/Todo";

export const useTodoStore = create((set) => ({
  todoList: [],
  setTodoList: (todoList) => set({ todoList }),
  getTodoList: async () => {
    const getData = await Todo();
    const initData = getData.map((it) => {
      return {
        id: it.id,
        order: it.order,
        title: it.title,
        done: it.done,
        createdAt: it.createdAt,
        updatedAt: it.updatedAt,
      };
    });
    set({ todoList: initData });
  },
  onCreate: async (title) => {
    const createdData = await insertTodo(title);
    const newTodo = {
      title: createdData.title,
      id: createdData.id,
      done: createdData.done,
      createdAt: createdData.createdAt,
      updatedAt: createdData.updatedAt,
    };
    set((prev) => ({
      todoList: [newTodo, ...prev.todoList],
    }));
  },
  onRemove: async (targetId) => {
    await deleteTodo(targetId);
    set((prev) => {
      const newTodoList = prev.todoList.filter((it) => it.id !== targetId);
      return { todoList: newTodoList };
    });
  },
  onEdit: async (targetId, title, done) => {
    await editTodo(targetId, title, done);
    set((state) => ({
      todoList: state.todoList.map((it) =>
        it.id === targetId ? { id: targetId, title: title, done: done } : it
      ),
    }));
  },
  onRemoveCheckedAll: async (idList) => {
    await deleteTodos(idList);
    set((state) => {
      const newList = state.todoList.filter((list) => list.done === false);
      return {
        todoList: newList,
      };
    });
  },
  bookmarkList: [],
  setBookmarkList: (bookmarkList) => set({ bookmarkList }),
  getBookmarkList: () => {
    const res = JSON.parse(localStorage.getItem("title"));
    let bookmarkArr = [];
    if (res) bookmarkArr = res.split(",");
    set({ bookmarkList: bookmarkArr });
  },
}));
