import SafemodeChip from "./SafemodeChip";

const Greeting: React.FC<{
  name?: string | undefined;
  onState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  setChildren: React.Dispatch<React.SetStateAction<JSX.Element>>;
}> = ({ name, onState, setState, setChildren }) => {
  return (
    <section className="px-4 h-[76px] flex items-end">
      <h2 className="text-[22px] font-bold">안녕하세요{name && `, ${name}님`}!</h2>
      <div className="ml-auto mb-0.5">
        <SafemodeChip onState={onState} setState={setState} setChildren={setChildren} />
      </div>
    </section>
  );
};

export default Greeting;
