import React from "react";
import Link from 'next/link';

export default function Signin() {
  return (
        <div>
            <div className="absolute inset-0">
            </div>
            <div className="relative flex min-h-screen items-center justify-center  bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-white sm:px-16">
                <div className="relative flex w-full max-w-[1502px] flex-col justify-center overflow-hidden rounded-md bg-white/60 shadow-lg backdrop-blur-lg dark:bg-white lg:min-h-[650px] lg:flex-row lg:gap-10 xl:gap-0">
                    <div className="relative hidden w-full items-center justify-center bg-ecsrm p-5 lg:inline-flex" style={{ backgroundImage: `url("../images/boba-tea.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="bg-ecsrm flex flex-col items-center justify-center">
                            <Link href="/" className="block w-48 lg:w-72">
                            <img
                                className="mx-auto h-20 w-auto rounded-full"
                                src="../images/boba logo.jpg"
                                alt="Your Company"
                            />
                            </Link>
                            <h5 className="text-lg font-bold mb-3.5 text-black">Bliss Boba Tea Shop</h5>
                            <p className="text-black text-[15px]  mb-3.5">Boba Bliss in Every Sip!</p>
                        </div>
                    </div>
                    <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6  shadow-lg">
                        <div className="flex w-full max-w-[440px] items-center gap-2 lg:absolute lg:end-6 lg:top-6 lg:max-w-full ">
                            <Link href="/" className=" w-full lg:hidden flex ">
                                <img src="/botswana_logo.png" alt="Logo" className="mx-auto w-20 self-center" />
                            </Link>
                        </div>
                        <div className="w-full max-w-[440px] lg:mt-16 ">
                            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                            </div>
                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                </div>
                                    <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                        </label>
                                        <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    </div>
                                        <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                        </div>
                        <p className="absolute bottom-6 w-full text-center dark:text-white">© {new Date().getFullYear()} Bliss Boba Tea.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

