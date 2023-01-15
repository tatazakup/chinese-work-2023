import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QRCodeSVG } from 'qrcode.react';

const QR = {
  1: 'https://drive.google.com/file/d/1lRBYL3gLEAgWXb_Z2mrIMoAqBPo9CHDu/view',
  2: 'https://drive.google.com/file/d/1esIQy5D_9n5CaQXFTB_ptFo0IBxQKsQj/view',
  3: 'https://drive.google.com/file/d/1PUH-J8LISOTSMqQT-VNMwGJiOwMlhNIF/view',
  4: 'https://drive.google.com/file/d/1_nj7M4WBOOIk9GurmSFiHUgdpdugdg1f/view',
  5: 'https://drive.google.com/file/d/155bLRtzljmDKsZzpKkPHpiWnqP04znw6/view',
  6: 'https://drive.google.com/file/d/12E60fIr8STC-kS2QhyfJocSwu1zjN84N/view',
  7: 'https://drive.google.com/file/d/1ESEEaM0JGiROXjAgSIFBG8cZpS1jGoE9/view',
  8: 'https://drive.google.com/file/d/1uRRPQky51O_TEQusLxCKM8yKtwJ5_QvB/view',
  9: 'https://drive.google.com/file/d/15rs8G-I3t2ybjzkA4D2bYZ6FwfjZi6B8/view',
  10: 'https://drive.google.com/file/d/1fvipjPZjjfzlJV8tQbCxvYojwC831yzp/view',
  11: 'https://drive.google.com/file/d/14VaodPYoOX0r8QVl-Nj_33wSKCNrBFrn/view',
  12: 'https://drive.google.com/file/d/1hkLew1AdxwuRP-sUOPBcQJsdubBnNHKX/view',
  13: 'https://drive.google.com/file/d/1mJwASIifk4XVFlOcFD9uAE7sY8LeqVXe/view',
  14: 'https://drive.google.com/file/d/1fGiS4FilxatKyDvypEmBB8c1t0KNJxOG/view',
  15: 'https://drive.google.com/file/d/16tqxZBaYppo_q05eqPH8UnUx9YlRcnMd/view',
  16: 'https://drive.google.com/file/d/1eXsqU-3_r4dIZEIPoE2-dB3eE49XuKBH/view',
  17: 'https://drive.google.com/file/d/1-PYlIgVR_JJMqDo9gvzPkaypa0nnSjBe/view',
  18: 'https://drive.google.com/file/d/1ZHrVrl_xIpkQbSC5r2e7lune54vFGXvr/view',
  19: 'https://drive.google.com/file/d/1MMrDhWo8PWhE4PqQ9rpdkcqKB-qU11mE/view',
  20: 'https://drive.google.com/file/d/1t05h5ShBjOSQZ5gGk5f0gHmRD97Qcj-6/view',
}

const Page3: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { id = '1' } = useParams();

  return (
    <>
      <div className="full-bg bg-wrapper" id={`bg-c-qr-${id}`}>
        <div className="qr-wrapper">
          <QRCodeSVG value={Object.values(QR)[parseInt(id) - 1]} />
        </div>
        <div
          className="btn-lp btn-size"
          id="rd-btn"
          onClick={() => navigate(`/`)}></div>
        <div
          className="btn-rp btn-size"
          id="pv-btn"
          onClick={() => navigate(-1)}></div>
      </div>
    </>
  );
};

export default Page3;
