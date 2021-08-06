import React from 'react';
import "./Kyc.css"
// import {sendFormData} from '../services/';
import Image from "./Image"
class Kyc extends React.Component{
  constructor(props){
    super(props);
     this.state = {
      cust_name:"",
      adharno:"",
      nextpage:0,
       file: '',imagePreviewUrl: '',
       file_back: '',image2PreviewUrl: '',
     }                                                                                                 
     this.submitForm = this.submitForm.bind(this);
  }
  validateEmail(email){
   const pattern = /\d{4}-\d{4}-\d{4}/;
   const result = pattern.test(email);
   this.setState({
     adharno:email
   })
   console.log(result,"result---")
   if(result===true){
       console.log("a")
     this.setState({
       emailError:false,
     })
     console.log(this.state.emailError);
   } else{
    console.log("b",this.state.emailError)
     this.setState({
       emailError:true
     })
     console.log(this.state.emailError);
   }
 }

 validateName(name){
     const pattern = /^[a-zA-Z ]*$/;
     const result = pattern.test(name);
     this.setState({
      cust_name:name
    })
     if(result===true){
        this.setState({
            firstnameError:false  
        })
     }
     else{
        this.setState({
            firstnameError:true  
        })
     }
 }
 handleChange(e){
  if(e.target.name==='firstname'){
    this.validateName(e.target.value);
}
if(e.target.name==='adhar'){
    this.validateEmail(e.target.value);
  }

 }

 submitForm(){
  if(this.state.firstnameError ===false && this.state.emailError===false && this.state.file && this.state.file_back){
   console.log("submit")
    this.setState({
      nextpage:1
    })
  }
  else{
    console.log("submit error")
    if(!this.state.cust_name){
      this.setState({
        firstnameError:true
      })
    }
    if(!this.state.adharno){
      this.setState({
        emailError:true
      })
    } 
    if(!this.state.file){
      this.setState({
        file1Error:true
      })
    }
    if(!this.state.file_back){
      this.setState({
        file2Error:true
      })
    }
  }
 }

_handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
    if(!this.state.file){
      this.setState({
        file1Error:false
      })
    }
  }

  _handleImageChange2(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file_back: file,
        image2PreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
    if(!this.state.file_back){
      this.setState({
        file2Error:false
      })
    }
  }
render(){
    let {imagePreviewUrl} = this.state;
    let {image2PreviewUrl} = this.state;
    let $imagePreview = null;
    let $imagePreview2 = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }
    if (image2PreviewUrl) {
        $imagePreview2 = (<img src={image2PreviewUrl} />);
      } else {
        $imagePreview2 = (<div className="previewText"></div>);
      }
return(
<>
{this.state.nextpage?
            <Image {...this.state}
            image={ <img src={imagePreviewUrl} />}
            image2={ <img src={image2PreviewUrl} />}/>
            :
            <div className="container">
            <div className="card card-login mx-auto mt-5">
              <div className="card-header">Submit KYC Details</div>
                <div className="card-body">
                    <div id="signup-form">
                      <div className="form-group">
                        <div className="form-label-group">
                        <label htmlFor="firstname">Customer First Name</label>
                          <input type="text" id="firstname" name="firstname" className="form-control widthbox" placeholder="Enter firstname" onChange={(e)=>{this.handleChange(e)}} />
                         <p> {this.state.firstnameError ? <span style={{color: "red"}}>Please Enter only text</span> : ''} </p>
                        </div>
                      </div>
                     
                      <div className="form-group">
                        <div className="form-label-group">
                        <label htmlFor="adhar">Customer Aadhar Number</label>
                          <input type="text" id="adhar" name="adhar" maxLength="14" className="form-control widthbox" placeholder="Enter your adhar" onChange={(e)=>{this.handleChange(e)}} />
                          <p>{this.state.emailError ? <span style={{color: "red"}}>Please Enter valid Aadhar number Eg:1234-1234-1234</span> : ''}</p>
                        </div>
                      </div>                
                      <div className="form-group">
                        <div className="form-label-group">
                      <label>Front Image of Aadhar  </label>
                  <input className="fileInput" type="file" accept="image/png, image/gif, image/jpeg" onChange={(e)=>this._handleImageChange(e)} />  
                  <p>{this.state.file1Error ? <span style={{color: "red"}}>Please choose file</span> : ''}</p>
                  </div></div>
                 <label>Back Image of Aadhar  </label>
                 <input className="fileInput" type="file" accept="image/png, image/gif, image/jpeg" onChange={(e)=>this._handleImageChange2(e)} /> 
                 <p>{this.state.file2Error ? <span style={{color: "red"}}>Please choose file</span> : ''}</p>
 
                     <br/>
                 <div><button className="btn btn-primary btn-block" onClick={this.submitForm}>Preview</button></div>
                    </div>
                   
                   
                </div>
              </div>
            </div>
           
           }
</>
 
  );
 }
}
export default Kyc;