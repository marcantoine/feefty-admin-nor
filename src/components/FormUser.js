'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import Text from '@radix-ui/themes'
import DeleteButton from '@/components/Buttons/DeleteButton'; 
const FormUser = ({submit, userData, isEditing}) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: isEditing && userData ? {
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            role: userData.role.slug // Set the default value for the role select field
        } : {}
    });

    // I am using React Hook 
    

    return (
        <form className="m-4" onSubmit={handleSubmit(submit)}>
          <label className="form-control w-full">
            <div className="label pb-1">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              placeholder="John"
              className="input input-bordered w-full rounded-sm h-8"
              {...register('firstName', { required: 'This field is required' })}
            />
          </label>
    
          <label className="form-control w-full">
            <div className="label pb-1">
              <span className="label-text">Last name</span>
            </div>
            <input
              type="text"
              placeholder="Doe"
              className="input input-bordered w-full rounded-sm h-8"
              {...register('lastName', { required: 'This field is required' })}
            />
          </label>
    
          <label className="form-control w-full">
            <div className="label pb-1">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder="john.doe@gmail.com"
              className="input input-bordered w-full rounded-sm h-8"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
          </label>
    
          <label className="form-control w-full mt-2">
            <span className="label-text pb-1">Role</span>
            <select
              className="select select-bordered w-full rounded-sm h-8"
              {...register('role', { required: 'This field is required' })}
            >
              <option className="rounded-sm h-8" value="admin">
                Admin
              </option>
              <option className="rounded-sm h-8" value="account_manager">
                Account manager
              </option>
              <option className="rounded-sm h-8" value="sales">
                Sales
              </option>
              <option className="rounded-sm h-8" value="operations">
                Operations
              </option>
              <option className="rounded-sm h-8" value="product">
                Product
              </option>
            </select>
          </label>
    
          {isEditing && (
            <div>
              <h1 className="h-5 m-2 pb-8 border-b border-gray-400">Danger zone</h1>
              {/* passing the user id to the delete button component */}
              {userData.id && <DeleteButton id={userData.id} />}
            </div>
          )}
    
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-700 text-white w-16 h-7 mt-10 rounded-sm">
              Save
            </button>
          </div>
        </form>
      );
}

export default FormUser
