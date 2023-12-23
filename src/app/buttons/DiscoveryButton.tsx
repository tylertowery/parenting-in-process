'use client'

interface DiscoveryButtonProps {

}

const DiscoveryButton = ({ }: DiscoveryButtonProps) => {
  const handleDiscovery = () => {
    const externalUrl = "https://calendly.com/parentinginprocess";
    window.open(externalUrl, '_blank');
  }

  return (
    <button onClick={handleDiscovery}>Book a FREE Discovery Call</button>
  )
}

export default DiscoveryButton;