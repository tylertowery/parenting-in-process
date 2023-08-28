import GuidingPrinciples from "../components/GuidingPrinciples";
import Layout from "../components/Layout";
import Services from "../components/Services";
interface ContactProps {

}

const Contact = ({ }: ContactProps) => {

  return (
    <div>
      <Layout>
        <section>
          <h1>Contact Me</h1>
          <p>Have questions about products & services? Do you have any questions or concerns? Please fill out the form or email me. I can&apos;t wait to connect with you!</p>
          <h5>Email</h5>
          <p>becky@parentinginprocess.com</p>
        </section>
        <section>
          <form>
            <label htmlFor="first-name">First Name</label>
            <input id="first-name"></input>
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name"></input>
            <label htmlFor="email">Email</label>
            <input id="email" type="email"></input>
            <label htmlFor="subject">Subject</label>
            <input id="subject"></input>
            <label htmlFor="message">Message</label>
            <input id="message"></input>
            <button type="submit">Submit</button>
          </form>
        </section>
      </Layout>

    </div>
  )
}

export default Contact;