import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);
  const title =
    mediaType === "movie" ? "Recommendation Movies" : "Recommendation Tv Shows";

  return (
    <>
      {data?.results.length > 0 && (
        <Carousel
          title={title}
          data={data?.results}
          loading={loading}
          endPoint={mediaType}
        />
      )}
    </>
  );
};

export default Recommendation;
