import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="pt-16">
      <PageHeader
        title={isLogin ? 'Welcome Back' : 'Create Account'}
        description={isLogin ? 'Sign in to your account' : 'Join us for exclusive benefits'}
      />

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex border-b mb-6">
            <button
              className={`pb-2 px-4 ${
                isLogin
                  ? 'border-b-2 border-rose-600 text-rose-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button
              className={`pb-2 px-4 ${
                !isLogin
                  ? 'border-b-2 border-rose-600 text-rose-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              />
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-rose-600 focus:ring-rose-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-rose-600 hover:text-rose-500">
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition duration-300"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}