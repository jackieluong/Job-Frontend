const NavMenu = () => {
  const menuItems = [
    { name: "Việc làm", href: "#" },
    { name: "Hồ sơ & CV", href: "#", active: true },
    { name: "Công cụ", href: "#" },
    { name: "Cẩm nang nghề nghiệp", href: "#" },
    { name: "TopCV Pro", href: "#", badge: "Pro" },
  ];

  return (
    <nav>
      <ul className="flex space-x-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={`text-gray-800 hover:text-green-600 ${
                item.active ? "text-green-600 font-semibold" : ""
              }`}
            >
              {item.name}
              {item.badge && (
                <span className="ml-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-md">
                  {item.badge}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;