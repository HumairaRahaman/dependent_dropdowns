import React, { useEffect, useState } from "react"

const Choose = () => {
  const [datas, setDatas] = useState([]);
  const [currentLang, setCurrentLang] = useState("Language");
  const [currentTopic, setCurrentTopic] = useState("Topic");
  const [currentLearn, setCurrentLearn] = useState("Learn");
  const [languages, setLanguages] = useState([]);
  const [topics, setTopics] = useState([]);
  const [learns, setLearns] = useState([]);
  const [iframeLink, setIframeLink] = useState("");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((result) => {
        setDatas(result);
        let tempLanguages = result.map((item) => item.language);
        tempLanguages = [...new Set(tempLanguages)];
        setLanguages(tempLanguages);
      });
  }, []);

  const handleLanguageChange = (e) => {
    setCurrentLang(e.target.value);
    let tempTopics = [];
    datas.map((item) => {
      if (item.language === e.target.value) tempTopics.push(item.topic);
      return null;
    });
    tempTopics = [...new Set(tempTopics)];
    setTopics(tempTopics);
    if (e.target.value === "Language") {
      setCurrentTopic("Topic");
      return;
    }
    topicChange(tempTopics[0]);
  };

  const handleTopicChange = (e) => {
    topicChange(e.target.value);
  };

  const topicChange = (value) => {
    setCurrentTopic(value);
    let tempLearns = [];
    datas.map((item) => {
      if (item.topic === value) tempLearns.push(item.learn);
      return null;
    });
    tempLearns = [...new Set(tempLearns)];
    setLearns(tempLearns);
    setCurrentLearn(tempLearns[0]);
  };

  const handleLearnChange = (e) => {
    setCurrentLearn(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (currentLearn === "Learn") return null;
    datas.map((item) => {
      if (
        item.language === currentLang &&
        item.topic === currentTopic &&
        item.learn === currentLearn
      ) {
        setIframeLink(item.linkForIframe);
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen bg-teal-50 shadow-xl shadow-cyan-400 rounded-lg ">
      <div className="pt-16 flex lg:flex-row flex-col items-center gap-4 lg:justify-evenly ">
        <select
          onClick={handleLanguageChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value={"Language"}>Language</option>
          {languages.map((l, index) => (
            <option key={index} value={l}>
              {l}
            </option>
          ))}
        </select>
        <select
          onClick={handleTopicChange}
          className="select select-bordered w-full max-w-xs"
        >
          {currentLang === "Language" ? (
            <option value="Topic">Topic</option>
          ) : (
            topics.map((t, index) => (
              <option key={index} value={t}>
                {t}
              </option>
            ))
          )}
        </select>
        <select
          onChange={handleLearnChange}
          className="select select-bordered w-full max-w-xs"
        >
          {currentTopic === "Topic" ? (
            <option value="Learn">Learn</option>
          ) : (
            learns.map((le, index) => (
              <option key={index} value={le}>
                {le}
              </option>
            ))
          )}
        </select>
      </div>
      <div className="flex items-center justify-center my-16 ">
        <button
          onClick={handleClick}
          className="btn btn-wide bg-gradient-to-r from-cyan-500 to-blue-500 border-0"
        >
          Show Information
        </button>
      </div>
      <div className=" flex items-center justify-center pb-16  rounded-lg mx-8">
        {iframeLink && (
          <iframe
            target=".blank"
            src={iframeLink}
            width={800}
            height={600}
            title={iframeLink}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Choose;
