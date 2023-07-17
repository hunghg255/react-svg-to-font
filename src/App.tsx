import { GithubCorners } from 'react-gh-corners';

import './App.css';
import { Icon } from '@/components/Icon';

function App() {
  return (
    <div className='App'>
      <h1>Convert Svg to font</h1>
      <Icon iconName='svgtoicon-react' style={{ marginRight: 12, fontSize: 70, color: 'red' }} />
      <Icon iconName='svgtoicon-adobe' style={{ marginRight: 12, fontSize: 70, color: 'blue' }} />
      <Icon iconName='svgtoicon-git' style={{ marginRight: 12, fontSize: 70, color: 'green' }} />
      <Icon iconName='svgtoicon-left' style={{ marginRight: 12, fontSize: 70, color: 'yellow' }} />
      <Icon
        iconName='svgtoicon-stylelint'
        style={{ marginRight: 12, fontSize: 70, color: 'dodgerblue' }}
      />
      <Icon iconName='svgtoicon-demo' style={{ marginRight: 12, fontSize: 70, color: 'violet' }} />

      <GithubCorners href='https://github.com/hunghg255/svg-to-font' />
    </div>
  );
}

export default App;
