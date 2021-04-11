import React, { useState, useEffect, Suspense } from 'react'
import { get } from 'axios'
import { Alert } from 'reactstrap'
import Loading from '../components/Loading'
import { openSource } from '../portfolio'
import GithubProfileCard from 'components/GithubProfileCard'

const GithubProfile = () => {
  const [prof, setProf] = useState({})

  const getProfileData = async () => {
    await get(`https://api.github.com/users/${openSource.githubUserName}`)
      .then((res) => setProf(res.data))
      .catch((err) => {
        err ? (
          <Alert color="warning">Failed to get the user from github</Alert>
        ) : (
          ''
        )
      })
  }

  useEffect(() => {
    getProfileData()
  })

  return (
    <Suspense fallback={<Loading />}>
      <GithubProfileCard prof={prof} />
    </Suspense>
  )
}

export default GithubProfile
