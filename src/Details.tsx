import Dialog from "./Dialog";
import { Column, Row } from "./view/flex";


export function Details() {

    return <Dialog open={true}>
        <h4>Details</h4>
        <Column>    
            <Row>
                <label>name:</label>
                <span>1</span>
            </Row>
            <Row>
                <label>name:</label>
                <span>1</span>
            </Row>
            <Row>
                <label>name:</label>
                <span>1</span>
            </Row>
            <Row>
                <label>name:</label>
                <span>1</span>
            </Row>
            <Row>
                <label>name:</label>
                <span>1</span>
            </Row>
            <Row>
                <label>name:</label>
                <span>1</span>
            </Row>
        </Column>
    </Dialog>
}