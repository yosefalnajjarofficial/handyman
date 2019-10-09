const servicesPic = service => {
  let image;
  switch (service) {
    case 'build':
      image =
        'https://image.freepik.com/free-vector/construction-skyline-construction-web-site-head-new-city-exterior_88272-1080.jpg';
      break;
    case 'Blacksmith':
      image =
        'https://image.freepik.com/free-photo/close-up-image-blacksmith-works-workshop-with-hammer-red-hot-iron_109710-5212.jpg';
      break;
    case 'House cleaning':
      image =
        'https://image.freepik.com/free-photo/low-section-unrecognizable-woman-sweeping-floor-with-broom_1098-19272.jpg';
      break;
    case 'Wall paint':
      image =
        'https://image.freepik.com/free-photo/paint-concept-with-backview-woman_23-2147703577.jpg';
      break;
    case 'Plumbing':
      image =
        'https://image.freepik.com/free-photo/crop-plumber-using-wrench_23-2147772228.jpg';
      break;
    case 'Mechanics':
      image =
        'https://image.freepik.com/free-photo/side-view-mechanic-checking-motor-oil-car_85574-8374.jpg';
      break;
    case 'electrical engineer':
      image =
        'https://image.freepik.com/free-photo/solar-photovoltaic-panels-station-checks-with-tablet-computer_1150-18191.jpg';
      break;
    case 'Pest and rodent control':
      image =
        'https://image.freepik.com/free-vector/pest-control-isometric-illustration_1284-19625.jpg';
      break;
    case 'Freight':
      image =
        'https://image.freepik.com/free-photo/container-operation-port-series_1150-8332.jpg';
      break;

    default:
      image =
        'https://static.wixstatic.com/media/496ffb_8b6064c94518461aaee56a4a17408300.jpg';
      break;
  }
  return image;
};

export default servicesPic;
