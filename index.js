// Add your functions and code here
var kittens = ["Milo","Otis","Grafield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name)
{
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name)
{
  kittens.shift(name)
}

function appendKitten(name)
{
  return [name, ...kittens]
}

function prependKitten(name)
{
  return[...kittens,name]
}

function removeLastKitten()
{
  return kittens.slice(0,kittens.lenght - 1)
}

function removeFirstKitten()
{
  return kittens.slice(1)
}
