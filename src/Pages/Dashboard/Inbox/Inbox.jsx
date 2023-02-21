import React from 'react';

function Inbox() {
    return (
        // <!-- component -->
        <div>
            <div className="container mx-auto">
                <div className="h-[540px]">
                    <div className="flex border border-grey rounded shadow-lg h-full">
                        {/* <!-- Left --> */}
                        <div className="w-1/3 border flex flex-col">
                            {/* <!-- Search --> */}
                            <div className="py-2 px-2 bg-grey-lightest">
                                <input
                                    type="text"
                                    placeholder="Search Here"
                                    className="input input-bordered focus:outline-none w-full max-w-xs"
                                />
                            </div>

                            {/* <!-- Contacts --> */}
                            <div className="bg-grey-lighter flex-1 overflow-auto">
                                <div className="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                    <div>
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">
                                                Arnold Schwarzenegger
                                            </p>
                                            <p className="text-xs text-grey-darkest">12:45 pm</p>
                                        </div>
                                        <p className="text-grey-dark mt-1 text-sm">I ll be back</p>
                                    </div>
                                </div>
                                <div className="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                    <div>
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">
                                                Arnold Schwarzenegger
                                            </p>
                                            <p className="text-xs text-grey-darkest">12:45 pm</p>
                                        </div>
                                        <p className="text-grey-dark mt-1 text-sm">I ll be back</p>
                                    </div>
                                </div>
                                <div className="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                    <div>
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">
                                                Arnold Schwarzenegger
                                            </p>
                                            <p className="text-xs text-grey-darkest">12:45 pm</p>
                                        </div>
                                        <p className="text-grey-dark mt-1 text-sm">I ll be back</p>
                                    </div>
                                </div>
                                <div className="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                    <div>
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">
                                                Arnold Schwarzenegger
                                            </p>
                                            <p className="text-xs text-grey-darkest">12:45 pm</p>
                                        </div>
                                        <p className="text-grey-dark mt-1 text-sm">I ll be back</p>
                                    </div>
                                </div>
                                <div className="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                    <div>
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTIyMTE4MTU5/arnold-schwarzenegger-9476355-1-402.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">
                                                Arnold Schwarzenegger
                                            </p>
                                            <p className="text-xs text-grey-darkest">12:45 pm</p>
                                        </div>
                                        <p className="text-grey-dark mt-1 text-sm">I ll be back</p>
                                    </div>
                                </div>
                                <div className="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                    <div>
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://www.famousbirthdays.com/headshots/russell-crowe-6.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">Russell Crowe</p>
                                            <p className="text-xs text-grey-darkest">12:45 pm</p>
                                        </div>
                                        <p className="text-grey-dark mt-1 text-sm">
                                            Hold the line!
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                    <div>
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpYTzuO0zLW7yadaq4jpOz2SbsX90okb24Z9GtEvK6Z9x2zS5"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">Tom Cruise</p>
                                            <p className="text-xs text-grey-darkest">12:45 pm</p>
                                        </div>
                                        <p className="text-grey-dark mt-1 text-sm">
                                            Show me the money!
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white px-3 flex items-center hover:bg-grey-lighter cursor-pointer">
                                    <div>
                                        <img
                                            className="h-12 w-12 rounded-full"
                                            src="https://www.biography.com/.image/t_share/MTE5NTU2MzE2MjE4MTY0NzQ3/harrison-ford-9298701-1-sized.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                                        <div className="flex items-bottom justify-between">
                                            <p className="text-grey-darkest">Harrison Ford</p>
                                            <p className="text-xs text-grey-darkest">12:45 pm</p>
                                        </div>
                                        <p className="text-grey-dark mt-1 text-sm">
                                            Tell Java I have the money
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right --> */}
                        <div className="w-2/3 border flex flex-col">
                            {/* <!-- Header --> */}
                            <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-grey-darkest">
                                            New Movie! Expendables 4
                                        </p>
                                        <p className="text-grey-darker text-xs mt-1">
                                            Andrés, Tom, Harrison, Arnold, Sylvester
                                        </p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="ml-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path
                                                fill="#263238"
                                                fillOpacity=".6"
                                                d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Messages --> */}
                            <div
                                className="flex-1 overflow-auto"
                                style={{ backgroundColor: '#DAD3CC' }}
                            >
                                <div className="py-2 px-3">
                                    <div className="flex justify-center mb-2">
                                        <div
                                            className="rounded py-2 px-4"
                                            style={{ backgroundColor: '#DDECF2' }}
                                        >
                                            <p className="text-sm uppercase">February 20, 2018</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center mb-4">
                                        <div
                                            className="rounded py-2 px-4"
                                            style={{ backgroundColor: '#FCF4CB' }}
                                        >
                                            <p className="text-xs">
                                                Messages to this chat and calls are now secured with
                                                end-to-end encryption. Tap for more info.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex mb-2">
                                        <div
                                            className="rounded py-2 px-3"
                                            style={{ backgroundColor: '#F2F2F2' }}
                                        >
                                            <p className="text-sm text-teal">Sylverter Stallone</p>
                                            <p className="text-sm mt-1">
                                                Hi everyone! Glad you could join! I am making a new
                                                movie.
                                            </p>
                                            <p className="text-right text-xs text-grey-dark mt-1">
                                                12:45 pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex mb-2">
                                        <div
                                            className="rounded py-2 px-3"
                                            style={{ backgroundColor: '#F2F2F2' }}
                                        >
                                            <p className="text-sm text-purple">Tom Cruise</p>
                                            <p className="text-sm mt-1">
                                                Hi all! I have one question for the movie
                                            </p>
                                            <p className="text-right text-xs text-grey-dark mt-1">
                                                12:45 pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex mb-2">
                                        <div
                                            className="rounded py-2 px-3"
                                            style={{ backgroundColor: '#F2F2F2' }}
                                        >
                                            <p className="text-sm text-orange">Harrison Ford</p>
                                            <p className="text-sm mt-1">Again?</p>
                                            <p className="text-right text-xs text-grey-dark mt-1">
                                                12:45 pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex mb-2">
                                        <div
                                            className="rounded py-2 px-3"
                                            style={{ backgroundColor: '#F2F2F2' }}
                                        >
                                            <p className="text-sm text-orange">Russell Crowe</p>
                                            <p className="text-sm mt-1">
                                                Is Andrés coming for this one?
                                            </p>
                                            <p className="text-right text-xs text-grey-dark mt-1">
                                                12:45 pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex mb-2">
                                        <div
                                            className="rounded py-2 px-3"
                                            style={{ backgroundColor: '#F2F2F2' }}
                                        >
                                            <p className="text-sm text-teal">Sylverter Stallone</p>
                                            <p className="text-sm mt-1">
                                                He is. Just invited him to join.
                                            </p>
                                            <p className="text-right text-xs text-grey-dark mt-1">
                                                12:45 pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mb-2">
                                        <div
                                            className="rounded py-2 px-3"
                                            style={{ backgroundColor: '#E2F7CB' }}
                                        >
                                            <p className="text-sm mt-1">Hi guys.</p>
                                            <p className="text-right text-xs text-grey-dark mt-1">
                                                12:45 pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mb-2">
                                        <div
                                            className="rounded py-2 px-3"
                                            style={{ backgroundColor: '#E2F7CB' }}
                                        >
                                            <p className="text-sm mt-1">Count me in</p>
                                            <p className="text-right text-xs text-grey-dark mt-1">
                                                12:45 pm
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex mb-2">
                                        <div
                                            className="rounded py-2 px-3"
                                            style={{ backgroundColor: '#F2F2F2' }}
                                        >
                                            <p className="text-sm text-purple">Tom Cruise</p>
                                            <p className="text-sm mt-1">
                                                Get Andrés on this movie ASAP!
                                            </p>
                                            <p className="text-right text-xs text-grey-dark mt-1">
                                                12:45 pm
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Input --> */}
                            <div className="bg-grey-lighter px-4 py-4 flex items-center">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            opacity=".45"
                                            fill="#263238"
                                            d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
                                        />
                                    </svg>
                                </div>
                                <div className="flex-1 mx-4">
                                    <input
                                        className="w-full border rounded px-2 py-2"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            fill="#263238"
                                            fillOpacity=".45"
                                            d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inbox;
