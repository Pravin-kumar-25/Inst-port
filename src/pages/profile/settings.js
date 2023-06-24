import Loading from '@/components/Loading'
import ProfileLayout from '@/layout/ProfileLayout'
import { checkUser } from '@/utils/commonUtils'
import useLoading from '@/utils/customHook/useLoading'
import React from 'react'

const settings = () => {
  const [loading,setIsLoading] = useLoading()

  if(loading) {
    return <Loading/>
  }

  return (
    <div>settings</div>
  )
}

settings.Layout = ProfileLayout

settings.getLayout = function getLayout(page) {
    return <ProfileLayout data={page.props}>{page}</ProfileLayout>
}

export default settings