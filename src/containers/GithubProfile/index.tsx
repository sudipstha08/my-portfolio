import React, { useState, useEffect, Suspense } from "react"
import axios from "axios"
import { Alert } from "reactstrap"
import { Loading, GithubProfileCard } from "../../components"
import { openSource } from "../../portfolio"

const GithubProfile = () => {
  const [profile, setProfile] = useState({})

  const getProfileData = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${openSource.githubUserName}`
      )
      if (res) {
        setProfile(res.data)
      }
    } catch (err) {
      return err ? (
        <Alert color="warning">Failed to get the user from github</Alert>
      ) : (
        ""
      )
    }
  }

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <GithubProfileCard prof={profile} />
    </Suspense>
  )
}

export default GithubProfile
