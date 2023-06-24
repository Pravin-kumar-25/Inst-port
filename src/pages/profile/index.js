import React from 'react'
import ProfileLayout from '@/layout/ProfileLayout'
import Loading from '@/components/Loading'
import { useRouter } from 'next/router'
import useLoading from '@/utils/customHook/useLoading'
import { useState } from 'react'
import { checkUser } from '@/utils/commonUtils'
import { Grid } from '@mui/material'
import GridItem from '@/components/GridItem'

export default function index() {
    const [isLoading, setIsLoading] = useLoading()
    const [listSelected, setIsListSelected] = useState(0)
    const router = useRouter()
    const path = router.pathname

    if (isLoading) {
        return <Loading />
    }

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <GridItem>
                    <h3>Name</h3>
                    <p>{user?.name}</p>
                </GridItem>
            </Grid>
            <Grid item xs={6}>
                <GridItem >
                    <h3>Email</h3>
                    <p>{user?.email}</p>
                </GridItem>
            </Grid>

            <Grid item xs={6}>
                <GridItem>
                    <h3>Phone</h3>
                    <p>8870188247</p>
                </GridItem>
            </Grid>

            <Grid item xs={6}>
                <GridItem>
                    <h3>Date of Birth</h3>
                    <p>{user.name}</p>
                </GridItem>
            </Grid >

            <Grid item xs={6}>
                <GridItem>
                    <h3>Gender</h3>
                    <p>{user.name}</p>
                </GridItem>
            </Grid >
        </Grid >
    )
}


index.Layout = ProfileLayout

index.getLayout = function getLayout(page) {
    return <ProfileLayout data={page.props}>{page}</ProfileLayout>
}