import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderView1 = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get('http://localhost:3006/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  };

  const handleDelete = (orderId) => {
    axios.delete(`http://localhost:3006/orders/${orderId}`)
      .then(() => {
        fetchOrders();
      })
      .catch(error => {
        console.error('Error deleting order:', error);
      });
  };

  const handleUpdate = (orderId, updatedData) => {
    axios.put(`http://localhost:3006/orders/${orderId}`, updatedData)
      .then(() => {
        fetchOrders();
      })
      .catch(error => {
        console.error('Error updating order:', error);
      });
  };

  return (
    <div>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.itemId}</td>
              <td>{order.customerName}</td>
              <td>{order.customerAddress}</td>
              <td>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
                <button onClick={() => handleUpdate(order._id, { /* Updated data */ })}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderView1;
