interface ServiceProps {
  name: string;
  price: number;
  description: string;
}

const Service = ({ name, price, description }: ServiceProps) => {

  return (
    <div className="service">
      <h1 className="section-header">{name}</h1>
      <p>${price}</p>
      <p>{description}</p>
    </div>
  )
}

export default Service;