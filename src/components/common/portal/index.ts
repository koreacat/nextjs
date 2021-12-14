import {useRef, useEffect, useState, FC} from 'react'
import {createPortal} from 'react-dom'

interface PortalProps {
  selector: string
}

const Portal: FC<PortalProps> = ({children, selector}) => {
  const ref = useRef<Element>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector) as Element;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current as Element) : null;
};

export default Portal;
