'use client'

interface DiscoveryButtonProps {

}

const DiscoveryButton = ({ }: DiscoveryButtonProps) => {
  const handleDiscovery = (event) => {
    console.log('Booking a free discovery call now');
  }

  return (
    <button onClick={handleDiscovery}>Book a FREE Discovery Call</button>
  )
}

export default DiscoveryButton;