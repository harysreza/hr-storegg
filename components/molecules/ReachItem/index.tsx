export interface ReachItemProps {
  info1: string;
  info2: string;
}
export default function ReachItem(props: ReachItemProps) {
  const { info1, info2 } = props;
  return (
    <div className="me-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {info1}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {info2}
      </p>
    </div>
  );
}
