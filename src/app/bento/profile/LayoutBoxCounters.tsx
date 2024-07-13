import BoxCounter from "./BoxCounter";

const layoutBoxCounters = () => {
  const boxCounterMock = [
    { count: 4, title: "Experiencia", icon: "desktop" },
    { count: 5, title: "Proyectos", icon: "flag-fill" },
    { count: 30, title: "Clientes", icon: "users" },
  ];

  return (
    <div className="flex gap-3 flex-wrap md:flex-nowrap justify-between w-full ">
      {boxCounterMock.map((e, i) => (
        <BoxCounter key={i} count={e.count} title={e.title} icon={e.icon} />
      ))}
    </div>
  );
};

export default layoutBoxCounters;
