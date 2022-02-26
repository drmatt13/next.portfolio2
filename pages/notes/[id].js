import { useEffect } from 'react';

// components
import Notes from '../../components/Notes'

export async function getServerSideProps({ params: { id }}) {
  return {
    props: {
      id
    }
  }
}

export default function Index ({ id }) {

  useEffect(() => {
    console.log(id);
  }, [])

  return <Notes data={undefined} />
}