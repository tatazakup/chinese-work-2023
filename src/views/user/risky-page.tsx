import { FC, useState } from "react";
import axios from "axios";

const RiskyPage: FC = (): JSX.Element => {
  const [pause, setPause] = useState(true);

  const onRandom = () => {
    axios.post(`http://192.168.1.166:5555/apis/action`, {
      number: Math.floor(Math.random() * 50) + 1,
    });
    setPause(!pause);
  };

  return (
    <>
      <div className="user-wrapper">
        <div className="fortune-teller-container">
          <div id="fortune-teller" className={`${pause && "pause"}`}></div>

          <button className="default" onClick={() => onRandom()}>
            Random Number
          </button>
        </div>
      </div>
    </>
  );
};

export default RiskyPage;
