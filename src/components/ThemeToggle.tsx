import { FunctionComponent } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useAppContext } from '../context';

const ThemeToggle: FunctionComponent = () => {
  const { isDarkTheme, toggleDarkTheme } = useAppContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export { ThemeToggle };
