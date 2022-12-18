import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { todosRemainSelector } from "../../redux/selectors";
import todoListSlice from "./todoListSlice";
import fakeApi from "../fakeApi/fakeApi";

export default function TodoList() {
  const todoList = useSelector(todosRemainSelector);
  const inputRef = useRef();
  const [userInput, setUserInput] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  // const handleAddButtonClick = () => {
  //   const data = {
  //     id: uuidv4(),
  //     name: userInput,
  //     priority: priority,
  //     completed: false,
  //   };
  //   dispatch(todoListSlice.actions.addTodo(data));
  //   setUserInput("");
  //   setPriority("Medium");
  //   inputRef.current.focus();
  // };

  const handleAddButtonClick = async () => {
    try {
      const res = await fetch("/api/todo", {
        method: "POST",
        body: JSON.stringify({
          id: uuidv4(),
          name: userInput,
          priority: priority,
          completed: false,
        }),
      });
      const res_2 = await fetch("/api/todos");
      const data_2 = res_2.json();
      console.log(data_2);
      setUserInput("");
      inputRef.current.focus();
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todoId={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={userInput} onChange={handleInput} ref={inputRef} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
