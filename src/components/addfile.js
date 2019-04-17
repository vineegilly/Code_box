import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            textFieldValue: ''
          };
    }
  

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (e) => {
    this.setState({
        textFieldValue: e.target.value
    });
  }

  AddFile = (e) => {
    this.handleClose();
    this.props.action(this.state.textFieldValue);
  }




  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add new File
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add File Name with extension (e.g., hello.js)</DialogTitle>
          <DialogContent>
            <TextField label="File Name" id="name" value={this.state.textFieldValue} onChange={this.handleChange}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.AddFile} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

//export default (FormDialog);