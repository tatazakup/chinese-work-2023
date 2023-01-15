import { useRef } from "react";

interface BtnProps {
  id: string;
  className?: string;
  onClick: () => unknown;
}

const Button = (props: BtnProps) => {
  const { id, className = 'btn btn-rp btn-size', onClick } = props;
  const ref = useRef<HTMLInputElement>(null);

  const onClickBtn = () => {
    // ref.current?.classList.add("animation");
    // setTimeout(() => onClick(), 2000);
    setTimeout(() => onClick(), 200);
  };

  return (
    <div
      ref={ref}
      className={className}
      id={id}
      onClick={() => onClickBtn()}>
      <div className="fireworks"></div>
    </div>
  );
};

interface TPBtnProps {
  top?: number
  left?: number
  onClick: () => unknown
}

const TransparentButton = (props: TPBtnProps) => {
  const {
    top = 0,
    left = 0,
    onClick,
  } = props;

  return (
    <div className="tp-btn" style={{ top: top, left: left }} onClick={onClick}>
        
    </div>
  )
}

export { Button, TransparentButton as TPButton };
