import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { detailUrlGenerator } from "../../utils";
import { client } from "../../client";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { hola } = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    client.get(detailUrlGenerator(hola)).then((resp) => {
      setDetail(resp.data);
    });
  };

  return (
    <div>
      <div className="card-txt">Actors : {detail.Actors}</div>
      <div className="card-txt">DVD : {detail.DVD}</div>
      <div className="card-txt">Directors : {detail.Director}</div>
    </div>
  );
};

export default Detail;
