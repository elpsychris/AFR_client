import React from 'react'
import { Grid, GridRow, GridColumn, Segment, Button } from 'semantic-ui-react'

class Uploader extends React.Component {

    componentDidMount() {
        window.addEventListener('drop', this.handleDrop);
        window.addEventListener('dragenter', this.handleDragEnter);
        window.addEventListener('dragover', this.handleDragOver);
    }

    render() {
        return (
            <Segment>
                <form>
                    <p>Drag to input files for uploading</p>
                    <div class="drag-zone" onDragEnter={this.handleDragEnter} onDrop={this.handleDrop}><div>+</div></div>
                    <input type="file" id="file-input" multiple accept="image/*" onChange={this.handleFiles} />
                    <Button>Select some files</Button>
                </form>
            </Segment>
        )
    }

    handleDragEnter = (e) => {
        e.preventDefault()
    }

    handleDragLeave = () => {
        
    }

    handleDragOver = (e) => {
        e.preventDefault()
    }

    handleDrop = (e) => {
        e.preventDefault()
        let data = e.dataTransfer
        let files = data.files

        console.log(files);
        

        this.handleFiles(files)
    }

    handleFiles = () => {

    }
}

export default Uploader