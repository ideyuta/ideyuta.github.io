import React from 'react';
import Helmet from 'react-helmet';
import {config} from 'config';

const propTypes = {
  route: React.PropTypes.object
};


/**
 * Markdown Component
 */
export default class Markdown extends React.Component {

  /**
   * render
   *
   * @return {ReactElement}
   */
  render() {
    const post = this.props.route.page.data;
    return (
      <div>
        <Helmet
          meta={[{content: post.description, name: 'description'}]}
          title={post.title}
          titleTemplate={`%s | ${config.siteTitle}`}
        />
        <div className="Post">
          <div className="PostHeader">
            <h1 className="PostHeader__title">{post.title}</h1>
            <span className="PostHeader__createdAt">Created {post.date}</span>
          </div>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{__html: post.body}}
          />
        </div>
      </div>
    );
  }
}

Markdown.propTypes = propTypes;
