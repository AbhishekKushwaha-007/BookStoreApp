import React,{ useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  const [book,setBook] = useState([ ])
  useEffect(() => {
    const getBook=async()=> {
      try {
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);
      setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pd-1">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ullam,
            totam, corrupti deleniti illo officia aliquam maiores impedit
            dolores, repellat optio! Provident recusandae, dicta eveniet
            repellat minus impedit modi blanditiis vel possimus, illum tempora,
            alias itaque dolore animi consequatur eum quia sint! Quis
            dignissimos vel, ipsa odio ab atque doloremque.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item)=> (
                <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
