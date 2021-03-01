import React from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'

class Orders extends React.Component {


    state ={

        orders: [],
        loading: true,
    }

    componentDidMount(){

        axios.get('/orders.json').then(res=>{

            let OrderArray = [];
            for(let key in res.data) {
                
                OrderArray.push({

                    ...res.data[key],
                    id: key

                })
                
            }


            console.log(res.data);
            this.setState({loading:false , orders: OrderArray });
        }).catch(err=>{

            this.setState({loading:false});
        })

    }

    render() {

        return (<div>

            <Order />
            <Order />

        </div>);

    }



}

export default Orders; 