export const ItemTimeline = ({ children }) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      {children}
    </li>
  );
};
