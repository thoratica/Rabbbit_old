const Bookmark: React.FC<{ title: string; items: { thumb: string; title: string; id: string }[] }> = ({
  title,
  items,
}) => {
  return (
    <section className="mt-3">
      <h3 className="text-lg font-bold mx-4 mb-0.5">{title}</h3>
      <div className="overflow-x-auto">
        <div className="flex gap-x-2 w-max mx-4">
          {[...items, ...items, ...items, ...items, ...items, ...items, ...items].map((item) => {
            return (
              <a key={item.id}>
                <img
                  src={item.thumb}
                  className="h-28 object-cover object-top rounded-xl"
                  style={{ aspectRatio: "16 / 9" }}
                />
                <div className="px-1 mt-1">
                  <div className="font-semibold">{item.title}</div>
                  <div className="flex">
                    <span className="text-sm text-gray-600 font-medium leading-4">
                      2일 전 <span className="text-gray-400">·</span> 금요일
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bookmark;
