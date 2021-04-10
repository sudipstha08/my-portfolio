import React, { useState, useEffect, Suspense } from 'react'
import Loading from '../components/Loading'
import { openSource } from '../portfolio'
import { get } from 'axios'
import GithubProfileCard from 'components/GithubProfileCard'
import { Alert } from 'reactstrap'

const GithubProfile = () => {
  const [prof, setProf] = useState({})
  async function getProfileData() {
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
