const people = [
  {
    id: 0,
    first_name: 'Jean-Luc',
    last_name: 'Picard',
    rank: 'Captain'
  },
  {
    id: 1,
    first_name: 'William',
    last_name: 'Riker',
    rank: 'Commander'
  },
  {
    id: 2,
    first_name: 'Beverly',
    last_name: 'Crusher',
    rank: 'Commander'
  },
]

module.exports = {
  create: (req, res) => {
    const names = req.body.name.split(' ');
    const newPerson = {
      id: people.length,
      first_name: names[0],
      last_name: names[1],
    }
    people.push(newPerson);
    res.status(204).send(newPerson)
  }

  read: (req, res) => {
    const person = people.find(pers => pers.id === +req.params.id)
    if(person){
      res.status(200).send(person)
    } else {
      res.status(404).send('Not Found');
    }
  }

  readList: (req, res) => {
    res.status(245).send({results : [1,2,3,4,5]});
  }
  
  destroy: (req, res) => {}
  destroy: (req, res) => {}
}
