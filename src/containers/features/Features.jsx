import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, minus beatae? Aperiam molestiae similique deserunt nobis saepe. Consectetur, asperiores deleniti accusantium laborum inventore ratione odit delectus, itaque expedita facere quia.',
  },

  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, minus beatae? Aperiam molestiae similique deserunt nobis saepe. Consectetur, asperiores deleniti accusantium laborum inventore ratione odit delectus, itaque expedita facere quia.',
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, minus beatae? Aperiam molestiae similique deserunt nobis saepe. Consectetur, asperiores deleniti accusantium laborum inventore ratione odit delectus, itaque expedita facere quia.',
  },

  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, minus beatae? Aperiam molestiae similique deserunt nobis saepe. Consectetur, asperiores deleniti accusantium laborum inventore ratione odit delectus, itaque expedita facere quia.',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You just Need to Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started.</p>
      </div>
      <div>
        <div className="gpt3__features-container">
          {featuresData.map((item, index) => (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
