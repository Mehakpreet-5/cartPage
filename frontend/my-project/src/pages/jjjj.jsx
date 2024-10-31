import React from 'react';
import { useCart } from './CartContext'; // Adjust path as necessary
import Footer from './footer';

const Cart = () => {
    const { cartItems, setCartItems } = useCart(); // Ensure setCartItems is included

    const removeFromCart = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const total = cartItems.reduce((sum, item) => sum + (Number(item.price) || 0), 0); // Convert to number

    const handlePayment = async () => {
        const response = await fetch('/api/create-order', { // Ensure this matches your backend route
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: total, currency: 'INR' }),
        });

        const orderData = await response.json();

        if (!orderData.id) {
            alert('Failed to create order');
            return;
        }

        const options = {
            key: 'YOUR_RAZORPAY_KEY_ID', // Enter the Key ID generated from the Dashboard
            amount: orderData.amount, // Amount is in currency subunits. Hence, multiply by 100
            currency: orderData.currency,
            name: 'Your Company Name',
            description: 'Test Transaction',
            order_id: orderData.id, // Pass the `id` obtained in the previous step
            handler: function (response) {
                alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
                // Here, you might want to save the order in your database or perform any other actions
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Customer address',
            },
            theme: {
                color: '#F37254',
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };
    return (
        <> <div className='flex flex-row '>
            <div className="mt-16 px-4 w-full lg:w-3/6 mx-auto ">
                <h1 className="text-5xl md:text-4xl font-bold mb-4 fontt">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-xl">Your cart is empty!</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 border-b">Item</th>
                                    <th className="py-2 border-b">Name</th>
                                    <th className="py-2 border-b">Price</th>
                                    <th className="py-2 border-b">Action</th> {/* New column for actions */}
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="py-3 border-b">
                                            <img src={item.image} alt={item.name} className="h-14 w-20 rounded-lg ml-6" />
                                        </td>
                                        <td className="py-4 border-b">
                                            <h2 className="text-lg md:text-xl font-semibold">{item.name}</h2>
                                        </td>
                                        <td className="py-4 border-b">
                                            <p className="text-lg">{item.price || 'N/A'}</p>
                                        </td>
                                        <td className="py-4 border-b">
                                            <button
                                                onClick={() => removeFromCart(index)}
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                            >
                                                x
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
            {cartItems.length > 0 && (
                <div className="h-96 w-64 bg-yellow-100 bg-opacity-20 flex items-center mx-auto mt-4">
                    <div className="m-9 space-y-2">
                        <h1 className="mt-4 font-bold text-orange-500 text-4xl">Total: ${total.toFixed(2)}</h1>
                        <h3 className="text-xl">Delivery</h3>
                        <h4 className="text-base">Standard Delivery (Free)</h4>
                        <button
                            onClick={handlePayment}
                            className="bg-orange-500 text-white w-36 p-2 cursor-pointer mt-3"
                        >
                            Checkout
                        </button>
                        <h2 className="text-xl">We Accept</h2>
                    </div>
                </div>
            )} </div>
            <Footer />
        </>
    );
};

export default Cart;

