let home = {
  header: 'NEM RESTAURANT',
  hoursTitle: 'WORKING HOURS',
  hours: {
    'Mon - Thu:': '11:00 - 22:00',
    'Fri:': '11:00 - 22:00',
    'Sat:': '11:00 - 23:00',
    'Sun:': '11:00 - 21:00',
  },
  reviewTitle: 'REVIEWS',
  reviews: {
    Mike: 'Ze best restaurant in the area.',
    Julie: 'Simply W - 0 - W.',
    John: 'I literally ate my fingers it was so good.',
    Andrew: '14 out of 15 yummies!!!11',
  },
  tabs: ['HOME', 'MENU', 'CONTACT'],
  greetingTitle: 'HI NEIGHBOUR,',
  greeting:
    "We are making yummy meals and trying not to food-poison anyone since 2000s.",
};

let contacts = {
  addressTitle: 'ADDRESS',
  address: '23 Boulevard Rene Cailloux\nMarignane\nBouches-du-Rhôn\n13700',
  telephoneTitle: 'CONTACTS',
  telephone: '+04 42 77 01 01\nnem@nem.nem',
  message: 'Instead of calling us, better call your mom.',
};

let menu = {
  title: 'Our Food Menu',
  'Main Course': [
    {
      name: 'Super Delicious Zuppa Toscana',
      ingredients: 'Chicken, rice, sausage, spinach',
      price: '20€',
    },
    {
      name: 'Bacon Coli Baked Australian Beef',
      ingredients: 'Chicken, rice, sausage spinach',
      price: '20€',
    },
  ],
  'Soup & Salads': [
    {
      name: 'Salat Banana Flower',
      ingredients: 'Chicken, rice, sausage, spinach',
      price: '20€',
    },
    {
      name: 'Gourmet Mushroom Rissoto',
      ingredients: 'Chicken, rice, sausage spinach',
      price: '20€',
    },
  ],
  'Desserts': [
    {
      name: 'Ice Cream Tarte Apple',
      ingredients: 'Chicken, rice, sausage, spinach',
      price: '20€',
    },
    {
      name: 'Fruit Mille Feuile',
      ingredients: 'Chicken, rice, sausage spinach',
      price: '20€',
    },
  ],
  'Drinks': [
    {
      name: 'Double Chocolate Mud Pie',
      ingredients: 'Chicken, rice, sausage, spinach',
      price: '20€',
    },
    {
      name: 'Panmacotte Cream Cake',
      ingredients: 'Chicken, rice, sausage spinach',
      price: '20€',
    },
  ],
};

export { home, contacts, menu };
