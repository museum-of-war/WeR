import { useCallback, useEffect, useState } from 'react';

const enableBodyScroll = () => {
  document.body.style.overflow = 'auto';
};

const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

export function usePreventBodyScroll() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    hidden ? disableBodyScroll() : enableBodyScroll();

    return enableBodyScroll;
  }, [hidden]);

  const disableScroll = useCallback(() => setHidden(true), []);
  const enableScroll = useCallback(() => setHidden(false), []);

  return { disableScroll, enableScroll };
}
