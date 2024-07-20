import TodoItem from "../TodoItem/TodoItem";
import "./todoList.css";
import FilterButtons from "../FilterButtons/FilterButtons";
import CorrectItem from "../TodoItem/CorrectItem";

const TodoList = ({ list, data, setData, status, setStatus }) => {
  const deleteTodo = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const setKey = (key, id) => {
    setData(
      data.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            [key]: !item[key],
          };
        } else {
          return {
            ...item,
            correct: false
          };
        }
      })
    );
  };

  const correctFunc = (text, id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            text,
            correct: false,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="todo-list">
      <FilterButtons setStatus={setStatus} status={status} />
      {list.map((item) => {
        if (item.correct) return (
            <CorrectItem
              correctFunc={correctFunc}
              setKey={setKey}
              item={item}
              key={item.id}
            />
          );
        return (
          <TodoItem
            deleteTodo={deleteTodo}
            status={status}
            setKey={setKey}
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;





