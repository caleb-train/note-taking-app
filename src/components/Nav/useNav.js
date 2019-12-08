import {
  useRef,
  useEffect
} from 'react'


const useNav = props => {
  const {
    navBackground,
    setNavBackground,
  } = props

  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    var elem = document.querySelector("main");
    const nextDiv = document.querySelector("body");
    const handleScroll = () => {
      var bounding = elem.getBoundingClientRect();

      const show = bounding.y < 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    nextDiv.addEventListener("scroll", handleScroll);
    return () => {
      nextDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);
}

export default useNav