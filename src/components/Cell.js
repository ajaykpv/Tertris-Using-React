import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';


const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerender cell')}
  </StyledCell>
);
// React.memo makes sure we only re-render the changed cells.  React.memo used for optimization
//'export deafault Cell makes' 240 rerender
export default React.memo(Cell);
