import React from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorhandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        let OrderArray = [];
        for (let key in res.data) {
          OrderArray.push({
            ...res.data[key],
            id: key,
          });
        }

        this.setState({ loading: false, orders: OrderArray });
        console.log("State", this.state.orders);
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          );
        })}
      </div>
    );
  }
}

export default withErrorhandler(Orders, axios);
