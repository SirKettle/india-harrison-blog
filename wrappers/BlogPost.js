import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import Snippet from '../components/Snippet'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import include from 'underscore.string/include'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Bio from 'components/Bio'

import '../css/zenburn.css'

class BlogPost extends React.Component {
  render () {
    const { route, children } = this.props
    const post = route.page.data

    // Sort pages.
    const sortedPages = sortBy(route.pages, 'data.date').reverse();
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ))

    const currentPostIndex = visiblePages.findIndex(page => page.requirePath === route.page.requirePath);
    const nextPost = visiblePages[ currentPostIndex - 1 ];
    const previousPost = visiblePages[ currentPostIndex + 1 ];

    return (
      <div className="react-wrapper">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 style={{marginTop: 0}}>{post.title}</h1>
        { children }
        <em
          style={{
            display: 'block',
            marginBottom: rhythm(2),
          }}
        >
          Posted {moment(post.date).format('LL')}
        </em>
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <div className="next-previous">
          { previousPost && <Snippet post={ previousPost } title="Previous - " /> || null }
          { nextPost && <Snippet post={ nextPost } title="Next - " /> || null }
        </div>
        <Bio />
      </div>
    )
  }
}

BlogPost.propTypes = {
  route: React.PropTypes.object
}

export default BlogPost
