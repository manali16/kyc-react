import React from 'react';
import "./Kyc.css"
export default class Image extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        images:props.Image,
        obj:[]
      };
      this.submitForm = this.submitForm.bind(this);
    }

  submitForm = async({formData = new FormData()}) => {
  formData.append('data', this.props.cust_name);
  formData.append('data', this.props.adharno);
  formData.append('data', this.props.image);
  formData.append('data', this.props.image2);
  for(var pair of formData.entries()) {
  console.log(pair[0]+ ', '+ pair[1]);
}
  alert(formData.getAll('data'));
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



    

