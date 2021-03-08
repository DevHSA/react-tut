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
    display: 'none',
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your E-Mail",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "Cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
    },

    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);

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


  closeHover = (event) =>{

    console.log("Close Hover",event);

    this.setState({
      display: 'none'
    })
    
    
  }

  openHover = (event) =>{

    console.log("Open Hover",event)
    this.setState({
      X: event.clientX,
      Y: event.clientY,
      display: 'block'
    })
    
  }



  render() {
    let form = (
      <form>



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
        />

        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
        
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData} onMouseMove={(event)=> this.openHover(event)} onMouseLeave={(event)=>this.closeHover(event)}>
          <p>{this.state.X}</p>
          <p>{this.state.Y}</p>
          <div style={{border:'1px solid', position:'fixed', top:this.state.X, left: this.state.Y, padding:'10px', display: this.state.display,}}>
            Test Hover
          </div>
          
          <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
