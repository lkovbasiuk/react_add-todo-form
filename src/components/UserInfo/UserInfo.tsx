import React from 'react';
import { Todo } from '../../types';

type Props = {
  todo: Todo;
};

export const UserInfo: React.FC<Props> = ({ todo }) => {
  if (!todo.user) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${todo.user.email}`}>
      {todo.user.name}
    </a>
  );
};
