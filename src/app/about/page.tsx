import GuidingPrinciples from "../components/GuidingPrinciples";
import Layout from "../components/Layout";

interface AboutProps {

}

const About = ({ }: AboutProps) => {

  return (
    <div>
      <Layout>
        <section>
          <h1>Hello! I&apos;m Becky!</h1>
          <h3>Mom to 1. Conscious Parenting Educator & Coach. Former Kindergarten Teacher</h3>
          <p>Many parents feel <strong><em>confused</em></strong> and disempowered by all of the conflicting messaging surrounding raising children. I started Parenting in Process to help bridge the gap between developmental & attachment science and parenting. My goal is to provide you with the information you need to inspire and empower you to approach parenting with mindful <strong><em>intention</em></strong> all while giving you the confidence to trust your own <strong><em>intuition</em></strong>.</p>
          <br />
          <p>I approach parenting as the ongoing process of learning and growing alongside our children. <strong>Parenting is a journey and I am so grateful to be able to walk alongside you in yours</strong>.</p>
        </section>
        <section>
          <GuidingPrinciples />
        </section>
        <section>
          <ul>Qualifications:</ul>
          <li>Registered Circle of Security Parenting Facilitator</li>
        </section>
      </Layout>

    </div>
  )
}

export default About;