import { Button, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { FunctionComponent, useState } from "react";
import { Action, category } from "../../reducer/model/types";
import data from "./../../data.json";
interface MenuProps {
  dispatch: React.Dispatch<Action>;
}

const Menu: FunctionComponent<MenuProps> = ({ dispatch }) => {
  const [styles, setStyles] = useState<category>("accessorie");
  const getStyles = (key: any, e: any) => {
    setStyles(key);
    console.log(e.target);
    e.style.backgroundColor = "red";
  };
  return (
    <Row>
      <Col span={24}>
        <Title style={{ color: "#fff" }}>ACCESSORIZE THE ALPACA'S</Title>
      </Col>
      <Col
        span={16}
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(data).map((el, i) => (
          <Button
            size="large"
            id={`${i}`}
            style={{ margin: "0.5rem", borderRadius: "20px" }}
            onClick={(e) => getStyles(el, e)}
          >
            {el}
          </Button>
        ))}
      </Col>
      <Col span={24} style={{ marginTop: "1rem" }}>
        <Title style={{ color: "#fff" }}>STYLE</Title>
      </Col>
      {data[styles].map((el: any, i: any) => (
        <Col>
          <Button
            id={i}
            className="mu"
            size="large"
            style={{ margin: "0.5rem", borderRadius: "20px" }}
            onClick={() => {
              dispatch({ type: styles, payload: el });
            }}
          >
            {el.charAt(0).toUpperCase() + el.slice(1).replace(".png", "")}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default Menu;
