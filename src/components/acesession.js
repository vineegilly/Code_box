import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ace from 'ace-builds';

// Import Brace and the AceEditor Component
import brace from 'brace';
import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/mode/python';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/github';


class ReactAce extends React.Component {

    // static propTypes = {
    //  // mode: React.PropTypes.string,
    // //  content: React.PropTypes.string,
    // };
    state = {
      editor: null,
      files: [],
      newFile: ''
    }
  
    static defaultProps = {
      mode: 'javascript',
      code: '//write your code here',
    };
    
    constructor() {
      super()
      this.och = this.och.bind(this);
      this.changeFile = this.changeFile.bind(this);
      this.getValue = this.getValue.bind(this);
    }
  
    componentDidMount(){
      const node = ReactDOM.findDOMNode(this.refs.root);
      const editor = ace.edit(node);
      editor.setTheme("ace/theme/clouds");
      editor.getSession().setMode("ace/mode/javascript");
      editor.setShowPrintMargin(false);
      editor.setOptions({minLines: 25});
      editor.setOptions({maxLines: 50});
      this.setState({editor})
    }
    
  och() {
    const filetypes = {
      js: 'ace/mode/javascript',
      java: 'ace/mode/java',
      py: 'ace/mode/python',
    }
    let fileExt = this.state.newFile.split('.');
    fileExt = fileExt[fileExt.length -1];
    console.log(filetypes[fileExt])
    var sess = ace.createEditSession('', filetypes[fileExt]); 
    
    this.state.editor.setSession(sess);
    const file = {
      name: this.state.newFile,
      session: sess
    }
    this.setState({files: [...this.state.files, file]})
  }
  changeFile(i) {
    this.state.editor.setSession(this.state.files[i].session);
  }
  getValue() {
    console.log(this.state.editor.getSession().getValue())
  }
    render() {
      const style = {flexGrow: '2', fontSize: '14px !important',border: '1px solid lightgray'};
      const styleCont = { display: 'flex'};
      const styleSide = { flexGrow: '1'}
        return (
          <div style={styleCont}>
            <div style={styleSide}>
              <input type="text" value={this.state.newFile} onChange={(e) => this.setState({newFile: e.target.value})}/>
            <button onClick={this.och}>set other session</button>
            <button onClick={this.getValue}>Run</button>
              <ul>
                {this.state.files.map((file, i) => {
                  return <button onClick={() => this.changeFile(i)}>{file.name}</button>
                })}
              </ul>
            </div>
          <div ref="root" style={style}>
            {this.props.code}
          </div>
          </div>
        );
    }
  }
  
  export default ReactAce;