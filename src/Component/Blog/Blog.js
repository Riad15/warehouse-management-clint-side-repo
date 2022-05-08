import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>blog section</h1>
            <div className='border'>
                <h1>Difference between javascript and nodejs:</h1>
                <div className='d-flex '>
                    <p style={{ textAlign: 'justify' }} className='w-50 mr-1 border p1'>
                        1. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br />
                        2.Javascript is a programming language that is used for writing scripts on the website. <br />
                        3. Javascript can only be run in the browsers. <br />
                        4. 	Javascript is capable enough to add HTML and play with the DOM.
                    </p>
                    <p style={{ textAlign: 'justify' }} className='w-50 ms-1 border p-1'>
                        1. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />
                        2. NodeJS is a Javascript runtime environment. <br />
                        3. We can run Javascript outside the browser with the help of NodeJS. <br />
                        4. Nodejs does not have capability to add HTML tags.
                    </p>
                </div>



            </div>

            <div>
                <h1>When should you use nodejs and when should you use mongodb ?</h1>
                <div className=' d-flex '>
                    <p style={{ textAlign: 'justify' }} className='w-50 mr-1 border p-2'>
                        it is very important to think that 'node.js is especially suited for applications that require persistent connection from the browser back to the server. - such as chat programs, or interactive games' If one is just building an application that does not necessarily need user/server communication, developing with other frameworks would be just fine and will take much less time.

                    </p>
                    <p style={{ textAlign: 'justify' }} className='w-50 mr-1 border p-'>
                        Strong ACID guarantees: MongoDB allows for duplicate data to be stored, inconsistent reads, and even data loss. These things are fine in some applications, but not in most.
                        Multi-Object Transactions: MongoDB does support ACID transactions, but only for a single object/document. This just won't cut it for more complex operations like bank transfers, making a reservation, etc.
                        Traditional BI: there are a lot of BI tools out there that only play well with traditional SQL.
                        SQL: MongoDB has a very specific query language, whereas SQL is very well known by a lot of people (might be an important aspect to consider), can do a lot of complex things (whereas with MongoDB you'd have trouble performing a simple join) and is transferable across a lot of implementations.
                    </p>

                </div>
            </div>

            <div>
                <h1>Differences between sql and nosql databases </h1>
                <div className='d-flex'>
                    <p style={{ textAlign: 'justify' }} className='w-50 mr-1 border p-'>
                        1 . RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) <br />
                        2.These databases have fixed or static or predefined schema <br />
                        3 . These databases are not suited for hierarchical data storage. <br />
                        4 . These databases are best suited for complex queries <br />
                        5 . Vertically Scalable

                    </p>
                    <p style={{ textAlign: 'justify' }} className='w-50 mr-1 border p-'>
                        1 . Non-relational or distributed database system. <br />
                        2 . They have dynamic schema <br />
                        3 . These databases are best suited for hierarchical data storage. <br />
                        4 . These databases are not so good for complex queries <br />
                        5 . Horizontally scalable

                    </p>

                </div>
            </div>

        </div>
    );
};

export default Blog;