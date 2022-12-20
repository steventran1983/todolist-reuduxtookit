import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import fakeApi from "./components/fakeApi/fakeApi";
import { useEffect } from "react";
import { fecthTodos } from "./components/TodoList/todoListSlice";
import { useDispatch } from "react-redux";
const { Title } = Typography;

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fecthTodos())
  },[])

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div
      style={{
        width: 1200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
