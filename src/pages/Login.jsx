import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-10 rounded-xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-5">
          Login
        </h2>

        <input
          {...register('email')}
          placeholder="Email"
          className="w-full border p-3 mb-4"
        />

        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login