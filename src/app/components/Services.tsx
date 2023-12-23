import Service from './Service';

interface ServicesProps {

}

const Services = ({ }: ServicesProps) => {

  return (
    <div className="section">
      <h1 className="section-header">Services Section</h1>
      <Service name="Coaching Session" price={150.00} description="1-on-1 coaching session with me" />
      <Service name="COSP" price={500.00} description="8-week coaching program" />
    </div>
  )
}

export default Services;