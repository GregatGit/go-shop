import categories from '../data/category.json'

export default function (state = [], action) {
  switch (action.payload) {


      default:
        return [...categories]
  }
}
