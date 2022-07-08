import React, { Component } from 'react';

// react-styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiInfoCircle } from 'react-icons/bi';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Custom css
import './Sort.css';

// Component
import Bar from './Bar'
import AlgorithmData from '../../algorithms/AlgorithmData';

class Sorting extends Component {
    state = { 
        array: [],
        steps: [],
        colorKey: [],
        colors: [],
        timeouts: [],
        currStep: 0,
        count: 10,
        delay: 500,
        algorithm: this.props.algorithm,
        showModal: false,
        startDisabled: false
    } 

    componentDidMount(){
        this.generateElements();
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(this.props.algorithm !== nextProps.algorithm){
            this.changeAlgorithm(nextProps.algorithm);
        }
    }

    changeAlgorithm = (algo) => {
		this.clearTimeouts();
		this.clearColorKey();
		this.setState(
			{
				algorithm: algo,
				currStep: 0,
				steps: [
					this.state.steps[0]
				],
			},
			() => this.generateSteps()
		);
	};

    generateSteps = () => {
        let array = this.state.array.slice();
        let steps = this.state.steps.slice();
        let colors = this.state.colors.slice();
        let currAlgo = this.state.algorithm;

        AlgorithmData[currAlgo].component(array, 0, steps, colors);
  
        this.setState({
            steps: steps,
            colors: colors
        });
    }

    clearTimeouts = () => {
        this.state.timeouts.forEach(timeout => clearTimeout(timeout));
        this.setState({ timeouts: [] });
    }

    clearColorKey = () => {
        let blank = new Array(this.state.count).fill(0);
        this.setState({colorKey: blank, colors: [blank]});
    }

    generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    generateElements = () => {
        this.clearTimeouts();
        this.clearColorKey();
    
        let cnt = this.state.count;
        let tempArr = [];
        for(let i=0; i<cnt; i++){
            let num = this.generateRandomNumber(50,200);
            tempArr.push(num);
        }

        this.setState({
            array: tempArr,
            steps: [tempArr],
            count: cnt,
            currStep: 0,
            startDisabled: false
        }, () => {this.generateSteps()})
    }

    changeArray = (index, value) => {
        let array = this.state.array;
        array[index] = value;
        this.setState({
            array: array,
            steps: [array],
            currStep: 0
        }, () => {this.generateSteps()});
    }

    handleStart = () => {
        let steps = this.state.steps;
        let colors = this.state.colors;

        this.clearTimeouts();
        let timeouts = [];

        let i=0;
        while(i < steps.length - this.state.currStep){
            let timeout = setTimeout(() => {
                let currStep = this.state.currStep;
                this.setState({
                    array: steps[currStep],
                    colorKey: colors[currStep],
                    currStep: currStep + 1
                });
                timeouts.push(timeout);
            }, this.state.delay * i);
            i++;
        }

        this.setState({
            timeouts: timeouts,
            startDisabled: true
        });
    }

    size = 0;
    handleChange = (e) =>{
        this.size = parseInt(e.target.value);
    }

    changeArrSize = () => {
        if(this.size===0){
            toast.error('Array cannot be empty');
        }
        else if(this.size < 5 || this.size > 15){
            toast.error('Array size should be between 5 and 15');
        }
        else{
            this.setState({count : this.size}, () => {this.generateElements()});
        }
    }

    handleShow = () => {
        this.setState({showModal : true});
    }

    handleClose = () => {
        this.setState({showModal : false});
    }

    render() { 

        let bars = this.state.array.map((value, index)=>{
            return(
                <Bar 
                key={index} 
                index={index} 
                length={value} 
                colorKey={this.state.colorKey[index]} 
                changeArray={this.changeArray}
                />
            );
        })

        let playButton;

		if (this.state.steps.length === this.state.currStep) {
			playButton = (
				<button className='cstBtn' onClick={this.generateElements}>Regenerate</button>
			);
		} else {
			playButton = (
				<button className='cstBtn' onClick={this.handleStart} disabled={this.state.startDisabled}>Start</button>
			);
		}

        return (
            <>
            <ToastContainer position='top-center'/>
            <div className='frame'>
                <p className='sorting-title'>{this.state.algorithm}</p>

                <div onClick={this.handleShow}>
                    <BiInfoCircle className='info-circle'/>Instructions
                </div>
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Instructions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>You can change the size of the array.</li>
                            <li>Size input should be between 5 and 15.</li>
                            <li>You can also change the values of the elements using the bottom input field.</li>
                            <li>You can make a note by clicking on the buttom at the right bottom of the page.</li>
                            <li>The saved notes will be visible in the MyNotes Page in the navbar.</li>
                        </ul>
                    </Modal.Body>
                </Modal>

                <div className='bar-cards'>{bars}</div>
                <div>
                    <p className='arr-size'>Size of array</p>
                    <input type='number' className='arr-size' value={this.state.size} onChange={this.handleChange} placeholder='Enter size' />
                    <button className='arr-size goBtn' onClick={this.changeArrSize} disabled={this.state.startDisabled}>Create</button>
                </div>

                {playButton}

                <div className='about-sorting'>
                    <Card className='sort-def'>
                        <h3 className='sort-title'>Definition</h3>
                        <div className='about-text'>{AlgorithmData[this.state.algorithm].definition}</div>

                        <h3 className='sort-title'>Working of {this.state.algorithm}</h3>
                        <div className='sort-steps'>
                            <ul>
                                {AlgorithmData[this.state.algorithm].working.map((step, index)=>{
                                    return (<li key={index}>{step}</li>);
                                })}
                            </ul>
                        </div>

                        <Container>
                            <Row>
                                <Col lg={6}><img
                                className="sort-image"
                                src={AlgorithmData[this.state.algorithm].image}
                                alt="bubble"
                                /></Col>
                                <Col lg={6}className='box'>
                                    <h3 className='sort-title steps-title'>Steps</h3>
                                    <div className='sort-steps'>
                                        <ul>
                                            {AlgorithmData[this.state.algorithm].steps.map((step, index)=>{
                                                return (<li key={index}>{step}</li>);
                                            })}
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
            </div>
            
            </>
        );
    }
}
 
export default Sorting;