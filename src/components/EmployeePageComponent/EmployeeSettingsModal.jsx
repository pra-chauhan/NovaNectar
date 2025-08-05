import { Plus, Settings, ToggleLeft, ToggleRight, TriangleAlert } from "lucide-react";
import React, { useRef, useState } from "react";
import BankDetailsModal from "../BankDetailsModal";


const EmployeeSettingsModal = () => {
  const types = ["Preference", "Profile", "Salary", "Registration"];
  const [selectedType, setSelectedType] = useState("Preference");
  const [isEnabled, setIsEnabled] = useState(false);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Save Changes", passformData, notifications);
    // onClose();
  }

  // -------Preference---------
  const notificationsList = ['Email Notifications', 'Push Notifications', 'Event Notifications', 'Leave Approval Updates', 'Punch-in Reminders', 'Payroll Updates']

  const [notifications, setNotifications] = useState({
    'Email Notifications': true,
    'Push Notifications': false,
    'Event Notifications': false,
    'Leave Approval Updates': false,
    'Punch-in Reminders': true,
    'Payroll Updates': false,
  })

  const toggleNotification = (notification) => {
    setNotifications((prev) => ({ ...prev, [notification]: !prev[notification] }))
  }

  const [passformData, setPassFormData] = useState({
    currPass: "",
    newPass: "",
    confirmNewPass: ""
  })

  const handlePassChange = (e) => {
    const { name, value } = e.target;
    setPassFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleUpdatePassword = () => {
    console.log('password updated');
  }

  // -------Profile---------
  const imgInpRef = useRef()

  // -------Salary---------
  const [isBankModalOpen, setisBankModalOpen] = useState(false)

  // if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[#F9FAFB] rounded-xl p-6 space-y-4 shadow-lg w-lg md:w-2xl lg:w-4xl xl:w-6xl overflow-y-auto max-h-[90vh]">
        {/* headers */}
        <div className="flex items-center gap-4">
          <Settings size={30} color='#6366F1' />
          <h3 className="text-3xl font-bold text-gray-800">Settings</h3>
        </div>

        {/* types */}
        <div className="flex p-1">
          {
            types.map((type) => (
              <button key={type}
                onClick={() => setSelectedType(type)}
                className={`rounded-xl  py-2 px-4 font-medium text-sm flex-1 ${selectedType === type && 'border border-[#8D9096] bg-white'}`}
              >{type}</button>
            ))
          }
        </div>

        {/* content */}
        {
          selectedType === 'Preference' && (
            <>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* default salary structure */}
                <div className="flex-1 rounded-xl border border-[#8D9096] p-5 space-y-5 bg-white">
                  {/* headers */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-gray-800">Default Salary Structure</h3>
                    <p className="text-[#616161]">Configure default salary components</p>
                  </div>
                  {/* pass form */}
                  <form onSubmit={handleUpdatePassword} className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="currPass" className="font-medium">Current Password</label>
                      <input type="text" name="currPass" value={passformData.currPass} onChange={handlePassChange} id="currPass"
                        placeholder="aaaaaaaaaa"
                        className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="newPass" className="font-medium">New Password</label>
                      <input type="text" name="newPass" value={passformData.newPass} onChange={handlePassChange} id="newPass"
                        placeholder="bbbbbbbbbb"
                        className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="confirmNewPass" className="font-medium">Confirm New Password</label>
                      <input type="text" name="confirmNewPass" value={passformData.confirmNewPass} onChange={handlePassChange} id="confirmNewPass"
                        placeholder="bbbbbbbbbb"
                        className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                    </div>
                    <button
                      type="submit"
                      className="px-5 py-3 bg-[#6366F1] text-white rounded-xl font-medium hover:bg-[#6365f1f6]"
                    >
                      Update Password
                    </button>
                  </form>
                </div>

                {/* notification preference */}
                <div className="flex-1 rounded-xl border border-[#8D9096] p-5 space-y-5 bg-white">
                  {/* headers */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-gray-800">Notification Preferences</h3>
                    <p className="text-[#616161]">Notification Methods</p>
                  </div>
                  {/* form */}
                  <div className="space-y-2">
                    {notificationsList.map((notification) => (
                      <div key={notification} className="flex justify-between">
                        <p className="font-medium">{notification}</p>
                        <button onClick={() => toggleNotification(notification)}>
                          {
                            notifications[notification] ?
                              (<ToggleRight size={30} color="#6366F1" />) :
                              (<ToggleLeft size={30} />)
                          }
                        </button>
                      </div>
                    ))}


                  </div>

                </div>
              </div>
              {/* save btn */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  onClick={handleSaveChanges}
                  className="px-5 py-3 bg-[#6366F1] text-white rounded-xl font-medium hover:bg-[#6365f1f6]"
                >
                  Save Changes
                </button>
              </div>
            </>
          )
        }

        {
          selectedType === 'Profile' && (
            <>
              <div className="flex flex-col gap-5">
                {/* profile info */}
                <div className="flex-1 rounded-xl border border-[#8D9096] p-5 space-y-5 bg-white">
                  {/* headers */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-gray-800">Profile Information</h3>
                    <p className="text-[#616161]">Default settings for system-wide behavior</p>
                  </div>
                  {/* form */}
                  <form onSubmit={''} className=" border border-[#8D9096] rounded-2xl p-4">
                    {/* img */}
                    <div className="flex gap-3">
                      <div className="size-14 rounded-full border border-[#8D9096] bg-[#D9D9D9]">
                        <img src="" alt="" className="w-full h-full object-cover" />
                      </div>
                      <div >
                        <input type="file" name="" id="" className="hidden" ref={imgInpRef} />
                        <div className="flex items-center gap-2 rounded-lg px-2.5 py-3 border border-[#8D9096]" onClick={() => imgInpRef.current.click()}>
                          <Plus size={16} />
                          <p className="text-sm text-[#111827]">Change Photo</p>
                        </div>
                        <p className="text-xs text-[#6B7280]">JPG, PNG or GIF (max 5MB)</p>
                      </div>
                    </div>
                    {/* others */}
                    <div className="space-y-4">
                      {/* name and dob */}
                      <div className="flex flex-col lg:flex-row  gap-6">
                        <div className="flex flex-1 flex-col gap-2">
                          <label htmlFor="name" className="font-medium">Full Name</label>
                          <input type="text" name="name" value={''} onChange={''} id="name"
                            placeholder="Admin User"
                            className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                        </div>

                        <div className="flex flex-1 flex-col gap-2">
                          <label htmlFor="dob" className="font-medium">Birth Date</label>
                          <input type="date" name="dob" value={''} onChange={''} id="dob"
                            placeholder="Pick a date"
                            className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                        </div>
                      </div>
                      {/* gender and email */}
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex flex-1 flex-col gap-2">
                          <label htmlFor="gender" className="font-medium">Gender</label>
                          <div className="flex gap-8 py-3">
                            <div className="flex gap-2 justify-center items-center">
                              <input type="radio" name="gender" value='male' onChange={''} id="male"
                                className="accent-[#6366F1]" />
                              <label className='font-medium text-sm' htmlFor="male">Male</label>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                              <input type="radio" name="gender" value='female' onChange={''} id="female"
                                className="accent-[#6366F1]" />
                              <label className='font-medium text-sm' htmlFor="female">Female</label>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                              <input type="radio" name="gender" value='other' onChange={''} id="other"
                                className="accent-[#6366F1]" />
                              <label className='font-medium text-sm' htmlFor="other">Other</label>
                            </div>
                            <div className="flex gap-2 justify-center items-center">
                              <input type="radio" name="gender" value='preferNotToSay' onChange={''} id="preferNotToSay"
                                className="accent-[#6366F1]" />
                              <label className='font-medium text-sm' htmlFor="preferNotToSay">Prefer not to say</label>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col gap-2">
                          <label htmlFor="email" className="font-medium">Email</label>
                          <input type="email" name="email" value={''} onChange={''} id="email"
                            placeholder="user123@gmail.com"
                            className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                        </div>
                      </div>
                      {/* designation and deparment */}
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex flex-1 flex-col gap-2">
                          <label htmlFor="designation" className="font-medium">Designation</label>
                          <input type="text" name="designation" value={''} onChange={''} id="designation"
                            placeholder="HR Director"
                            className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                        </div>

                        <div className="flex flex-1 flex-col gap-2">
                          <label htmlFor="department" className="font-medium">Department</label>
                          <select name="department" id="department" className="rounded-lg border border-[#8D9096] py-3 px-2.5">
                            <option value="humanResources">Human Resources</option>
                          </select>
                        </div>
                      </div>
                      {/* nums */}
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex flex-1 flex-col gap-2">
                          <label htmlFor="contact" className="font-medium">Contact Number</label>
                          <input type="number" name="contact" value={''} onChange={''} id="contact"
                            placeholder="987456321"
                            className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                        </div>

                        <div className="flex flex-1 flex-col gap-2">
                          <label htmlFor="emContact" className="font-medium">Emergnecy Contact Number</label>
                          <input type="number" name="emContact" value={''} onChange={''} id="emContact"
                            placeholder="987456321"
                            className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {/* address info */}
                <div className="flex-1 rounded-xl border border-[#8D9096] p-5 space-y-5 bg-white">
                  {/* headers */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-gray-800">Address Information</h3>
                    <p className="text-[#616161]">Default settings for system-wide behavior</p>
                  </div>
                  {/* form */}
                  <form onSubmit={''} className="space-y-3">
                    {/* curr and per add */}
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex flex-1 flex-col gap-2">
                        <label htmlFor="currAddress" className="font-medium">Current Address</label>
                        <textarea type="text" name="currAddress" value={''} onChange={''} id="currAddress" rows={3}
                          placeholder="Khand gaon, Near Bhandari palace, Rishikesh, Uttarakhand"
                          className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                        <div className="flex gap-2 items-center">
                          <input type="checkbox" id="sameAsCurrent" onChange={''} />
                          <label htmlFor="sameAsCurrent" className="font-medium text-xs">Permanent address same as current</label>

                        </div>
                      </div>

                      <div className="flex flex-1 flex-col gap-2">
                        <label htmlFor="permAddress" className="font-medium">Permanent Address</label>
                        <textarea type="text" name="permAddress" value={''} onChange={''} id="permAddress" rows={3}
                          placeholder="Khand gaon, Near Bhandari palace, Rishikesh, Uttarakhand"
                          className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                      </div>
                    </div>
                    {/* others */}
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex flex-1 flex-col gap-2">
                        <label htmlFor="pincode" className="font-medium">Pincode</label>
                        <input type="number" name="pincode" value={''} onChange={''} id="pincode"
                          placeholder="249201"
                          className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                      </div>

                      <div className="flex flex-1 flex-col gap-2">
                        <label htmlFor="city" className="font-medium">City</label>
                        <input type="text" name="city" value={''} onChange={''} id="city"
                          placeholder="Rishikesh"
                          className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                      </div>

                      <div className="flex flex-1 flex-col gap-2">
                        <label htmlFor="state" className="font-medium">State</label>
                        <input type="text" name="state" value={''} onChange={''} id="state"
                          placeholder="Uttarakhand"
                          className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                      </div>

                    </div>
                  </form>
                </div>
              </div>

              {/* save btn */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  onClick={handleSaveChanges}
                  className="px-5 py-3 bg-[#6366F1] text-white rounded-xl font-medium hover:bg-[#6365f1f6]"
                >
                  Save Changes
                </button>
              </div>
            </>
          )
        }

        {
          selectedType === 'Salary' && (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* bank account settings */}
              <div className="flex-1 rounded-xl border border-[#8D9096] p-5 space-y-5 bg-white">
                {/* headers */}
                <h3 className="text-2xl font-semibold text-gray-800">Bank Account Settings</h3>
                {/* method inp */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="notificationMethod" className="font-medium">Notification Method</label>
                  <select name="notificationMethod" id="notificationMethod"
                    className="rounded-lg border border-[#8D9096] py-3 px-2.5"
                  >
                    <option value="opt1">Option1</option>
                  </select>
                  <p className="text-sm text-[#616161]">Give a custom name to identify your salary account</p>
                </div>
                {/* bank info */}
                <div className="rounded-2xl p-5 space-y-3 bg-[#F9FAFB]">
                  <h2 className="font-medium">Current Bank Account</h2>
                  <div className="space-y-2">
                    <p className="font-medium text-sm text-[#111827]">Account: <span className=" text-[#51596B]">Primary</span></p>
                    <p className="font-medium text-sm text-[#111827]">Bank: <span className=" text-[#51596B]">HDFC Bank</span></p>
                    <p className="font-medium text-sm text-[#111827]">Account No: <span className=" text-[#51596B]">**** **** 1234</span></p>
                    <p className="font-medium text-sm text-[#111827]">IFSC:: <span className=" text-[#51596B]">HDFC0001234</span></p>
                  </div>
                </div>
                {/* add bank btn */}
                <button
                  type="submit"
                  onClick={() => setisBankModalOpen(true)}
                  className="flex items-center gap-2 px-5 py-3 bg-[#6366F1] text-white rounded-xl font-medium hover:bg-[#6365f1f6]"
                >
                  <Plus size={16} />
                  Add Bank Account
                </button>
              </div>

              {/* salary notifications */}
              <div className="flex-1 rounded-xl border border-[#8D9096] p-5 space-y-5 bg-white">
                {/* headers */}
                <h3 className="text-2xl font-semibold text-gray-800">Salary Notifications</h3>
                {/* toggler */}
                <div className="flex justify-between">
                  <div className="space-y-2">
                    <h2 className="font-medium">Notification on Salary Credits</h2>
                    <p className="text-sm text-[#616161]">Get notified when salary is credited to your account</p>
                  </div>
                  <div onClick={() => setIsEnabled(!isEnabled)} className="cursor-pointer">
  {isEnabled ? (
    <ToggleRight size={42} color="#6366F1" />
  ) : (
    <ToggleLeft size={42} />
  )}
</div>

                </div>
                {/* method inp */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="notificationMethod" className="font-medium">Notification Method</label>
                  <select name="notificationMethod" id="notificationMethod"
                    className="rounded-lg border border-[#8D9096] py-3 px-2.5"
                  >
                    <option value="email">Email</option>
                  </select>
                </div>

                {/* form */}
                {/* <div className="space-y-2">
                  {notificationsList.map((notification) => (
                    <div key={notification} className="flex justify-between">
                      <p className="font-medium">{notification}</p>
                      <button onClick={() => toggleNotification(notification)}>
                        {
                          notifications[notification] ?
                            (<ToggleRight size={30} color="#6366F1" />) :
                            (<ToggleLeft size={30} />)
                        }
                      </button>
                    </div>
                  ))}


                </div> */}

              </div>
            </div>
          )
        }

        {
          selectedType === 'Registration' && (
            <div className="space-y-5">
              {/* imp notice */}
              <div className="rounded-2xl border border-[#EF4444] bg-[#FFECEC] px-5 py-6 text-[#EF4444] space-y-2">
                <div className="flex items-center gap-1.5">
                  <TriangleAlert size={18} />
                  <h2 className="font-medium">Important Notice</h2>
                </div>
                <p className="text-xs">Please ensure you have discussed your resignation with your manager before submitting this form. This action will notify HR and begin the formal resignation process.</p>
              </div>
              {/* form */}
              <div className="rounded-xl border border-[#8D9096] py-5 px-4 space-y-5 bg-white">
                <h2 className="font-semibold text-2xl text-[#111827]">Initiate Registration</h2>
                <form onSubmit={''} className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="resignReason" className="font-medium">Resignation Reason*</label>
                    <select name="resignReason" id="resignReason" className="rounded-lg border border-[#8D9096] py-3 px-2.5">
                      <option disabled>Select the reason</option>
                      <option value="email">option 1</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="resignNote" className="font-medium">Resignation Note *</label>
                    <textarea name="resignNote" id="resignNote" value={''} onChange={''} placeholder="Please Provide details about your resignation " rows={4} className="rounded-lg border border-[#8D9096] py-3 px-2.5"></textarea>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="lastWorkDate" className="font-medium">Proposed Last Working Date *</label>
                    <input type="date" name="lastWorkDate" value={''} onChange={''} id="lastWorkDate"
                      className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
                    <p className="text-sm text-[#616161]">Minimum 30 days notice period required</p>
                  </div>
                  <button
                    type="submit"
                    onClick={''}
                    className="px-5 py-3 bg-[#EF4444] text-white rounded-xl font-medium hover:bg-[#ef4444f8]"
                  >
                    Submit Resignation
                  </button>
                </form>
              </div>
            </div>
          )
        }

        <BankDetailsModal isOpen={isBankModalOpen} onClose={() => setisBankModalOpen(false)} />

      </div>
    </div>
  );
};

export default EmployeeSettingsModal;