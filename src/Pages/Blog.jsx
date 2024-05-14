

const Blog = () => {
    return (
        <div className="mt-12 max-w-7xl  mx-auto">
            <div className="text-center mb-5">
                <h1 className="text-4xl text-[#5EBD31] font-bold">Blog</h1>
            </div>
            <div className="grid gap-2 grid-cols-1 lg:grid-cols-4 mb-6">
                <div className="text-center p-4">
                    <img className="rounded-full mx-auto w-24 h-24" src="https://i.ibb.co/2FpXJG9/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbn.png" alt="" />
                    <h3 className="text-xl font-semibold">Asif Iqbal</h3>
                    <p className="text-gray-600">Web Developer</p>
                </div>
                <div className="col-span-2 border-green-200  border rounded-xl p-4">
                    <h1 className="text-2xl text-[#5EBD31] font-bold">Q1. What is an access token and refresh token? How do they work and where should
                    we store them on the client side?</h1>

                    <p className="text-lg font-medium mt-4">
                        An access token and a refresh token are both components of the OAuth authentication framework, which is commonly used for secure authorization and authentication in web and mobile applications.
                        
                    </p>

                    <div tabIndex={0} className="collapse collapse-arrow">
                            <div className="collapse-title text-[#5EBD31] text-xl font-semibold">
                                Continuing Reading . . .
                            </div>
                            <div className="collapse-content"> 
                                <p className="text-lg font-semibold mb-2">1. Access Token</p>
                                <li>
                                    An access token is a credential used by the client to access protected resources on behalf of the user.
                                    
                                </li>
                                <li>
                                    It is a string representing the authorization granted to the client application.
                                </li>
                                <li>
                                    Access tokens are used in API requests to authenticate the user.
                                </li>
                                <p className="mt-3 text-lg font-semibold mb-2">1. Refresh Token</p>
                                <li>
                                    A refresh token is a special token used to obtain a new access token when the current access token expires.
                                </li>
                                <li>
                                    Unlike access tokens, refresh tokens are long-lived and are typically valid for a much longer period.
                                    </li>
                                <li>
                                    Refresh tokens are used to obtain new access tokens without requiring the user to re-authenticate.
                               </li>
                               <p className="mt-3 text-lg font-semibold mb-2">How they work together:</p>
                               <li>When a user logs into a client application, the application requests authorization from the authorization server (using OAuth).</li>
                               <li>If the authorization is successful, the authorization server issues both an access token and a refresh token.</li>
                               <li>If the authorization is successful, the authorization server issues both an access token and a refresh token.</li>

                            </div>
                    </div>

                </div>
                <div className=" space-y-3 p-4">
                    <h4 className="text-xl font-bold">Write a comment</h4>
                   <textarea className="textarea textarea-success" placeholder="comment"></textarea><br />
                  <button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white"> Submit</button>
                </div>
            </div>
            

            {/*  */}

            <div className="grid gap-2 grid-cols-1 lg:grid-cols-4 border-t-2 border-dashed pt-6">
                <div className="text-center p-4">
                    <img className="rounded-full mx-auto w-24 h-24" src="https://i.ibb.co/2FpXJG9/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbn.png" alt="" />
                    <h3 className="text-xl font-semibold">Asif Iqbal</h3>
                    <p className="text-gray-600">Web Developer</p>
                </div>
                <div className="col-span-2 border border-green-200 rounded-xl p-4">
                    <h1 className="text-2xl text-[#5EBD31] font-bold">Q2.What is express js? What is Nest JS?</h1>

                    <p className="text-lg font-semibold mt-4 mb-2">
                       Express.js:
                       </p>
                       <li> Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It provides a thin layer of fundamental web application features, without obscuring Node.js features. Express.js is known for its simplicity, flexibility, and scalability, making it a popular choice for building APIs and web applications in the Node.js ecosystem. With Express.js, developers can quickly set up routes, handle HTTP requests and responses, manage middleware, and integrate with various templating engines and databases.</li>
                        
                    

                    <div tabIndex={0} className="collapse collapse-arrow">
                            <div className="collapse-title text-[#5EBD31] text-xl font-semibold">
                                Continuing Reading . . .
                            </div>
                            <div className="collapse-content"> 
                            <p className="text-lg font-semibold mt-4 mb-2">
                          NestJS:
                          </p>
                          <li>  NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript, a superset of JavaScript that adds static types, to enable robust type-checking and improve developer productivity. NestJS is heavily inspired by Angular, borrowing concepts such as dependency injection, decorators, and modules. It aims to provide a modular and organized structure for building applications, making it easy to manage complexity and scale as the application grows. NestJS abstracts away common tasks like routing, middleware handling, and dependency injection, allowing developers to focus on business logic. It also provides built-in support for features like authentication, validation, logging, and testing, making it suitable for building a wide range of applications, from small APIs to large-scale enterprise systems.</li>

                            </div>
                    </div>

                </div>
                <div className=" space-y-3 p-4">
                    <h4 className="text-xl font-bold">Write a comment</h4>
                   <textarea className="textarea textarea-success" placeholder="comment"></textarea><br />
                  <button className="bg-[#5BBC2E] px-4 py-2 rounded-lg font-semibold text-lg text-white"> Submit</button>
                </div>
            </div>
        </div>
       
    );
};

export default Blog;