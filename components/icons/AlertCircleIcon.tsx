const AlertCircleIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm1 9a1 1 0 1 0-2 0 1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AlertCircleIcon;
