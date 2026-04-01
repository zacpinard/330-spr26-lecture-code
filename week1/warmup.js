function deleteById(items, id) {
  // Given items is an array of objects with a
  // property “id”, delete the object with the id
  // provided and return the updated array of items
  // items = [{id: 'id1', name: 'Brian'}]
  // id = "id1"
  return items.filter((item) => item.id !== id);
}

// function deleteById(items, id) {
//   const index = items.findIndex((item) => item.id === id);
  
//   if (index >= 0) {
//     items.splice(index, 1);
//   }

//   return items;
// }

function updateById(items, id, newData) {
  // Given items is an array of objects with a
  // property “id”, update the object with the id
  // and data provided, and return the updated
  // array of items
  // items = [{id: 'id1', name: 'Brian'}]
  // id = "id1"
  // newData = {name: 'John'}
  return items.map((item) => {
    if (item.id !== id) {
      return item;
    }

    return {
      ...newData,
      id,
    };
  })
}

const someItems = [
  {id: '1', name: 'Brian'},
  {id: '2', name: 'Chris'},
  {id: '3', name: 'Carla'},
  {id: '4', name: 'Taylor'}
];

// console.log(deleteById(someItems, '1'));
console.log(updateById(someItems, '1', {name: 'Champ'}));
// console.log(someItems);
