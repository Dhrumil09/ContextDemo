import {createContext} from 'react';

const navContext = createContext({
  isshow: true,
  setShow: (show) => {}
});

export default navContext;
