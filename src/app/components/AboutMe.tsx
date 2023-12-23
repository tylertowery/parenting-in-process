interface AboutMeProps {

}

const AboutMe = ({ }: AboutMeProps) => {

  return (
    <div className="section about-me">
      <h1 className="section-header">About Me Section</h1>
      <div>
        <div className="picture"></div>
        <div>
          <h3>Hi I&apos;m Becky!</h3>
          <p>I help parents of young children feel calm and confident in their caregiving with tools, support, and reflection.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;