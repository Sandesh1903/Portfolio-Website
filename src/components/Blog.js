import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <h2>My Blog</h2>
      <div className="blog-list">
        <div className="blog-item">
          <h3>React Suspense and React.lazy by Example</h3>
          <p>Learn how to use React Suspense and lazy loading to optimize your applications.</p>
          <button>Read more</button>
        </div>
        {/* Add more blog entries as needed */}
      </div>
    </section>
  );
};

export default Blog;
