import React, { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./styles.scss";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  const inputRef = useRef(null)

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    event.key === "Enter" && query.length > 0 && navigate(`/search/${query}`);
  };

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for a Movie or TV show..."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => navigate(`/search/${query}`)}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
