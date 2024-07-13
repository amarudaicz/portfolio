export interface ChipProps {
  title: string;
  icon?: string;
  className?:string;
}

const Chip = ({ title, icon, className }: ChipProps) => {
  return (
    <span className={`flex w-fit justify-center items-center px-4 py-2 gap-1 rounded-full border  ${className}`}>
      <i className={`${icon} `}></i>
      {title ? <span className="text-nowrap font-medium">{title}</span> : null}
    </span>
  );
};

export default Chip;
