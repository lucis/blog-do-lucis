import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function Home() {
  const { allPrismicPost: { edges } } = useStaticQuery(graphql`
    query TodosMeusPosts {
      allPrismicPost {
        edges {
          node {
            data {
              title {
                text
              }
            }
            uid
          }
        }
      }
    }
  `)

  return (
    <div className="flex justify-center">
      <div style={{ maxWidth: '700px' }} className="flex flex-column">
        <div className="flex flex-column ph3">
          <h1 className="mb0 pa0">Blog do Lucis</h1>
          <span className="mt3 gray">Ainda não comecei a escrever</span>
        </div>
        <ul className="pt3 ph3 mh0">
          {edges.map(({ node: { data: { title: { text } } , uid } }) => {
            return (
              <li className="list">
                <Link to={`/${uid}`} className="no-underline underline-hover black">
                  <h2>{text}</h2>
                </Link>
                <hr />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
