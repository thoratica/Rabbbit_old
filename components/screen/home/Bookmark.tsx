const Bookmark: React.FC<{ title: string; items: { thumb: string; title: string; id: string }[] }> = ({
  title,
  items,
}) => {
  return (
    <section className="mt-3">
      <h3 className="text-[19px] font-semibold mx-4 mb-0.5">{title}</h3>
      <div className="overflow-x-auto">
        <div className="flex gap-x-2 w-max mx-4">
          {[...items, ...items, ...items, ...items, ...items, ...items, ...items].map((item) => {
            return (
              <a key={item.id}>
                <img
                  src={item.thumb}
                  className="h-[84px] object-cover object-top rounded-md"
                  style={{ aspectRatio: "16 / 9" }}
                />
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bookmark;
