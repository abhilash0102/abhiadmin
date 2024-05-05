import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderView = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3006/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Customer Name</th>
            <th>Customer Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.itemId}</td>
              <td>{order.customerName}</td>
              <td>{order.customerAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderView;
