const BoxCounter = ({
  count,
  title,
  icon,
}: {
  count: number;
  title: string;
  icon: string;
}) => {
  return (
    <div className="flex-1 h-full flex flex-col gap-2 items-center justify-center py-3 px-2 rounded-2xl bg-neutral-900">

      <span className="font-bold text-4xl bg-gradient-to-b from-slate-100 to-neutral-800 bg-clip-text text-transparent flex items-center">
        {count}
        <span className="bg-gradient-to-b from-slate-100 to-violet-500 bg-clip-text text-transparent text-2xl">
          +
        </span>
      </span>

      <div className="w-full flex justify-center items-center gap-2 p-1 border rounded-full border-neutral-500 bg-neutral-900 bg-opacity-80">
        <i className={`${icon} text-violet-400`}></i>
        <h4 className="text-12">{title}</h4>
      </div>

    </div>
  );
};


export default BoxCounter
