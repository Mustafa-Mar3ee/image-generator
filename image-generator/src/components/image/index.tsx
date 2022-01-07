import { FileImageTwoTone, RetweetOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import saveAs from "file-saver";
import mergeImages from "merge-images";
import React from "react";
import { FunctionComponent, useReducer } from "react";
import useImage from "../../helper/image";
import { initialState, reducer } from "../../reducer";
import { Action, State } from "../../reducer/model/types";
import noise from "./../../alpaca/ears/nose.png";

interface ImageWithButtonsProps {
  dispatch: React.Dispatch<Action>;
  state: State;
}

const ImageWithButtons: FunctionComponent<ImageWithButtonsProps> = ({
  state,
  dispatch,
}) => {
  let ears = useImage("ears", state.ears);
  let eyes = useImage("eyes", state.eyes);
  let leg = useImage("leg", state.leg);
  let neck = useImage("neck", state.neck);
  let hair = useImage("hair", state.hair);
  let mouth = useImage("mouth", state.mouth);
  let accessorief = useImage("accessories", state.accessorie);
  let backgrounds = useImage("backgrounds", state.backgrounds);
  const downloadMe = async () => {
    let res = await mergeImages([
      backgrounds.image,
      hair.image,
      neck.image,
      leg.image,
      ears.image,
      noise,
      mouth.image,
      eyes.image,
      accessorief.image,
    ]);
    saveAs(res, "mustafa.png");
  };
  return (
    <>
      <Col span={24} style={{ position: "relative", height: "30rem" }}>
        {" "}
        <img
          height={420}
          width={420}
          src={accessorief?.image}
          style={{ position: "absolute", zIndex: 12 }}
        />{" "}
        <img
          height={420}
          width={420}
          src={backgrounds?.image}
          style={{ position: "absolute" }}
        />{" "}
        <img
          height={420}
          width={420}
          src={ears?.image}
          style={{ position: "absolute" }}
        />
        <img
          height={420}
          width={420}
          src={eyes?.image}
          style={{ position: "absolute", zIndex: 12 }}
        />{" "}
        <img
          height={420}
          width={420}
          src={hair?.image}
          style={{ position: "absolute" }}
        />{" "}
        <img
          height={420}
          width={420}
          src={mouth?.image}
          style={{ position: "absolute", zIndex: 12 }}
        />
        <img
          height={420}
          width={420}
          src={leg?.image}
          style={{ position: "absolute" }}
        />{" "}
        <img
          height={420}
          width={420}
          src={neck?.image}
          style={{ position: "absolute" }}
        />{" "}
        <img
          height={420}
          width={420}
          src={noise}
          style={{ position: "absolute" }}
        />
      </Col>
      <Col span={24}>
        <Button
          style={{ width: "12.5rem", marginRight: "1.3rem" }}
          size="large"
          icon={<RetweetOutlined />}
          onClick={() => dispatch({ type: "random", payload: "" })}
        >
          RANDOM
        </Button>
        <Button
          size="large"
          icon={<FileImageTwoTone />}
          style={{ width: "12.5rem" }}
          onClick={downloadMe}
        >
          Download
        </Button>
      </Col>
    </>
  );
};

export default ImageWithButtons;
