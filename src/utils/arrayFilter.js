const arrayFilter = (array, query) => array.filter(badge => 
    `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase()))

export default arrayFilter