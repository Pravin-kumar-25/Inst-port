import { Router } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../customHook/useAuth";
import Loading from "@/components/Loading";

function withAuth(PageComponent) {
    return function requireAuth(props) {
        const { user, loading } = useAuth()
        console.log(loading)
        if(loading) {
            return <Loading />
        }
        return <PageComponent {...props} user={user} />
    }
    // useEffect(()=> {
    //     async function getUserDetails() {
    //         if(localStorage.getItem('token')) {
    //             console.log(localStorage.getItem('token'))
    //         } else {
    //             Router.push('/signin')
    //         }
    //     }

    //     getUserDetails()
    // }, [])
}

export default withAuth;