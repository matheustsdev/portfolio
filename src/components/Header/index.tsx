import { useEffect, useState } from 'react';
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';

export function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.outerWidth <= 460) {
      setIsMobile(true);
    }
  }, []);

  return isMobile ? <Mobile /> : <Desktop />;
}
