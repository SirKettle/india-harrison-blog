import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { prune } from 'underscore.string'
import find from 'lodash/find'
import { rhythm, scale } from 'utils/typography'

class Snippet extends React.Component {
  render () {
    const { post } = this.props
    if (!post) {
      return React.createElement('noscript', null)
    } else {
      // Create pruned version of the body.
      const html = post.data.body
      const body = html && prune(html.replace(/<[^>]*>/g, ''), 200)

      return (
        <div>
          <label>{moment(post.data.date).format('LL')}</label>
          <h3
            style={{
              marginTop: rhythm(1/4),
              marginBottom: rhythm(2/4)
            }}
          >
            <Link
              to={{
                pathname: prefixLink(post.path),
                query: {
                  readNext: true,
                },
              }}
            >
              {post.data.title}
            </Link>
          </h3>
          { body && <p>{body}</p> }
          <hr
            style={{
              marginTop: rhythm(2),
              marginBottom: rhythm(2)
            }}
          />
        </div>
      )
    }
  }
}

Snippet.propTypes = {
  post: React.PropTypes.object.isRequired
}

export default Snippet
