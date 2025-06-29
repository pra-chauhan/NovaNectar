import React, { useEffect, useState } from 'react';
import { useEmployee } from '../../context.jsx/EmployeeContext'; // adjust path if needed

const AddEditEmployeeModal = ({ isOpen, onClose, initialData }) => {
    const { addEmployee, updateEmployee } = useEmployee();

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

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData((prev) => ({
                    ...prev,
                    documents: {
                        ...prev.documents,
                        [name]: {
                            name: files[0].name,
                            type: files[0].type,
                            dataUrl: reader.result,
                        },
                    },
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initialData && initialData.id) {
            updateEmployee(initialData.id, formData);
        } else {
            addEmployee(formData);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto p-6 w-[95%] max-w-2xl space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    {initialData ? 'Edit Employee' : 'Add New Employee'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { label: 'Full Name*', name: 'fullName', type: 'text' },
                            { label: 'Employee ID*', name: 'employeeId', type: 'text' },
                            { label: 'Email*', name: 'email', type: 'email' },
                            { label: 'Phone*', name: 'phone', type: 'text' },
                            { label: 'Emergency Contact*', name: 'emergencyContact', type: 'text' },
                            { label: 'Joining Date*', name: 'joiningDate', type: 'date' },
                            { label: 'Department*', name: 'department', type: 'text' },
                            { label: 'Position*', name: 'position', type: 'text' },
                        ].map((field) => (
                            <input
                                key={field.name}
                                type={field.type}
                                name={field.name}
                                placeholder={field.label}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required
                                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                            />
                        ))}
                    </div>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address*"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                    />
                    <textarea
                        name="bio"
                        placeholder="Bio*"
                        value={formData.bio}
                        onChange={handleChange}
                        rows={3}
                        required
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'Allowances*', name: 'allowances' },
                            { label: 'Deductions*', name: 'deductions' },
                            { label: 'Net Salary*', name: 'netSalary' },
                        ].map((field) => (
                            <input
                                key={field.name}
                                type="number"
                                name={field.name}
                                placeholder={field.label}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required
                                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring w-full"
                            />
                        ))}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">Upload Documents*</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { label: 'Identity Proof', name: 'identityProof' },
                            { label: 'Employee Image', name: 'employeeImage' },
                            { label: '10th Certificate', name: 'tenthCertificate' },
                            { label: '12th Certificate', name: 'twelfthCertificate' },
                            { label: 'Graduation Certificate', name: 'graduationCertificate' },
                            { label: 'Experience Certificate', name: 'experienceCertificate' },
                        ].map((doc) => (
                            <div key={doc.name}>
                                <label className="block text-sm font-medium mb-1 text-gray-700">
                                    {doc.label}
                                </label>
                                <input
                                    type="file"
                                    name={doc.name}
                                    accept=".pdf,.jpg,.png"
                                    onChange={handleChange}
                                    className="block w-full text-sm text-gray-600 border rounded-lg p-2 file:bg-gray-100"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end gap-3">
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
                            {initialData ? 'Save Changes' : 'Add Employee'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditEmployeeModal;
