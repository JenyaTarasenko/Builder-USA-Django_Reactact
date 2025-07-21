import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


// компонент для прокрутки в самое начало всех компонентов
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // прокрутка вверх при переходе
  }, [pathname]);

  return null;
};

export default ScrollToTop;
