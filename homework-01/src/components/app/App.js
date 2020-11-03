import './App.css';

import Navigation from '../navigation';
import Content from '../content';
import Footer from '../footer';

const App = (props) => {
  return <div className={`App ${props.variant}`}>
      <Navigation variant={props.variant} />
      <Content variant={props.variant} />
      <Footer variant={props.variant} />
    </div>
}

export default App;
