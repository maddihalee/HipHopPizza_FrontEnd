// export default function CurrentOrderPage({ order }) {
//   console.warn('Current Order:', order);

//   const calculateTotalPrice = () => order.products.reduce((total, product) => total + product.price, 0);

//   return (
//     <div>
//       <h2>Current Order</h2>
//       <ul>
//         {order.products.map((product) => (
//           <li>
//             {product.name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//       <div>Total Price: ${calculateTotalPrice(order.products)}</div>
//     </div>
//   );
// }
