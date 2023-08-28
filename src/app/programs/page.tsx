import GuidingPrinciples from "../components/GuidingPrinciples";
import Layout from "../components/Layout";
import Services from "../components/Services";
import DiscoveryButton from "../buttons/DiscoveryButton";

interface ProgramsProps {

}

const Programs = ({ }: ProgramsProps) => {

  return (
    <div>
      <Layout>
        <section>
          <h3>Whether you are seeking suppoort with a specific challenge or looking to buld confidence in caregiving...</h3>
          <h3>I am here to help!</h3>
        </section>
        <section>
          <h4>My approach starts with the belief that:</h4>
          <ul>
            <li>You are the expert on your child</li>
            <li>Parents possess a deep desire to do right by their children</li>
            <li>Parenting is an ongoing process of growth and learning</li>
          </ul>
          <p>I view coaching as the marrying of your expertise with mine. We will collaborate to define your goals and find actionable tools and strategies that will help you connect with your child/ren and move your relationship with your kiddos towards the fulfilling and positive experience it can be.</p>
          <DiscoveryButton />
          <h6>I am so grateful to have the opportunity to come alongside you in your journey.</h6>
          <div className="picture" />
        </section>
        <section>
          <Services />
        </section>
      </Layout>

    </div>
  )
}

export default Programs;