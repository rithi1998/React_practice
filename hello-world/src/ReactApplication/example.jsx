import React from 'react';
import { Label, Input, FormGroup, Col,Button} from 'reactstrap';

const LeaveApply = () => {
    return (
        <div>
            <FormGroup row>
                <Label for="from-date" sm={2}>From Date </Label>
                <Col sm={2}>
                    <Input type="date" id="from-date" name="from_date" />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="to-date" sm={2}>To Date </Label>
                <Col sm={2}>
                    <Input type="date" id="to-date" name="to_date" />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="leave-type" sm={2}>Leave Type </Label>
                <Col sm={2}>
                    <Input type="select" id="leave-type">
                        <option value="" disabled>Select your leave type</option>
                        <option value="personal leave">Personal leave</option>
                        <option value="carryforward leave">Carry-forward leave</option>
                        <option value="compensatory leave">Compensatory leave</option>
                    </Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="number-of-days" sm={2}>Number of days</Label>
                <Col sm={2}>
                    <Input type="text" id="number-of-days" />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="description" sm={2}>Description</Label>
                <Col sm={2}>
                    <Input type="text" id="description" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={1}>
                    <Button>Submit</Button>
                </Col>
                <Col sm={1}>
                    <Button>Reset</Button>
                </Col>
            </FormGroup>

            
            
        </div>
    );
};

export default LeaveApply;
