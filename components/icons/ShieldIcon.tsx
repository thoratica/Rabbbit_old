const ShieldIcon: React.FC<{ size: number; color: string }> = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fill={color}
        fillRule="evenodd"
        className="transition-colors duration-300"
        d="M12.707 2.293a1 1 0 0 0-1.414 0c-.81.81-1.973 1.29-3.183 1.54-1.202.248-2.347.246-3 .173A1 1 0 0 0 4 5v9c0 1.3.568 2.449 1.304 3.395.738.948 1.697 1.763 2.615 2.419a21.859 21.859 0 0 0 3.66 2.093l.018.008.006.003h.003a1 1 0 0 0 .788.001L12 21c.394.92.395.919.395.919l.002-.001.005-.003.02-.008.065-.029a21.482 21.482 0 0 0 1.07-.523 21.95 21.95 0 0 0 2.524-1.541c.918-.656 1.877-1.47 2.615-2.419C19.432 16.45 20 15.3 20 14V5a1 1 0 0 0-1.11-.994c-.653.073-1.798.075-3-.173-1.21-.25-2.373-.73-3.183-1.54zM12 21l-.394.919L12 21z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ShieldIcon;
