import React, { Component } from 'react'
import './App.css'
class createnote extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            id: 0
        }
    }
    render() {
        let addNotes = () => {
            let x = {
                title: document.getElementById('title').value,
                content: document.getElementById('textarea').value,
                id: this.state.id
            }
            this.setState({
                notes: [...this.state.notes, x],
                id: this.state.id + 1
            }, () => {
                console.log(this.state.notes);
            });
        }

        let deleteNote = (e) => {
            this.setState({
                notes:this.state.notes.filter(item => item.id!== e)
            }) 
            console.log(this.state.notes);
        }
        return (
            <div>
                <div className='createnotecointainer'>
                    <input id='title' type="text" className='inputclass' placeholder="Title"></input>
                    <textarea id='textarea' className='textarea'></textarea>
                    <button className='addbutton' onClick={addNotes}>Add</button>
                </div>
                <div className='notes'>
                    {this.state.notes.length >= 1 || this.state.notes !=null ? this.state.notes.map(eleme => <div className='notesElements' key={eleme.id}><span style={{ display: "block" }}><b>{eleme.title}</b></span><span style={{ marginTop: "20%" }}>{eleme.content}</span><button className='buttonstyle' onClick={() => deleteNote(eleme.id)}>Delete</button></div>) : <p></p>}
                </div>
            </div>
        )
    }
}
export default createnote