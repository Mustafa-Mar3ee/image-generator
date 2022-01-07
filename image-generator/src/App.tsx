/* eslint-disable jsx-a11y/alt-text */
import "antd/dist/antd.css";
import { Col, Row, Typography } from "antd";
import "./App.css";

import ImageWithButtons from "./components/image/index";
import Menu from "./components/menu/index";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState());
  const { Text } = Typography;

  return (
    <Row
      style={{
        padding: "8rem",
        height: "100vh",
        backgroundImage: " linear-gradient(180deg, #2af598 0%, #009efd 100%)",
      }}
      gutter={[0, 32]}
    >
      <Col span={24}>
        <Text style={{ fontSize: "2rem", color: "#fff" }}>
          ALPACA GENERATOR BY MUSTAFA
        </Text>
      </Col>
      <Col span={12}>
        {" "}
        <ImageWithButtons dispatch={dispatch} state={state} />
      </Col>
      <Col span={12}>
        {" "}
        <Menu dispatch={dispatch} />
      </Col>
    </Row>
  );
}

export default App;
