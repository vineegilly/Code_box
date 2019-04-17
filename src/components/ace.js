import React from 'react';

// Import Brace and the AceEditor Component
import brace from 'brace';
import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/github';

export default class ReactAce extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state= {
        
         }
        this.onChange = this.onChange.bind(this);
        this.onRunClick = this.onRunClick.bind(this);
        console.log(this.props.action);
    }

    onChange(newValue) {
         console.log('change', newValue);
         console.log(this.refs.ace.editor.getValue());
    }
    onRunClick (){
        this.props.action(this.refs.ace.editor.getValue());
    }

    render() {
        return (
            <div>
                
                <div className="editorWrap">
                <button onClick={this.onRunClick}>Run</button>
                <AceEditor
                    mode="java"
                    theme="github"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }} 
                    value="// Write your Java code here." 
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                    ref="ace"
    

                />
                </div> 
            </div>
        );
    }
}
