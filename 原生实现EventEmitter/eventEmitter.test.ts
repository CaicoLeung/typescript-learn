import EventEmitter from './EventEmitter'

const eventEmitter = new EventEmitter(2)

eventEmitter.on('test', function (...args) {
  console.log(args.join());
})

eventEmitter.on('test', function (...args) {
  console.log(args.join());
})

eventEmitter.on('test', function (...args) {
  console.log(args.join());
})

eventEmitter.on('caico', function (...args) {
  console.log(args.join());
})

eventEmitter.on('ts', function (...args) {
  console.log(args.join());
})

eventEmitter.emit('test', 1, 2, 4)
// eventEmitter.emit('test', 1, 2, 4)
eventEmitter.emit('mmd', 1, 1, 1)
eventEmitter.emit('caico', 1, 0, 0)
eventEmitter.emit('ts', 2, 2)

console.log(eventEmitter.getListeners('mmd'));
