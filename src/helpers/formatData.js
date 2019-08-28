const formatData = (listsArray, itemsArray) => {
  listsArray.forEach(list => {
    list.item = itemsArray.filter(e => e.list_id === list.id);
    return list;
  });
  return listsArray;
};

module.exports = formatData;
