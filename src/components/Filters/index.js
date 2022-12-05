import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

import filtersSlice from "./filtersSlice";

const { Search } = Input;

export default function Filters() {
  const [status, setStatus] = useState("All");

  const [searchText, setSearchText] = useState("");

  const [priority, setPriority] = useState([]);

  const dispatch = useDispatch();

  const handleSearchText = (e) => {
    dispatch(filtersSlice.actions.search(e.target.value));
    setSearchText(e.target.value);
  };

  const handleFilter = (e) => {
    dispatch(filtersSlice.actions.status(e.target.value));
    setStatus(e.target.value);
  };

  const handlePriority = (value) => {
    dispatch(filtersSlice.actions.priorities(value));
    setPriority(value);
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={searchText}
          onChange={handleSearchText}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleFilter}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          value={priority}
          style={{ width: "100%" }}
          onChange={handlePriority}
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
      </Col>
    </Row>
  );
}
