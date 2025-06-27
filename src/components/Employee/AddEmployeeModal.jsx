import React, { useState } from 'react';

const AddEmployeeModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        employeeId: '',
        email: '',
        phone: '',
        emergencyContact: '',
        joiningDate: '',
        department: '',
        position: '',
        address: '',
        bio: '',
        allowances: '',
        deductions: '',
        netSalary: '',
        documents: {
            identityProof: null,
            employeeImage: null,
            tenthCertificate: null,
            twelfthCertificate: null,
            graduationCertificate: null,
            experienceCertificate: null,
        },
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            // PNG only restriction for employeeImage
            if (name === 'employeeImage') {
                if (files[0].type !== 'image/png') {
                    alert('Please upload a PNG image for Employee Image.');
                    return;
                }
            }
            setFormData({
                ...formData,
                documents: { ...formData.documents, [name]: files[0] },
            });
        } else {
            // Alphabet restriction for fullName
            if (name === 'fullName') {
                const regex = /^[A-Za-z\s]*$/;
                if (!regex.test(value)) return;
            }
            // Number restriction for phone and emergencyContact
            if (name === 'phone' || name === 'emergencyContact') {
                const regex = /^[0-9\b]*$/;
                if (!regex.test(value)) return;
            }
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-h-[90vh] overflow-y-auto p-4 sm:p-6 w-[95%] max-w-2xl">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Employee</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Employee Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name*"
                            required
                            onChange={handleChange}
                            value={formData.fullName}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                        <input
                            type="text"
                            name="employeeId"
                            placeholder="Employee ID*"
                            required
                            onChange={handleChange}
                            value={formData.employeeId}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            required
                            onChange={handleChange}
                            value={formData.email}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number*"
                            required
                            onChange={handleChange}
                            value={formData.phone}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                        <input
                            type="text"
                            name="emergencyContact"
                            placeholder="Emergency Contact*"
                            onChange={handleChange}
                            value={formData.emergencyContact}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                        <input
                            type="date"
                            name="joiningDate"
                            placeholder="Joining Date*"
                            onChange={handleChange}
                            value={formData.joiningDate}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                        <input
                            type="text"
                            name="department"
                            placeholder="Department*"
                            onChange={handleChange}
                            value={formData.department}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                        <input
                            type="text"
                            name="position"
                            placeholder="Position*"
                            onChange={handleChange}
                            value={formData.position}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                    </div>

                    <input
                        type="text"
                        name="address"
                        placeholder="Address*"
                        onChange={handleChange}
                        value={formData.address}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                    />
                    <textarea
                        name="bio"
                        placeholder="Bio*"
                        onChange={handleChange}
                        value={formData.bio}
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        rows={3}
                    />

                    {/* Salary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="number"
                            name="allowances"
                            placeholder="Allowances*"
                            onChange={handleChange}
                            value={formData.allowances}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                        <input
                            type="number"
                            name="deductions"
                            placeholder="Deductions (if any)"
                            onChange={handleChange}
                            value={formData.deductions}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                        <input
                            type="number"
                            name="netSalary"
                            placeholder="Net Salary*"
                            onChange={handleChange}
                            value={formData.netSalary}
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                        />
                    </div>

                    {/* Required Documents */}
                    <h3 className="font-semibold text-lg mt-2 mb-1 text-gray-800">Required Documents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { label: 'Identity Proof *', name: 'identityProof', accept: '.pdf,.jpg,.png' },
                            { label: 'Employee Image (PNG Only) *', name: 'employeeImage', accept: '.png' },
                            { label: '10th Pass Certificate *', name: 'tenthCertificate', accept: '.pdf,.jpg,.png' },
                            { label: 'Experience Certificate *', name: 'experienceCertificate', accept: '.pdf,.jpg,.png' },
                            { label: '12th Pass Certificate *', name: 'twelfthCertificate', accept: '.pdf,.jpg,.png' },
                            { label: 'Graduation Certificate *', name: 'graduationCertificate', accept: '.pdf,.jpg,.png' },
                        ].map((fileField) => (
                            <div key={fileField.name}>
                                <label className="block text-sm font-medium mb-1 text-gray-700">{fileField.label}</label>
                                <input
                                    type="file"
                                    name={fileField.name}
                                    accept={fileField.accept}
                                    required
                                    onChange={handleChange}
                                    className="block w-full text-sm text-gray-600 border rounded-lg p-2 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gray-100 file:text-sm"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                        Allowed file types: PDF, JPG, PNG (PNG only for Employee Image). Max file size: 5MB.
                        <br />
                        Fields marked with * are required.
                    </p>

                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#7B61FF] text-white rounded-lg hover:bg-[#6750e9] transition"
                        >
                            Add Employee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEmployeeModal;
