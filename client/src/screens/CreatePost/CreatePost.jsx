import React, { useState } from 'react'
import './CreatePost.css'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'


function CreatePost(props) {
  return (
    <div>
      <Layout>
        <h3>Create Post Here</h3>
        </Layout>
    </div>
  )
}

export default CreatePost;