const ChevronRightIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10 7 5 5-5 5" />
    </svg>
  );
};

export default ChevronRightIcon;
