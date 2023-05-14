import Loading from '@/components/Loading'
import ProfileLayout from '@/layout/ProfileLayout'
import { checkUser } from '@/utils/commonUtils'
import useLoading from '@/utils/customHook/useLoading'
import React from 'react'

const Friends = () => {
  const [loading, setIsLoading] = useLoading()

  if (loading) {
    return <Loading />
  }
  return (
    <div>Friends</div>
  )
}
export async function getServerSideProps(context) {
  return await checkUser(context)
}

Friends.Layout = ProfileLayout

Friends.getLayout = function getLayout(page) {
  return <ProfileLayout data={page.props}>{page}</ProfileLayout>
}

export default Friends