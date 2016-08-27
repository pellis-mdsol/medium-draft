import React, { PropTypes } from 'react';
import { Entity } from 'draft-js';


export const findLinkEntities = (contentBlock, callback) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        Entity.get(entityKey).getType() === 'LINK'
      );
    },
    callback
  );
};

const Link = (props) => {
  const { url } = Entity.get(props.entityKey).getData();
  return (
    <a
      className="draft-link hint--top hint--rounded"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={url}
    >{props.children}</a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  entityKey: PropTypes.string,
};

export default Link;
