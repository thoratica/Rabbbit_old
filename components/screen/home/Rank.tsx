const Rank: React.FC<{ title: string; items: { title: string; id: string }[] }> = ({ title, items }) => {
  return (
    <section className="px-4 mt-3">
      <h3 className="text-[19px] font-semibold">{title}</h3>
      {items.map((item, i) => {
        return (
          <a className="flex items-center py-[3px]" key={item.id}>
            <div className="bg-blue-50 flex items-center justify-center h-5 w-5 mr-1.5 rounded-md">
              <div className="text-blue-600 text-sm font-medium w-max leading-none">{i + 1}</div>
            </div>
            <div className="text-gray-700 font-medium">{item.title}</div>
          </a>
        );
      })}
    </section>
  );
};

export default Rank;
