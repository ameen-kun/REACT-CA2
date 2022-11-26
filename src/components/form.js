import React from "react";
import './style.css';
class Formv extends React.Component{
    constructor(){
    super();
    this.state = {
        fields: {},   
        errors: {},
        pcheck:false
      }
      this.handleChange = this.handleChange.bind(this);   
      this.submituser= this.submituser.bind(this);
    };
    handleChange(e) {
        let y=0;
        let errors=this.state.errors;
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
        if(fields["password"].length<8){
            errors["password"]="Enter valid password";
            document.getElementById("erp").style.color="red";
        }
        else if (typeof fields["password"] !== "undefined") {
            if(fields["password"].match(/([a-z])/) && fields["password"].length>=8)
                y++;
            if(fields["password"].match(/([A-Z])/) && fields["password"].length>=8)
                y++;
            if(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)&&fields["password"].length>=8)
                y++;
            if(fields["password"].match(/([0-9])/)&&fields["password"].length>=8)
                y++; 
            if(y==1){
                errors["password"] = "Weak Password";
                document.getElementById("erp").style.color="red";
                this.setState({pcheck:false});
            }
            if (y==2){
                errors["password"] = "Medium Password";
                document.getElementById("erp").style.color="yellow";
                this.setState({pcheck:false});
            }
            if(y==3){
                errors["password"] = "Strong Password";
                document.getElementById("erp").style.color="green"; 
                this.setState({pcheck:true}); 
            }
            if(y==4){
                errors["password"]="Very Strong Password";
                document.getElementById("erp").style.color="green";  
                this.setState({pcheck:true}); 
            }
        }    
    }
    submituser(e) { 
        e.preventDefault();
        document.getElementById("username").style.border="0";
        document.getElementById("email").style.border="0";
        document.getElementById("password").style.border="0";
        document.getElementById("erp").style.color="red";
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["email"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            this.setState({pcheck:false});
            alert("Your Form has been submitted successfully.");
        }  
    }
    
    validateForm(){
        let flag=this.state.pcheck;
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "Please fill the column";
            document.getElementById("username").style.border="2px solid red";
        }
        if(!fields["email"]){
            formIsValid=false;
            errors["email"]="Invalid Email";
            document.getElementById("email").style.border="2px solid red";
        }
        if (flag==false || !fields["password"] || fields["password"].length<8) {
        formIsValid = false;
        errors["password"] = "Password not valid";
        document.getElementById("password").style.border="2px solid red";
      }
  
        this.setState({
            errors: errors
          });
          return formIsValid;
    }
    render() {
        return(
            <>
                <h1>DYNAMIC FORM</h1><br/>
                <form onSubmit={this.submituser}>
                    <label htmlFor="username">Enter your username</label><br/><br/>
                    <input type="text" placeholder="Your Username" name="username" id="username" value={this.state.fields.username} onChange={this.handleChange}/><br/>
                    <div className="error">{this.state.errors.username}</div>
                    <br/>
                    <label htmlFor="username">Enter your email</label><br/><br/>
                    <input type="email" placeholder="Your Email" name="email" id="email" value={this.state.fields.email} onChange={this.handleChange}/><br/>
                    <div className="error">{this.state.errors.email}</div><br/>
                    <label htmlFor="username">Enter your password</label><br/><br/>
                    <input type="password" placeholder="Your Password" name="password" id="password" value={this.state.fields.password} onChange={this.handleChange}/><br/>
                    <div className="error" id="erp">{this.state.errors.password}</div>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
        </>
        );
    }
}
export default Formv;