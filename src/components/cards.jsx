// cards array
const cards = [
  {
    image: '/images/pexels-kassandre-pedro-8639743 1-6.png',
    text: 'Val Thorens',
    name: 'image of a Val Thorens',
    loveIcon: '/images/Union.svg',
  },
  {
    image: '/images/pexels-kassandre-pedro-8639743 1-1.png',
    text: 'Restaurant terrace',
    name: 'image of a Restaurant',
    loveIcon: '/images/Union.svg',
  },
  {
    image: '/images/pexels-kassandre-pedro-8639743 1-2.png',
    text: 'An outdoor cafe',
    name: 'image of a cafe',
    loveIcon: '/images/Union.svg',
  },
  {
    image: '/images/pexels-kassandre-pedro-8639743 1-3.png',
    text: 'A very long bridge, over the forest...',
    name: 'image of a bridge',
    loveIcon: '/images/Union.svg',
  },
  {
    image: '/images/pexels-kassandre-pedro-8639743 1-4.png',
    text: 'Tunnel with morning light',
    name: 'image of a Tunnel',
    loveIcon: '/images/Union.svg',
  },
  {
    image: '/images/pexels-kassandre-pedro-8639743 1-5.png',
    text: 'Mountain house',
    name: 'image of a Mountain',
    loveIcon: '/images/Union.svg',
  },
];

function CardContainer() {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card cardObj={card} />
      ))}
    </div>
  );
}

export default CardContainer;

function Card({ cardObj }) {
  const { image, text, loveIcon, name } = cardObj;

  return (
    <div className="card-wrapper">
      <img className="card-photo" src={image} alt={name} />
      <div className="card-details">
        <p>{text}</p>
        <img className="love-icon" src={loveIcon} alt="love icon" />
      </div>
    </div>
  );
}

// *** Another method for passing props
// ****
// function CardContainer() {
//     return (
//       <div className="card-container">

//         <Card
//           name="Restaurant terrace"
//           photoName="/images/pexels-kassandre-pedro-8639743 1-1.png"
//           unionIcon="images/Union.svg"
//         />
//         <Card
//           name="An outdoor cafe"
//           photoName="/images/pexels-kassandre-pedro-8639743 1-2.png"
//           unionIcon="images/Union.svg"
//         />
//         <Card
//           name="A very long bridge, over the forest..."
//           photoName="/images/pexels-kassandre-pedro-8639743 1-3.png"
//           unionIcon="images/Union.svg"
//         />
//         <Card
//           name="Tunnel with morning light"
//           photoName="/images/pexels-kassandre-pedro-8639743 1-4.png"
//           unionIcon="images/Union.svg"
//         />
//         <Card
//           name="Mountain house"
//           photoName="/images/pexels-kassandre-pedro-8639743 1-5.png"
//           unionIcon="images/Union.svg"
//         />

//       </div>
//     );
//   }

//   export default CardContainer;

// function Card({ name, photoName, unionIcon }) {
//   return (
//     <div className="card-wrapper">
//       <img className="card-photo" src={photoName} alt="photo" />
//       <div className="card-details">
//         <p>{name}</p>
//         <img className="love-icon" src={unionIcon} alt="love icon" />
//       </div>
//     </div>
//   );
// }
