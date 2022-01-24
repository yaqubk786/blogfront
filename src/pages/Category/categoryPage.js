import React, { useEffect, useState } from "react";
import {
  bollywood,
  fitness,
  hollywood,
  technology,
  food,
} from "../../fakeData";
import { useParams, Link } from "react-router-dom";

export default function CategoryPage() {
  const params = useParams();
  const [currentParam, setCurrentParam] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const arr = [];
  const [category, setCategory] = useState("");

  const getCategory = async () => {
    console.log("api ran !!");
    const url = "https://myblogbackend-pb.herokuapp.com/blog/getcategory"
    // const url = "http://localhost:5000/blog/getcategory"

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
      .then((result) => setCategoryData(result))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (params.id != currentParam) {
    console.log("param changed !!");
    setCurrentParam(params.id);
    setCategory(params.id);
  }

  useEffect(() => {
    getCategory();
  }, [category, currentParam]);

  //process.env.PUBLIC_URL + "/media/building.jpg"

  return (
    <section className="className">
      <div className="container">
        {params.id} Page
        <div className="row">
          {categoryData.map((item) => {
            return (
              <div className="col-md-12" key={item.id}>
                <Link to={`/${params.id}/post/${item.id}`}>
                  <div className="ar-div1">
                    <img
                      className="ar-img"
                      src={ process.env.PUBLIC_URL + "/media/building.jpg"} //item.image
                    />
                    <span className="ar-text">{item.title}</span>
                    <span>
                      <strong>Category:</strong> {item.category}
                    </span>
                    <span className="ar-txt1">{item.desc}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
