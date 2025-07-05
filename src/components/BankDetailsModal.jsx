import { Eye, EyeOff, Landmark, Plus, TriangleAlert } from 'lucide-react'

const BankDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[#F9FAFB] rounded-xl p-6 space-y-4 shadow-lg w-xl mx-4">
        {/* headers */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Landmark size={24} />
            <h3 className="text-2xl font-semibold text-[#111827]">Bank Details</h3>
            <TriangleAlert size={24} color='#EF4444' />
          </div>
          <p className="text-[#616161]">Default settings for system-wide behavior</p>
        </div>

        {/* form */}
        <form onSubmit={''} className='space-y-5'>
          <div className='space-y-3'>
            {/* bank name and acc no */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="bankName" className="font-medium">Bank Name</label>
                <input type="text" name="bankName" value={''} onChange={''} id="bankName"
                  placeholder="HDFC Bank"
                  className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="accNo" className="font-medium">Account Number</label>
                <div className="relative">
                  <input
                    type="number"
                    name="accNo"
                    value={''}
                    onChange={''}
                    id="accNo"
                    placeholder="**************************"
                    className="rounded-lg border border-[#8D9096] py-3 px-2.5 w-full"
                  />

                  {/* View icon */}
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    {true ?
                      (<EyeOff size={20} onClick={''} />) :
                      (<Eye size={20} onClick={''} />)
                    }
                  </div>
                </div>
              </div>

            </div>
            {/* ifsc and upi */}
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="ifscCode" className="font-medium">IFSC Code</label>
                <input type="text" name="ifscCode" value={''} onChange={''} id="ifscCode"
                  placeholder="HDFC1235"
                  className="rounded-lg border border-[#8D9096] py-3 px-2.5" />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="upiId" className="font-medium">UPI ID (Optional)</label>
                <select name="upiId" id="upiId" className="rounded-lg border border-[#8D9096] py-3 px-2.5">
                  <option value="opt1">Option1</option>
                </select>
              </div>
            </div>
          </div>


          <button
            className="flex items-center gap-2 px-5 py-3 bg-[#6366F1] text-white rounded-xl font-medium hover:bg-[#6365f1f6]"
          >
            <Plus size={16} />
            Add Bank Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default BankDetailsModal