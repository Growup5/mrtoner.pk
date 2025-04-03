import { useState } from 'react';

import React from 'react';
const allHpPrinters = [
  {
    id: 1,
    name: "HP LaserJet 1005 Printer",
    modelCode: "1005"
  },
  {
    id: 2,
    name: "HP LaserJet 1006 Printer",
    modelCode: "1006"
  },
  {
    id: 3,
    name: "HP LaserJet 1020 Printer",
    modelCode: "1020"
  },
  {
    id: 4,
    name: "HP LaserJet P1102w Printer",
    modelCode: "P1102w"
  },
  {
    id: 5,
    name: "HP LaserJet Pro 400 M401 Printer",
    modelCode: "M401"
  },
  {
    id: 6,
    name: "HP LaserJet 1320 Printer",
    modelCode: "1320"
  },
  {
    id: 7,
    name: "HP LaserJet Pro MFP 1606 Printer",
    modelCode: "1606"
  },
  {
    id: 8,
    name: "HP LaserJet Pro MFP 1606dn Printer",
    modelCode: "1606dn"
  },
  {
    id: 9,
    name: "HP LaserJet 1320 Printer (Duplex)",
    modelCode: "1320d"
  },
  {
    id: 10,
    name: "HP LaserJet P2015 Printer",
    modelCode: "P2015"
  },
  {
    id: 11,
    name: "HP LaserJet P2035 Printer",
    modelCode: "P2035"
  },
  {
    id: 12,
    name: "HP LaserJet P2055 Printer",
    modelCode: "P2055"
  },
  {
    id: 13,
    name: "HP LaserJet Pro 400 Printer",
    modelCode: "400"
  },
  {
    id: 14,
    name: "HP LaserJet Pro 401 Printer",
    modelCode: "401"
  },
  {
    id: 15,
    name: "HP LaserJet Pro 402 Printer",
    modelCode: "402"
  },
  {
    id: 16,
    name: "HP LaserJet Pro 404 Printer",
    modelCode: "404"
  },
  {
    id: 17,
    name: "HP LaserJet P3015 Printer",
    modelCode: "P3015"
  },
  {
    id: 18,
    name: "HP LaserJet 605 Printer",
    modelCode: "605"
  },
  {
    id: 19,
    name: "HP LaserJet P1012 Printer",
    modelCode: "P1012"
  },
  {
    id: 20,
    name: "HP LaserJet P1022 Printer",
    modelCode: "P1022"
  },
  {
    id: 21,
    name: "HP LaserJet P1102we Printer",
    modelCode: "P1102we"
  },
  {
    id: 22,
    name: "HP LaserJet P1505 Printer",
    modelCode: "P1505"
  },
  {
    id: 23,
    name: "HP LaserJet 201dn Printer",
    modelCode: "201dn"
  },
  {
    id: 24,
    name: "HP LaserJet Pro M1536dnf Multifunction Printer",
    modelCode: "M1536dnf"
  },
  {
    id: 25,
    name: "HP LaserJet Pro MFP M127 series",
    modelCode: "M127"
  },
  {
    id: 26,
    name: "HP LaserJet Pro M1212nf Multifunction Printer",
    modelCode: "M1212nf"
  },
  {
    id: 27,
    name: "HP LaserJet Pro M1132 Multifunction Printer series",
    modelCode: "M1132"
  },
  {
    id: 28,
    name: "HP LaserJet M2727nf Multifunction Printer",
    modelCode: "M2727nf"
  },
  {
    id: 29,
    name: "HP LaserJet 3390 All-in-One Printer",
    modelCode: "3390"
  },
  {
    id: 30,
    name: "HP LaserJet Pro 400 MFP M425dn",
    modelCode: "M425dn"
  },
  {
    id: 31,
    name: "HP Laser Multifunction MFC-3052",
    modelCode: "MFC3052"
  },
  {
    id: 32,
    name: "HP LaserJet M1522nf Multifunction Printer",
    modelCode: "M1522nf"
  },
  {
    id: 33,
    name: "HP LaserJet Pro MFP M225dw",
    modelCode: "M225dw"
  },
  {
    id: 34,
    name: "Special/Other Model",
    modelCode: "other"
  }
];

const HPLaserJetCustomOrders = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    printerModel: '1005',
    customModel: '',
    orderType: 'toner',
    quantity: '',
    pageCount: '',
    specialInstructions: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedPrinter = allHpPrinters.find(p => p.modelCode === formData.printerModel) || {};
    const printerName = formData.printerModel === 'other' 
      ? formData.customModel 
      : selectedPrinter.name;
    
    // Email content
    const emailSubject = `HP LaserJet Bulk Order - ${formData.company}`;
    const emailBody = `Dear Sales Team,\n\nPlease find below bulk order request details:\n\n` +
      `Printer Model: ${printerName}\n` +
      `Order Type: ${formData.orderType === 'toner' ? 'Toner Cartridges' : 
                    formData.orderType === 'printer' ? 'Printers' : 'Maintenance Kit'}\n` +
      `Quantity: ${formData.quantity}\n` +
      `${formData.orderType === 'toner' ? `Monthly Page Volume: ${formData.pageCount}\n` : ''}` +
      `Special Instructions: ${formData.specialInstructions || 'None'}\n\n` +
      `--- Contact Information ---\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Please contact me to finalize this order.`;

    // Open email client
    window.location.href = `mailto:sales@mrtoner.pk?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <div className="mx-auto h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">Order Request Submitted!</h2>
          <p className="mt-4 text-gray-600">
            We've opened your email client with all order details pre-filled.
          </p>
          
          {!window.location.href.includes('mailto') && (
            <div className="mt-6 bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900">Email Manually</h3>
              <div className="mt-3 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> 
                  <a href="mailto:sales@mrtoner.pk" className="text-blue-600 hover:text-blue-800 ml-2">
                    sales@mrtoner.pk
                  </a>
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Please include all your order details from the form.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            HP LaserJet Bulk Order Portal
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Corporate & bulk solutions for HP LaserJet printers
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              <svg className="inline h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              HP LaserJet Configuration
            </h3>
          </div>
          
          <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* Contact Information */}
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Business Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              {/* HP LaserJet Model Selection */}
              <div className="sm:col-span-6">
                <label htmlFor="printerModel" className="block text-sm font-medium text-gray-700">
                  HP LaserJet Model *
                </label>
                <select
                  name="printerModel"
                  required
                  value={formData.printerModel}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                >
                  {allHpPrinters.map(printer => (
                    <option key={printer.id} value={printer.modelCode}>
                      {printer.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Special Model Input (shown only when "Special/Other Model" is selected) */}
              {formData.printerModel === 'other' && (
                <div className="sm:col-span-6">
                  <label htmlFor="customModel" className="block text-sm font-medium text-gray-700">
                    Please Specify Printer Model *
                  </label>
                  <input
                    type="text"
                    name="customModel"
                    required
                    value={formData.customModel}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                    placeholder="e.g. HP LaserJet Pro MFP M521dn"
                  />
                </div>
              )}

              {/* Order Type */}
              <div className="sm:col-span-6">
                <fieldset>
                  <legend className="text-sm font-medium text-gray-700">Order Type *</legend>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative flex items-start p-3 border border-gray-200 rounded-md">
                      <div className="flex items-center h-5">
                        <input
                          id="toner"
                          name="orderType"
                          type="radio"
                          value="toner"
                          checked={formData.orderType === 'toner'}
                          onChange={handleChange}
                          className="focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="toner" className="block text-sm font-medium text-gray-700">
                          Toner Cartridges
                        </label>
                        <p className="text-xs text-gray-500">Original HP Toner (CF400X, CF500X, etc.)</p>
                      </div>
                    </div>

                    <div className="relative flex items-start p-3 border border-gray-200 rounded-md">
                      <div className="flex items-center h-5">
                        <input
                          id="printer"
                          name="orderType"
                          type="radio"
                          value="printer"
                          checked={formData.orderType === 'printer'}
                          onChange={handleChange}
                          className="focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="printer" className="block text-sm font-medium text-gray-700">
                          Printers
                        </label>
                        <p className="text-xs text-gray-500">New HP LaserJet units</p>
                      </div>
                    </div>

                    <div className="relative flex items-start p-3 border border-gray-200 rounded-md">
                      <div className="flex items-center h-5">
                        <input
                          id="maintenance"
                          name="orderType"
                          type="radio"
                          value="maintenance"
                          checked={formData.orderType === 'maintenance'}
                          onChange={handleChange}
                          className="focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="maintenance" className="block text-sm font-medium text-gray-700">
                          Maintenance Kit
                        </label>
                        <p className="text-xs text-gray-500">Fusers, rollers, etc.</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              {/* Quantity */}
              <div className="sm:col-span-3">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  {formData.orderType === 'printer' ? 'Number of Printers' : 'Quantity'} *
                </label>
                <select
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                >
                  <option value="">Select quantity</option>
                  {formData.orderType === 'printer' ? (
                    <>
                      <option value="5-10">5-10 Printers</option>
                      <option value="10-25">10-25 Printers</option>
                      <option value="25-50">25-50 Printers</option>
                      <option value="50+">50+ Printers</option>
                    </>
                  ) : (
                    <>
                      <option value="10-25">10-25 Units</option>
                      <option value="25-50">25-50 Units</option>
                      <option value="50-100">50-100 Units</option>
                      <option value="100+">100+ Units</option>
                    </>
                  )}
                </select>
              </div>

              {/* Page Count (only for toner orders) */}
              {formData.orderType === 'toner' && (
                <div className="sm:col-span-3">
                  <label htmlFor="pageCount" className="block text-sm font-medium text-gray-700">
                    Monthly Page Volume *
                  </label>
                  <select
                    name="pageCount"
                    required
                    value={formData.pageCount}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select volume</option>
                    <option value="<5k">Under 5,000 pages</option>
                    <option value="5k-10k">5,000-10,000 pages</option>
                    <option value="10k-20k">10,000-20,000 pages</option>
                    <option value="20k+">20,000+ pages</option>
                  </select>
                </div>
              )}

              {/* Special Instructions */}
              <div className="sm:col-span-6">
                <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">
                  Special Requirements
                </label>
                <textarea
                  name="specialInstructions"
                  rows={3}
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  placeholder="Specific toner colors, printer configurations, installation requirements, etc."
                />
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-gray-200 flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Request HP Bulk Quote
              </button>
            </div>
          </form>
        </div>

        {/* HP Benefits Section */}
        <div className="mt-10 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Why Order HP LaserJet Supplies From Us?
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="mt-3 text-lg font-medium text-gray-900">HP Authorized Reseller</h4>
                <p className="mt-2 text-base text-gray-500">
                  Genuine HP products with full manufacturer warranty
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="mt-3 text-lg font-medium text-gray-900">Volume Discounts</h4>
                <p className="mt-2 text-base text-gray-500">
                  Special corporate pricing for bulk orders
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="mt-3 text-lg font-medium text-gray-900">Fast Delivery</h4>
                <p className="mt-2 text-base text-gray-500">
                  Same-day shipping for in-stock items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HPLaserJetCustomOrders;