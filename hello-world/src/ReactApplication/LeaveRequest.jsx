import React,{useState,useEffect} from 'react';
import {Label,Input,FormGroup,Col,Button,Table} from 'reactstrap';
import { setLeaveDetails, } from './Actions';
const ApplyLeave=({leaveDetails,setLeaveDetails})=>{
    // const [inputData,setInputData]=useState({
    //     fromDate:'',
    //     toDate:'',
    //     leaveType:'',
    //     numberOfDays:'',
    //     description:''
    // });

    const [submittedData,setSubmittedData]=useState(null);

    const inputDataHandler=(e)=>{
        const {name,value}=e.target;
        setLeaveDetails({
            [name]:value
        });


    };
    const submittedDataHandler=()=>{
        //e.preventDefault();

        setSubmittedData(inputData);
        setInputData({
            fromDate:'',
            toDate:'',
            leaveType:'',
            numberOfDays:'',
            description:''

        });
    };

    const resetFormInput=()=>{
        console.log('Reset form:');
        setInputData({
            fromDate:'',
            toDate:'',
            leaveType:'',
            numberOfDays:'',
            description:''

        });
        //console.log('Form data after resetting:',inputData);
    };
    useEffect(() => {
        console.log('Form data after resetting:', inputData);
    }, [inputData]);


    return(
        <>
            <form onSubmit={submittedDataHandler}>
                <FormGroup row>

                    <Label htmlFor="from-date" sm={2}>From Date </Label>
                    <Col sm={2}>
                        <Input type="date" id="from-date" name="fromDate" value={inputData.fromDate} onChange={inputDataHandler}/>
                    </Col>

                </FormGroup>

                <FormGroup row>
                    
                    <Label htmlFor="to-date" sm={2}>To Date </Label>
                    <Col sm={2}>
                        <Input type="date" id="to-date" name="toDate" value={inputData.toDate} onChange={inputDataHandler}/>
                    </Col>
                
                </FormGroup>

                <FormGroup row>
                    
                    <Label htmlFor="leave-type" sm={2}>Leave Type </Label>
                    <Col sm={2}>
                        <select id='leave-type' name="leaveType" value={inputData.leaveType} onChange={inputDataHandler}>
                            <option value="" disabled>Select your leave type</option>
                            <option value="personal leave">Personal leave</option>
                            <option value="carryforward leave">Carry-forward leave</option>
                            <option value="compensatory leave">Compensatory leave</option>
                        </select>
                    </Col>
                    
                </FormGroup>

                <FormGroup row>
                    
                    <Label htmlFor="number-of-days" sm={2}>Number of days</Label>
                    <Col sm={2}>
                        <Input type="text" id="number-of-days" name="numberOfDays" value={inputData.numberOfDays} onChange={inputDataHandler}/>
                    </Col>
                    
                </FormGroup>

                <FormGroup row>
                    
                    <Label htmlFor="description" sm={2}>Description</Label>
                    <Col sm={2}>
                        <Input type="text" id="description" name="description" value={inputData.description} onChange={inputDataHandler} />
                    </Col>
                
                </FormGroup>

                <FormGroup row>

                    <Col sm={2}>
                        <Button type="button" onClick={submittedDataHandler}>Submit</Button>
                    </Col>
                    <Col sm={4}>
                        <Button type="button" onClick={resetFormInput}>Reset</Button>
                    </Col>
                
                </FormGroup>
            </form>
            {submittedData && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>From Date</th>
                            <th>To Date</th>
                            <th>Leave type</th>
                            <th>Number of days</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{submittedData.fromDate}</td>
                            <td>{submittedData.toDate}</td>
                            <td>{submittedData.leaveType}</td>
                            <td>{submittedData.numberOfDays}</td>
                            <td>{submittedData.description}</td>
                        </tr>
                    </tbody>
                </Table>

            )}
           
        </>
    );
};

export default ApplyLeave;