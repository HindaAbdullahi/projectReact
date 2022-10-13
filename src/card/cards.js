import React,{Component, component} from "react";
import Card  from "./cardUI";
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class Cards extends Component {
   
    render() {
      return (
        <div className="container-fluid-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card></Card>
                </div>
                <div className="col-md-4">
                    <Card></Card>
                </div>
                <div className="col-md-4">
                    <Card></Card>
                </div>
                <div className="col-md-4">
                    <Card></Card>
                </div>
                <div className="col-md-4">
                    <Card></Card>
                </div>
                <div className="col-md-4">
                    <Card></Card>
                </div>




            </div>
          
        </div>
      )
    }
}
export default Cards;