interface SiemsiProps {
  top?: number;
  left?: number;
  size?: 'sm' | 'md'
}
const Siemsi = (props: SiemsiProps) => {
  const {
    top = 0,
    left = 0,
    size = 'md'
  } = props;

  return <>
    <div className={`siemsi-wrapper ${size}`} style={{ top: top, left: left }} >
      <div className="siemsi-wood"></div>
      <div className="siemsi-cylinder"></div>
    </div>
  </>;
};

export { Siemsi };
