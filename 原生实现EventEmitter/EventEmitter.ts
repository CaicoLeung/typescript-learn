type CallBack = (...args: any[]) => void;

class EventEmitter {
  listeners: Record<string, CallBack[]> = {}
  maxListeners: number;

  constructor(maxListeners: number = 10) {
    this.maxListeners = maxListeners || 10
  }

  on(event: string, callback: CallBack) {
    const listeners = this.listeners
    if (listeners[event] && listeners[event].length >= this.maxListeners) {
      throw RangeError(`监听器的最大数量是${this.maxListeners}, 你已超出最大限制`)
    }
    if (listeners[event] instanceof Array) {
      if (listeners[event].indexOf(callback) === -1) {
        // 判断该事件监听器数组是否初始化，若未初始化，则将listeners[event]初始化为数组，并加入监听器cb
        listeners[event].push(callback)
      }
    } else {
      // 若监听器数组已经被初始化，则判断数组中是否已存在cb,不存在则添加，已存在则不做操作。
      listeners[event] = Array.prototype.concat([], callback)
    }
  }

  addListener = this.on

  emit(event: string, ...args: any[]) {
    // 遍历监听器,通过apply方法把上面得到的args参数传进去
    this.listeners[event]?.forEach(cb => cb.apply(null, args))
  }

  removeListener(event: string, listener: CallBack) {
    const listeners = this.listeners
    const arr = listeners[event] || []
    const index = arr.indexOf(listener)
    if (index >= 0) {
      listeners[event].splice(index, 1)
    }
  }

  once(event: string, callback: CallBack) {
    const self = this
    function fn(...args: []) {
      callback.apply(null, args)
      self.removeListener(event, fn)
    }
    this.on(event, fn)
  }

  removeAllListener(event: string) {
    this.listeners[event] = []
  }

  getListeners(event: string) {
    return this.listeners[event]
  }
}

export default EventEmitter