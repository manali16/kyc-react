import React from 'react';
import "./Kyc.css"
export default class Image extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        images:props.Image,
      };
      this.submitForm = this.submitForm.bind(this);
      this.editDetails = this.editDetails.bind(this);
    }
    editDetails(){
      window.location.reload(false);
    }

  submitForm = () => {
console.log(this.props);
    if (this.state.image_file !== null){

        let formData = new FormData();
        formData.append('customFile', this.props);
        alert("user saved")
    }
}
    render() {
      return (
        <>
 <div className="container">
            <div className="card card-login mx-auto mt-5">
              <div className="card-header">Submit KYC Details</div>
                <div className="card-body">
        <div id="signup-form">
          <label htmlFor="firstname">Customer First Name</label>
          <p class="detailsverify">{this.props.cust_name}</p>
          <label htmlFor="firstname">Adhar Number</label>
          <p class="detailsverify">{this.props.adharno}</p>
          <label htmlFor="firstname">Adhar Images</label>
        <div className="Imgdiv">
        {this.props.image}
          </div>
          <br></br>
          <br></br>
             <div className="Imgdiv">{this.props.image2}</div>
           <br></br> <br></br>
           <span style={{textAlign:"center"}}>
           {/* <button className="btn btn-primary btn-block" onClick={this.editDetails}>Edit Details </button> */}
             <button className="btn btn-primary btn-block" onClick={this.submitForm}>Submit</button></span>
        </div>
       </div>
       </div>
       </div>
        </>
      )
    }
  }
    
