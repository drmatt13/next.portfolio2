import { useRouter } from 'next/router'
const Link = ({ className, context, href, toggleModal, children }) => {
  const router = useRouter()
  const f = async () => {
    if (href === router.pathname || router.pathname === "/notes/[id]")
      await router.push(`/redirect?${href.substring(1).split('/').join(':')}`)
    else 
      await router.push(href)
    toggleModal(undefined)
  }
  return <>
    <style jsx>{`
      div:hover {
        cursor: pointer;
      }
    `}</style>
    <div 
      className={className} 
      context={context}
      onClick={f}
    >
      {children}
    </div>
  </>
}
export default Link
