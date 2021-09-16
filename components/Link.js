import { useRouter } from 'next/router'
const Link = ({ href, toggleModal, children }) => {
  const router = useRouter()
  const f = async () => {
    if (href === router.pathname)
      await router.push(`/redirect?${href.substring(1).split('/').join(':')}`)
    else 
      await router.push(href)
    toggleModal(null)
  }
  return <>
    <style jsx>{`
      div:hover {
        cursor: pointer;
      }
    `}</style>
    <div onClick={f}>{children}</div>
  </>
}
export default Link
