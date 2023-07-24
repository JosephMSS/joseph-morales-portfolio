import { NAVIGATION_ITEMS_LIST } from "../../models";

export const NavigationDots = ({ active }) => {
  const navItems = NAVIGATION_ITEMS_LIST;

  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};
