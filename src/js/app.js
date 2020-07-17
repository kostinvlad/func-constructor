export default function Character(name, type) {
  if((typeof name === "String" && (name.length > 2 && name.length < 10)) &&
  ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].includes(type)){
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = Character.prototype[type].attack;
    this.defense = Character.prototype[type].defense
  }
  else {
    throw new Error('Некорректные данные ввода')
  }
}

Character.prototype = {
  Bowman: {
    attack: 25,
    defense: 25,
  },
  Swordsman: {
    attack: 40,
    defense: 10,
  },
  Magician: {
    attack: 10,
    defense: 40,
  },
  Undead: {
    attack: 25,
    defense: 25,
  },
  Zombie: {
    attack: 40,
    defense: 10,
  },
  Daemon: {
    attack: 10,
    defense: 40,
  },
}
