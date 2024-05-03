import React from "react";

function NavItems({ items }) {
  return (
    <ul style={{ listStyleType: "none", padding: '10px' }} className="flex flex-col gap-8">
      {items.map((item, index) => (
        <li key={index}>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            <a href={item.link}>{item.text}</a>
          </button>
        </li>
      ))}
    </ul>
  );
}

function Resources() {
  const navItems = [
    { text: "Classes", link: "/" },
    { text: "Sessions", link: "/about" },
    { text: "Mocks", link: "/services" },
    { text: "Demo", link: "/contact" },
  ];

  return (
    <div className="p-10">
      <NavItems items={navItems} />
    </div>
  );
}

export default Resources;
