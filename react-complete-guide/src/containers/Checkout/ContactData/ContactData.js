import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

export class ContactData extends Component {
  state = {
    X: 0,
    Y: 0,
    display: "none",

    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required:true,
        },
        valid: false,
        touched: false

      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required:true,
        },
        valid: false

      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code",
        },
        value: "",
        validation: {
          required:true,
          minLength:5,
          maxLength:5,
        },
        valid: false,
        touched: false

      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required:true,
        },
        valid: false,
        touched: false

      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your E-Mail",
        },
        value: "",
        validation: {
          required:true,
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "Cheapest", displayValue: "Cheapest" },
          ],
        },
        validation:{ },
        valid: true,
        value: "",
        
      },
    },
    
    isFormValid: false,
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);

    const formData = {};

    for(let element in this.state.orderForm){

       formData[element] = this.state.orderForm[element].value

    }

      console.log(formData)
    //  alert('You continue!');
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Max Schwarzmüller",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "Germany",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  closeHover = (event) => {
    // console.log("Close Hover", event);

    this.setState({
      display: "none",
    });
  };

  openHover = (event) => {
    // console.log("Open Hover", event);
    this.setState({
      X: event.clientX,
      Y: event.clientY,
      display: "block",
    });
  };

 checkValidity = (value,rules) => {

    let isValid = true;

    if(rules.required) {
      isValid = value.trim() !=='' && isValid;

    }

    if(rules.minLength){
      isValid = value.length >= rules.minLength && isValid;
    }

    if(rules.maxLength){
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid

 } 

  inputChangedHandler = (event, inputIdentifier) => {

   

    const updatedFormData = {
        ...this.state.orderForm
    }

    const updatedInputData = {

      ...updatedFormData[inputIdentifier]

    }

    updatedInputData.value = event.target.value;
    updatedInputData.valid = this.checkValidity(updatedInputData.value,updatedInputData.validation);
    updatedInputData.touched = true
    console.log(updatedInputData)
    updatedFormData[inputIdentifier] = updatedInputData;

    let isFormValid = true

    for(let formItem in updatedFormData){
       
      isFormValid = updatedFormData[formItem].valid && isFormValid;
      console.log(isFormValid)
    }

    console.log("Last",isFormValid)

    this.setState({

      orderForm: updatedFormData,
      isFormValid: isFormValid,

    })
  }


  render() {
    let formArray = Object.keys(this.state.orderForm).map((item) => {
      return (
        <Input
          key={item}
          elementType={this.state.orderForm[item].elementType}
          elementConfig={this.state.orderForm[item].elementConfig}
          value={this.state.orderForm[item].value}
          invalid={!this.state.orderForm[item].valid}
          shouldValidate= {this.state.orderForm[item].validation}
          touched={this.state.orderForm[item].touched}
          changed={(event) => this.inputChangedHandler(event, item)}
        />
      );
    });

    let form = (
      <form onSubmit={this.orderHandler}>
        {formArray}
        {/* 
        <Input
          elementType="..." 
          elementConfig="..."
          value="..."

        />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="Your Mail"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        /> */}

        <Button btnType="Success" disabled={!this.state.isFormValid}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div
        className={classes.ContactData}
        onMouseMove={(event) => this.openHover(event)}
        onMouseLeave={(event) => this.closeHover(event)}
      >
        <p>{this.state.X}</p>
        <p>{this.state.Y}</p>
        <div
          style={{
            border: "1px solid",
            position: "fixed",
            top: this.state.Y + 20,
            left: this.state.X + 20,
            padding: "10px",
            display: this.state.display,
          }}
        >
          Test Hover
        </div>

        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
