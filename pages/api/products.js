export default function handler(req, res) {
    res.status(200).json([
        {
        
          "description": "A delicious vanilla.",
          "id": "Ice Cream",
          "image": "df",
          "price": 23,
          "title": "Vanilla ice cream."
        },
        {
        
          "description": "Deer Tracks.",
          "id": "Deer Tracks",
          "image": "df",
          "price": 23,
          "title": "A new blend of cream and milk."
        },
        {
       
          "description": "Cake batter ice cream to die for.",
          "id": "Cake Batter",
          "image": "df",
          "price": 21,
          "title": "Cake Batter"
        }
      ])
  }