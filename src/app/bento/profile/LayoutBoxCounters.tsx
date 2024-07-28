import BoxCounter from "./BoxCounter";

const layoutBoxCounters = () => {
  const boxCounterMock = [
    { count: 4, title: "Experiencia", icon: "icon-[material-symbols--history]" },
    { count: 5, title: "Proyectos", icon: "icon-[ion--flag]" },
    { count: 30, title: "Clientes", icon: "icon-[fa-solid--hands-helping]" },
  ];

  return (
    <div className="flex gap-3 h-full flex-wrap md:flex-nowrap justify-between w-full ">
      {boxCounterMock.map((e, i) => (
        <BoxCounter key={i} count={e.count} title={e.title} icon={e.icon} />
      ))}
    </div>
  );
};

export default layoutBoxCounters;
