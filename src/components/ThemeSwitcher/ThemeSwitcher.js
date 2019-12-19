import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default function ThemeSwitcher({switchLabel}) {
    console.log(switchLabel);
    
    return (
        <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="theme-switcher">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            {switchLabel}
          </label>
        )}
      </ThemeToggler>
    )
}
