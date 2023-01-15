import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/buttons/button";
import { Siemsi } from "../../components/icons/siamsi";

const Page1: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <div className="full-bg" id="bg-1">
        <Siemsi top={1350} left={100} />
        <div id='mockup-siemsi' />
        <Button id="siemsi-btn" onClick={() => navigate(`selection`)} />
      </div>
    </>
  );
};

export default Page1;
