export const loadProducts = async () => {
    const data = await fetch('http://www.localhost:3000/api/comments')
      .then((res) => res.json())
      .catch((err) => console.error(err));
}


   