import React from 'react'
import BlogPost from './BlogPost'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    const bodyWithVideos = post.body
      .replace(/\<p\>=YOUTUBESTART=/g,'<div style="max-width:640px;height:360px;" class="video"><iframe frameborder="0" allowfullscreen width="100%" height="100%" src="https://www.youtube.com/embed/')
      .replace(/=YOUTUBEEND=<\/p\>/g,'?autoplay=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;controls=0&amp;start=0&amp;origin=http%3A%2F%2Fharrisonthirkettle.co.uk&amp;enablejsapi=1"></iframe></div>');

    return (
      <BlogPost route={ route }>
        <div dangerouslySetInnerHTML={{ __html: bodyWithVideos }} />
      </BlogPost>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
