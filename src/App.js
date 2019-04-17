import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './components/NavBar'
import OutputWindow from './components/output';
import ReactAce from './components/acesession';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

import FileTreeComponent from './components/filetreecomponent';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              Code Box
           </TypoGraphy>
          <NavBar />
          </Toolbar>
        </AppBar>
        <SplitterLayout>
        <div>
        <FileTreeComponent />
        </div>
        <div>
        <SplitterLayout vertical = {true}>
        <div>
        <OutputWindow />
        </div>
      </SplitterLayout>
        
        </div>
      </SplitterLayout>
      



      </div>
    );
  }
}
export default App;