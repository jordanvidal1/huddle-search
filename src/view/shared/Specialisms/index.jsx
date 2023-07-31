import React from 'react';
import {Link} from 'react-router-dom';
import {capitalize} from '../../core/helper';
import SearchBar from '../SearchBar'
import ArrowIcon from '../../../static/arrow.svg';
import './styles.scss';

const Specialisms = props => {
  const {type, name, disciplines} = props;

  const headerText = name
    ? `${capitalize(type)} in ${name}`
    : capitalize(type);

  return (
    <div className={`specialisms ${type}`}>
      <div className='container'>
        <div className='inner-container'>
          <div className='content'>
            <div className='text-container'>
              <div className='title'>
                <h2>
                  {headerText}
                </h2>
              </div>
              <div className='text'>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Ultrices sed dignissim nibh feugiat mauris pellentesque. Vulputate ipsum lectus interdum interdum purus accumsan amet nisl tellus.
                </span>
              </div>
            </div>
            <SearchBar>
              Search disciplines...
            </SearchBar>
            <div className='specialism-list-container'>
              <div className='specialism-list'>
                {/*<h5>*/}
                {/*  A*/}
                {/*</h5>*/}
                {disciplines.map((discipline) => (
                  <Link to={discipline.path}>
                    {discipline.name}
                    <img alt='arrow-icon' src={ArrowIcon} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialisms;

Specialisms.defaultProps = {
  disciplines: [
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
    {name: 'Discipline', path: ''},
  ]
};
