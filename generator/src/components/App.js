import { useState } from "react";
import { connect } from "react-redux";
import  '../styles/index.css'

import Form from 'react-bootstrap/Form';

import MemeItem from "./MemeItem";
import MyMemes from "./MyMemes";

function App(props) {
  const [memeLimit, setMemeList] = useState(10);
  const [text0, setText0] = useState('');
  const [text1, setText1] = useState('');
  return (
    <div className="App">
        <h2><u>Welcome to the Meme Generator!</u></h2>
        <MyMemes />
        <h4><i>Write Some Text</i></h4>
        <Form className="form_edit">
            <Form.Group className="form_edit">
                <Form.Label className="text">Top</Form.Label>
                {' '}
                <Form.Control
                    type="text"
                    onChange={event => setText0(event.target.value)}
                >
                </Form.Control>
            </Form.Group>
            {' '}
            <Form.Group className="form_edit">
                <Form.Label className="text">Bottom</Form.Label>
                <Form.Control 
                    type="text"
                    onChange={event => setText1(event.target.value)}
                >  
                </Form.Control>
            </Form.Group>
        </Form>
        {
            props.memes.slice(0, memeLimit).map((meme, index) => {
                return (
                    <MemeItem 
                        key={index} 
                        meme={meme} 
                        text0={text0}
                        text1={text1}
                    />
                )
            })
        }
        <div className="meme-button" onClick={() => {
            setMemeList(memeLimit + 10)
        }}>
            Load 10 more memes ...
        </div>
    </div>
  );
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, null)(App);
