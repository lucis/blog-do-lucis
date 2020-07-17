import React from 'react'
import {  graphql } from 'gatsby'

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost

  return (
    <div className="flex justify-center">
      <div style={{ maxWidth: '700px' }} className="flex flex-column">
        <div className="flex flex-column ph3">
          <h1 className="mb0 pa0">{data.title.text}</h1>
          <h5 className="gray mt2">{`Postado em ${data.date} - Por Lucis`}</h5>
        </div>
        <div className="pt4 ph3 mh0" dangerouslySetInnerHTML={{ __html: data.content.html }}></div>
      </div>
    </div>
  )
}

export default Post 

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        date
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
