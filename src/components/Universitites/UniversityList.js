import { React, useState } from "react";
import Universities from "../../localdata/Universities";
import UniversityCard from "./UniversityCard";
import axios from "axios";

const UniversityList = () => {
  const getUniversities = async () => {
    await axios
      .get(
        `https://codzo5uokf.execute-api.us-east-1.amazonaws.com/dev/universities`
      )
      .then((res) => {
        setUniversities(res.data.body);
      });
  };

  const [universities, setUniversities] = useState(getUniversities);
  return (
    <div
      className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
      id="universities"
    >
      {universities
        ? universities.length > 0
          ? universities.map((university) => {
              console.log("university: ", university);
              return <UniversityCard university={university} />;
            })
          : "No results found."
        : "Fetching universities."}
    </div>
  );
};

export default UniversityList;
