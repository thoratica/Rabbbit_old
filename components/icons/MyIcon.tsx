const MyIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="8"
        r="5"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21a8 8 0 1 0-16 0" />
      <path
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z"
      />
    </svg>
  );
};

export default MyIcon;
