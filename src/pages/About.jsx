const About = () => {
  return (
    <div className="about-page">
      <img className="about-page__logo" src="../../public/starbucks_logo.png" />
      <h1 className="about-page__intro-text">
        스타벅스 바리스타를 위한 일정 관리
      </h1>
      {/* <img
        src={import.meta.env.VITE_PUBLIC_URL + "/public/starbucks_about.png"}
      /> */}
      <img
        className="about-page__intro-image"
        src="../../public/starbucks_about.png"
      />
    </div>
  );
};

export default About;
