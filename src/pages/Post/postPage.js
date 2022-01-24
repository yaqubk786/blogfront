import React, { useEffect, useState } from "react";
import "./post.css";

// import "./latest.css";

// import More from "./components/More/More";
// import Boy from './public/media/boy.png';
import {
  bollywood,
  fitness,
  hollywood,
  technology,
  food,
} from "../../fakeData.js";
import { useParams, Link } from "react-router-dom";

export default function PostPage() {
  const [clap, setClap] = useState(0);
  const [post, setPost] = useState();
  const [currentParam, setCurrentParam] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState("");

  const params = useParams();
  let arr = [];
  const [loading, setLoading] = useState(true);

  const getCategory = async () => {
    console.log("api ran !!");
    setLoading(true);

    const url = "https://myblogbackend-pb.herokuapp.com/blog/getcategory"
    fetch(url, {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ category: category }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("this is result-->", result);
        setLoading(false);
        const data = result.filter((post) => post.id == params.id);
        setPost(data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (params.category != currentParam) {
    console.log("param changed !!");
    setCurrentParam(params.category);
    setCategory(params.category);
  }

  useEffect(() => {
    getCategory();
    // console.log(categoryData);
  }, [category, currentParam]);

  console.log(post, "this is post");

  if (loading && !post) {
    return <span>Loading...</span>;
  }
  return (
    <section>
      <div className="container">
        <h2 className="tech-head">{post?.title}</h2>
        <p>{post?.date}</p>
        {/* <button className="c-btn" onClick={() => setClap(clap+1)}><i onClick={() => setClap(clap+1)} class="fas fa-sign-language"></i></button>{clap} */}
        <span onClick={() => setClap(clap + 1)}>
          <i class="fas fa-sign-language"></i>
        </span>{" "}
        <span>{clap}</span>
        <br />
        <i class="fas fa-share-alt"></i>
        <span> share this article</span>
        <div className="tech-icons">
          <img
            alt="boy"
            className="boy-img"
            src={process.env.PUBLIC_URL + "/media/boy.png"}
          ></img>
          <span className="tech-name">
            Dimitry Nozhenko <br /> <span className="dates"> Jan 28 2019</span>
          </span>

          <span>
            <i class="fab fa-facebook-square"></i>
          </span>
          <span>
            <i class="fab fa-instagram"></i>
          </span>
          <span>
            <i class="fab fa-twitter-square"></i>
          </span>
          <span>
            <i class="fab fa-youtube"></i>
          </span>
        </div>
        <div className="post-text">
          <p>
            <strong>Desc:</strong>
            {post?.desc}
          </p>

          <p>{post?.content}</p>
        </div>
        {/* <div className="aa"><span className="abcd">React</span>
        <span className="abcd">js</span>
        <span className="abcd">Animation</span>
        </div> */}
        <hr className="t-hrs" />
        <div className="tech-i">
          <img
            className="boy-img"
            src={process.env.PUBLIC_URL + "/media/boy.png"}
          ></img>{" "}
          <span className="wrt">Written by</span>
          <span className="tech-name">
            Dimitry Nozhenko <br />{" "}
            <span className="dates"> Jan 28 2019 / 10 min read</span>
          </span>
        </div>
        <hr className="t-hrs" />
        <div className="foot">
          <h3>More from siren</h3>
          <hr></hr>
          <section className="section mb-4 pb-4">
            <div className="container">
              {/* <h1 className="l-head">The Latest</h1> */}
              <hr className="l-hr"></hr>
              <div className="row">
                {[1, 2, 3].map((i) => {
                  return (
                    <div className="col-md-4 overflow-hidden">
                      <div className="l-box shadow">
                        <img
                          className="lake-img"
                          src={process.env.PUBLIC_URL + "/media/lakehouse.jfif"}
                        ></img>
                        <h3>
                          Joshua Tree
                          <br /> Overnight Advemture
                        </h3>
                        <img
                          className="boypic"
                          src={process.env.PUBLIC_URL + "/media/boy.png"}
                        ></img>
                        <span>
                          dimitri Nonzeko
                          <br />
                          <p className="p-time">Aug 10 /4 min read</p>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
