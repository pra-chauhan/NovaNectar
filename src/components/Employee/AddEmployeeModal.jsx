import React, { useEffect, useState } from 'react';
import { useEmployee } from "../../context.jsx/EmployeeContext";

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
        documents: {},
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
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
                documents: {},
            });
        }
    }, [initialData, isOpen]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files[0]) {
            if (!files[0].type.includes('png')) {
                alert("Only PNG files are allowed for document uploads.");
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                setFormData(prev => ({
                    ...prev,
                    documents: {
                        ...prev.documents,
                        [name]: {
                            name: files[0].name,
                            type: files[0].type,
                            dataUrl: reader.result
                        }
                    }
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initialData && initialData.id) {
            // Update existing employee
            updateEmployee({ ...formData, id: initialData.id });
        } else {
            // Add new employee with a unique id
            const newEmployee = { ...formData, id: Date.now().toString() };
            addEmployee(newEmployee);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 max-h-[90vh] overflow-y-auto w-[95%] max-w-2xl space-y-5">
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
                        ].map(field => (
                            <input
                                key={field.name}
                                type={field.type}
                                name={field.name}
                                placeholder={field.label}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required
                                className="border rounded-lg px-3 py-2 w-full focus:ring focus:outline-none"
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
                        className="border rounded-lg px-3 py-2 w-full focus:ring focus:outline-none"
                    />
                    <textarea
                        name="bio"
                        placeholder="Bio*"
                        value={formData.bio}
                        onChange={handleChange}
                        rows={3}
                        required
                        className="border rounded-lg px-3 py-2 w-full focus:ring focus:outline-none"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'Allowances*', name: 'allowances' },
                            { label: 'Deductions*', name: 'deductions' },
                            { label: 'Net Salary*', name: 'netSalary' },
                        ].map(field => (
                            <input
                                key={field.name}
                                type="number"
                                name={field.name}
                                placeholder={field.label}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required
                                className="border rounded-lg px-3 py-2 w-full focus:ring focus:outline-none"
                            />
                        ))}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">Upload Documents (PNG only)*</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { label: 'Identity Proof', name: 'identityProof' },
                            { label: 'Employee Image', name: 'employeeImage' },
                            { label: '10th Certificate', name: 'tenthCertificate' },
                            { label: '12th Certificate', name: 'twelfthCertificate' },
                            { label: 'Graduation Certificate', name: 'graduationCertificate' },
                            { label: 'Experience Certificate', name: 'experienceCertificate' },
                        ].map(doc => (
                            <div key={doc.name}>
                                <label className="block text-sm font-medium mb-1 text-gray-700">
                                    {doc.label}
                                </label>
                                <input
                                    type="file"
                                    name={doc.name}
                                    accept=".png"
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
 