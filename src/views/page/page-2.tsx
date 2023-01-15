import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TPButton, Button } from "../../components/buttons/button";
import { Siemsi } from "../../components/icons/siamsi";

const Page2: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <div className="full-bg" id="bg-2">
        <div className="selection-wrapper">
          { [0, 1, 2, 3].map((vs, is) => [110, 290, 465, 640, 820].map((value, index) => <TPButton key={index} top={840 + (140 * vs - 1)} left={value} onClick={() => navigate((index + (5 * vs) + 1).toString())} />)) }
        </div>
        <Button id="rd-btn" className='btn btn-lp btn-size' onClick={() => navigate(`/`)} />
        <Siemsi top={1450} left={430} size="sm" />
        <Button id="pv-btn" className='btn btn-rp btn-size' onClick={() => navigate(-1)} />
      </div>
    </>
  );
};

export default Page2;
