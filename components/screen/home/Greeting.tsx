const Greeting: React.FC<{ name?: string | undefined }> = ({ name }) => {
  return (
    <section className="px-4 pt-8">
      <h2 className="text-[22px] font-bold">안녕하세요{name && `, ${name}님`}!</h2>
    </section>
  );
};

export default Greeting;
