import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import { Link } from "react-router-dom";
import moment from "moment";
import { listBlogs } from "../actions/blogActions";
import FadeIn from "react-fade-in";
import BlogCardScreen from "./BlogCardScreen";
import BlogCardFullScreen from "./BlogCardFullScreen";

const BlogScreen = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, blogs, error } = blogList;

  

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);
  return (
    <FadeIn>
      <section className="blog">
        <h1 className="heading-center">blog & news</h1>
        <div className="container">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <p> {error} </p>
          ) : (
            <div className="blog__container">
              {blogs.map((blog) => (
                  <BlogCardFullScreen key={blog._id} blog={blog} />
 
              ))}
            </div>
          )}
        </div>
      </section>
    </FadeIn>
  );
};

export default BlogScreen;
