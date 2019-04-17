import cx from 'classnames';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Tree from './filetree/react-ui-tree.js';
import FormDialog from './addfile';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ace from 'ace-builds';
// Import a Mode (language)
import 'brace/mode/java';
import 'brace/mode/javascript';
import 'brace/mode/python';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/github';


class FileTreeComponent extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      active: null,
      outputArray: [],
      get newFileObj() {
        return this._newFileObj;
      },
      set newFileObj(value) {
        this._newFileObj = value;
      },
      editor: null,
      tree: {
          "module": "Root",
          "children": []
        }
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateTree = this.updateTree.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  

  renderNode = node => {
    return (
      <span
        className={cx('node', {
          'is-active': node === this.state.active
        })}
        onClick={this.onClickNode.bind(null, node)}
      >
        {node.module}
      </span>
    );
  };

  onClickNode = node => {
    this.setState({
      active: node
    });
    console.log(node);
    console.log(this.state.tree);
       this.state.editor.setSession(node.session);
  };

  componentDidMount(){
    console.log(this.props);
    const node = ReactDOM.findDOMNode(this.refs.root);
      const editor = ace.edit(node);
      editor.setTheme("ace/theme/clouds");
      editor.getSession().setMode("ace/mode/javascript");
      editor.setShowPrintMargin(false);
      editor.setOptions({minLines: 25});
      editor.setOptions({maxLines: 50});
      this.setState({editor})
  }

  render() {
    const style = {flexGrow: '2', fontSize: '14px !important',border: '1px solid lightgray'};
    
    return (
      <div className="app">
      <Button variant="outlined" color="primary" onClick={this.getValue}>
          Run
        </Button>
      <FormDialog action={this.updateTree}/>
        <div className="tree">
          <Tree
            paddingLeft={20}
            tree={this.state.tree}
            onChange={this.handleChange}
            isNodeCollapsed={this.isNodeCollapsed}
            renderNode={this.renderNode}
          />
        </div>
        <div className="inspector">
         
          
        </div>
        <div ref="root" style={style}>
            {this.props.code}
          </div>
          


      </div>
    );
  }

  handleChange = tree => {
    this.setState({
      tree: tree
    });
  };

  getValue() {
    for (var value of this.state.tree.children) {
      console.log(value);
      this.state.editor.setSession(value.session);
      console.log(this.state.editor.getSession().getValue());
      console.log(value.module);
     // this.setState({...this.state.newFileObj, codeVal: this.state.editor.getSession().getValue(), fileName:value.module});
     

      this.setState({
        newFileObj: {
              ...this.state.newFileObj,
              codeVal: this.state.editor.getSession().getValue()
        }
    })

    this.setState({ outputArray: [...this.state.outputArray, this.state.newFileObj] })

    }

    console.log(this.state.outputArray);
  }

  updateTree = (fileName) => {
    //file name is reached here from dialog popup.  
    const { tree } = this.state;
    const filetypes = {
      js: 'ace/mode/javascript',
      java: 'ace/mode/java',
      py: 'ace/mode/python',
    } 
    let fileExt = fileName.split('.');
    fileExt = fileExt[fileExt.length -1];
    console.log(filetypes[fileExt])
    var sess = ace.createEditSession('', filetypes[fileExt]); 
    
    this.state.editor.setSession(sess);

    console.log(this.state.editor);

    // const file = {
    //   name: fileName,
    //   session: sess
    // }
    // console.log(file);
    // this.setState({files: [...this.state.files, file]})
    // console.log(this.state.files);

    tree.children.push({ module: fileName, session: sess });
    this.setState({
      tree: tree
    });


    
  };


}

FileTreeComponent.protoTypes = {
  callback : PropTypes.func,
  }

export default FileTreeComponent;




