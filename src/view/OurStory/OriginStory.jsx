import React from 'react';
import {isHuddle} from '../../services/helper';

import Logo from '../../static/huddle/logo.svg';
import UnitasLogo from '../../static/unitas/logo.svg';

const OriginStory = () => (
  <div className='origin-story'>
    <div className='container'>
      <div className='inner-container'>
        <div className='content'>
          <div className='title'>
            <h2>
              Origin story
            </h2>
          </div>
          <div className='story story-1'>
            <div className='text-container'>
              <p>
                Lorem ipsum dolor sit amet consectetu erisque ornare eu id ipsum vulputate. At ultrices sit imperdiet malesuada libero at. Nulla scelerisque id lorem tristique sit. Vestibulum urna convallis vitae arcu.
              </p>
              <h6>
                Lorem ipsum dolor
              </h6>
              <br />
              <p>
                Lorem ipsum dolor
                Lorem ipsum dolor sit amet consectetur. Nam dui platea condimentum lacus feugiat adipiscing gravida dolor donec. Adipiscing mauris nisl id sed cras sed turpis. Nec amet in pellentesque netus eleifend felis pellentesque. Urna risus est sed imperdiet. Vitae tincidunt magna quam vitae mollis dui erat orci diam. Volutpat purus arcu egestas fames. Ornare viverra volutpat purus gravida. Velit lobortis risus quam odio convallis placerat augue.
              </p>
            </div>
            <div className='img-container'>
              <div>
                <img alt='specialist-img' />
              </div>
              <span>
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
          </div>
          <div className='quote'>
            <h3>
              “Lorem ipsum dolor sit amet consectetur. Facilisis interdum egestas nisl sed arcu eget eu fringilla elementum.”
            </h3>
          </div>
          <div className='story story-2'>
            <div className='img-container'>
              <div>
                <img alt='specialist-img' />
              </div>
              <span>
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
            <div className='text-container'>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nam dui platea condimentum lacus feugiat adipiscing gravida dolor donec. Adipiscing mauris nisl id sed cras sed turpis. Nec amet in pellentesque netus eleifend felis pellentesque. Urna risus est sed imperdiet. Vitae tincidunt magna quam vitae mollis dui erat orci diam. Volutpat purus arcu egestas fames. Ornare viverra volutpat purus gravida. Velit lobortis risus quam odio convallis placerat augue.
              </p>
              <h6>
                Lorem ipsum dolor
              </h6>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur. Nam dui platea condimentum lacus feugiat adipiscing gravida dolor donec. Adipiscing mauris nisl id sed cras sed turpis. Nec amet in pellentesque netus eleifend felis pellentesque. Urna risus est sed imperdiet. Vitae tincidunt magna quam vitae mollis dui erat orci diam. Volutpat purus arcu egestas fames. Ornare viverra volutpat purus gravida. Velit lobortis risus quam odio convallis placerat augue.
              </p>
            </div>
          </div>
          <div className='quote'>
            <h3>
              “Lorem ipsum dolor sit amet consectetur. Facilisis interdum egestas nisl sed arcu eget eu fringilla elementum.”
            </h3>
          </div>
          <div className='story story-3'>
            <div className='text-container'>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nam dui platea condimentum lacus feugiat adipiscing gravida dolor donec. Adipiscing mauris nisl id sed cras sed turpis. Nec amet in pellentesque netus eleifend felis pellentesque. Urna risus est sed imperdiet. Vitae tincidunt magna quam vitae mollis dui erat orci diam. Volutpat purus arcu egestas fames. Ornare viverra volutpat purus gravida. Velit lobortis risus quam odio convallis placerat augue.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur. Nam dui platea condimentum lacus feugiat adipiscing gravida dolor donec. Adipiscing mauris nisl id sed cras sed turpis. Nec amet in pellentesque netus eleifend felis pellentesque. Urna risus est sed imperdiet. Vitae tincidunt magna quam vitae mollis dui erat orci diam. Volutpat purus arcu egestas fames. Ornare viverra volutpat purus gravida. Velit lobortis risus quam odio convallis placerat augue.
              </p>
            </div>
            <div className='img-container'>
              <div>
                <img alt='specialist-img' />
              </div>
              <span>
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
          </div>
          <img
            alt='logo'
            className='logo'
            src={isHuddle() ? Logo : UnitasLogo}
          />
        </div>
      </div>
    </div>
  </div>
);

export default OriginStory;
