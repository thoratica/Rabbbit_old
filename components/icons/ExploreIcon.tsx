const ExploreIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fill={color}
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm14.243-4.243L9.879 9.88l-2.122 6.364 6.364-2.122 2.122-6.364z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ExploreIcon;
