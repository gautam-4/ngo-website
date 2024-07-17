import { MailIcon, HeartIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const GetInvolved = () => {
    const [showVolunteerForm, setShowVolunteerForm] = useState(false);

    const handleToggleForm = () => {
        setShowVolunteerForm(!showVolunteerForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
    };

    return (
        <div className="py-8 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Get Involved</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Make a Difference
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Join us in making a positive impact in the community. Whether you want to volunteer or donate, your
                        contributions matter.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5">
                        <div
                            className={`relative py-5 px-4 sm:py-6 sm:px-6 border border-gray-200 rounded-lg flex items-center space-x-3 transition-shadow duration-300 ease-in-out cursor-pointer ${
                                showVolunteerForm
                                    ? 'bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm' // Selected tab styles
                                    : 'bg-white shadow-md hover:shadow-lg' // Non-selected tab styles
                            }`}
                            onClick={() => setShowVolunteerForm(true)}
                        >
                            <div className="flex-shrink-0">
                                <HeartIcon className="h-10 w-10 text-blue-600" aria-hidden="true" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="absolute inset-0" aria-hidden="true"></span>
                                <p className="text-lg font-medium text-gray-900">Volunteer</p>
                                <p className="text-sm text-gray-500">Join our team of dedicated volunteers.</p>
                            </div>
                        </div>
                        <div
                            className={`relative py-5 px-4 sm:py-6 sm:px-6 border border-gray-200 rounded-lg flex items-center space-x-3 transition-shadow duration-300 ease-in-out cursor-pointer ${
                                !showVolunteerForm
                                    ? 'bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm' // Selected tab styles
                                    : 'bg-white shadow-md hover:shadow-lg' // Non-selected tab styles
                            }`}
                            onClick={() => setShowVolunteerForm(false)}
                        >
                            <div className="flex-shrink-0">
                                <MailIcon className="h-10 w-10 text-blue-600" aria-hidden="true" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="absolute inset-0" aria-hidden="true"></span>
                                <p className="text-lg font-medium text-gray-900">Donate</p>
                                <p className="text-sm text-gray-500">Make a financial contribution.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="text-center">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {showVolunteerForm ? 'Volunteer Information Form' : 'Donate Information Form'}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {showVolunteerForm
                                ? 'Fill out the form below to get started as a volunteer.'
                                : 'Fill out the form below to make a donation.'}
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
                    >
                        <div className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label
                                    htmlFor="full-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="full-name"
                                    id="full-name"
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            {!showVolunteerForm && (
                                <div className="flex items-center space-x-3">
                                    <div className="w-1/2">
                                        <label
                                            htmlFor="donation-amount"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Donation Amount ($)
                                        </label>
                                        <input
                                            type="number"
                                            name="donation-amount"
                                            id="donation-amount"
                                            placeholder="100"
                                            min="0"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label
                                            htmlFor="payment-method"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Payment Method
                                        </label>
                                        <select
                                            name="payment-method"
                                            id="payment-method"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            required
                                        >
                                            <option value="credit-card">Credit Card</option>
                                            <option value="paypal">PayPal</option>
                                            <option value="bank-transfer">Bank Transfer</option>
                                        </select>
                                    </div>
                                </div>
                            )}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    placeholder="Your message here"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    {showVolunteerForm ? 'Submit' : 'Donate'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInvolved;