import React from 'react';

import { useProducts } from '../../providers/Products';
import { Category } from '../../utils/types';
import { MenuWrapper } from './SideMenu.styled';

interface MenuProps {
  categories: Category[];
}

function SideMenu({ categories }: MenuProps) {
  const { activeCategories, addCategory, removeCategory } = useProducts();

  function handleFilterCategory(categoryTitle: string) {
    if (!activeCategories.includes(categoryTitle.toLowerCase())) {
      addCategory(categoryTitle);
    } else {
      removeCategory(categoryTitle);
    }
  }

  return (
    <MenuWrapper tabIndex={0}>
      <h4 className="sidemenu-title hidden-tablet">CATEGORIES</h4>
      <ul className="sidemenu-list">
        {categories.map((category) => (
          <li
            className={`sidemenu-item ${
              activeCategories.includes(category.title.toLowerCase()) ? 'activated' : ''
            }`}
            key={category.id}
            onClick={() => handleFilterCategory(category.title)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </MenuWrapper>
  );
}

export default SideMenu;
