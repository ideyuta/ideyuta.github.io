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
        <div className="Index">
          <div
            className="Markdown"
            dangerouslySetInnerHTML={{__html: post.body}}
          />
        </div>
      </div>
    );
  }
}

Markdown.propTypes = propTypes;
