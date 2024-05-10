import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome YUHOOO</h1>
        <nav>
          <ul className="flex space-x-4">

            <li>
              <a>Campilan, Andre Jimm R.</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;