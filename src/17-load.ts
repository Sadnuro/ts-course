import _ from 'lodash';

const data = [
    {
        username: 'Sadnuro',
        role: 'admin'
    },
    {
        username: 'Valentina',
        role: 'seller'
    },
    {
        username: 'Zulema',
        role: 'seller'
    },
    {
        username: 'Santiago',
        role: 'customer'
    },
]

const rta = _.groupBy(data, (item)=> item.role);
console.log(rta);