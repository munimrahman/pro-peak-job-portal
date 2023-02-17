import React from 'react';
import avatar from '../../../assets/avatar.jpg';
import blogImg from '../../../assets/img-news1.png';
import BlogComments from '../BlogComments/BlogComments';

function BlogPost() {
    return (
        <div className="bg-base-100 rounded shadow-xl px-8 lg:px-36">
            <div className="flex justify-between flex-wrap pt-10">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={avatar} alt="" className="" />
                        </div>
                    </div>
                    <div className="ml-2">
                        <p className="text-secondary">Writers Name</p>
                        <p className="text-neutral text-xs mt-1">Writers Position</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-neutral">May 12, 2022</p>
                    <p className="text-neutral text-sm">8 min to Read</p>
                </div>
            </div>

            <h1 className="text-center text-secondary text-xl md:text-3xl font-bold py-2 border-t border-neutral border-b my-5">
                11 Tips to Help You Get New Clients Through Cold Calling
            </h1>
            <figure className="my-4">
                <img src={blogImg} alt="" className="w-4/5 mx-auto rounded" />
            </figure>
            <p className="text-accent text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare pellentesque
                sollicitudin. Suspendisse potenti. Fusce ex risus, iaculis sit amet sapien nec,
                finibus malesuada mi. Proin at turpis eget sapien pulvinar luctus. Vestibulum
            </p>

            <p className="text-accent text-lg leading-relaxed">
                bibendum pharetra lorem eu aliquam. In feugiat placerat risus, sed rutrum neque
                mattis sit amet. Nullam vestibulum ante ac quam tempor, id venenatis velit eleifend.
                Duis id iaculis risus, quis ullamcorper augue. Nunc tristique venenatis ipsum at
                euismod. Pellentesque id arcu est.
            </p>
            <div className="divider" />
            <div className="flex justify-between items-center pb-6">
                <div className="flex items-center">
                    <span className="text-2xl hover:cursor-pointer">
                        <i className="far fa-heart text-red-500" />
                    </span>
                    <span className="ml-2 text-neutral font-thin">154 Loves</span>
                </div>
                <div className="flex flex-wrap justify-center">
                    <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1 md:my-0">
                        JavaScript
                    </span>
                    <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1 md:my-0">
                        React
                    </span>
                    <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1 md:my-0">
                        Node
                    </span>
                    <span className="capitalize text-xs bg-info text-[#4f5e64] hover:text-primary hover:cursor-pointer px-3 py-2 rounded mr-1 my-1 md:my-0">
                        Express
                    </span>
                </div>
            </div>
            <BlogComments />
        </div>
    );
}

export default BlogPost;
