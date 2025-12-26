import Image from './Image'

export default function ProjectImage({ src, alt, caption }) {
  return <Image src={src} alt={alt} caption={caption} width={800} height={400} />
}
