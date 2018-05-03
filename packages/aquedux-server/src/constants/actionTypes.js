// @flow

const actionTypes = {
  queue: {
    AQUEDUX_LOAD_QUEUE: 'AQUEDUX_LOAD_QUEUE',
    AQUEDUX_UNLOAD_QUEUE: 'AQUEDUX_UNLOAD_QUEUE',
    AQUEDUX_ENQUEUE_NOTIFICATION: 'AQUEDUX_ENQUEUE_NOTIFICATION',
    AQUEDUX_DEQUEUE_NOTIFICATION: 'AQUEDUX_DEQUEUE_NOTIFICATION',
    AQUEDUX_ENQUEUE_ACTION: 'AQUEDUX_ENQUEUE_ACTION',
    AQUEDUX_DEQUEUE_ACTION: 'AQUEDUX_DEQUEUE_ACTION',
    AQUEDUX_LOCK_QUEUE: 'AQUEDUX_LOCK_QUEUE',
    AQUEDUX_UNLOCK_QUEUE: 'AQUEDUX_UNLOCK_QUEUE',
    AQUEDUX_QUEUE_INITIALIZED: 'AQUEDUX_QUEUE_INITIALIZED',
    AQUEDUX_QUEUE_SNAPSHOT: 'AQUEDUX_QUEUE_SNAPSHOT',
    AQUEDUX_QUEUE_SET_CURSOR: 'AQUEDUX_QUEUE_SET_CURSOR'
  },
  api: {
    AQUEDUX_REMOVE_TYPE_SET: 'AQUEDUX_REMOVE_TYPE_SET'
  },
  tank: {
    AQUEDUX_TANK_CONNECT: 'AQUEDUX_TANK_CONNECT',
    AQUEDUX_TANK_DISCONNECT: 'AQUEDUX_TANK_DISCONNECT',
    AQUEDUX_TANK_SUBSCRIBE: 'AQUEDUX_TANK_SUBSCRIBE',
    AQUEDUX_TANK_UNSUBSCRIBE: 'AQUEDUX_TANK_UNSUBSCRIBE'
  },
  channel: {
    AQUEDUX_CHANNEL_DEFINE: 'AQUEDUX_CHANNEL_DEFINE',
    AQUEDUX_CHANNEL_DEFINE_TEMPLATE: 'AQUEDUX_CHANNEL_DEFINE_TEMPLATE',
    AQUEDUX_CHANNEL_SNAPSHOT: 'AQUEDUX_CHANNEL_SNAPSHOT'
  },
  client: {
    AQUEDUX_CLIENT_CHANNEL_JOIN: 'AQUEDUX_CLIENT_CHANNEL_JOIN',
    AQUEDUX_CLIENT_CHANNEL_LEAVE: 'AQUEDUX_CLIENT_CHANNEL_LEAVE'
  }
}

// For type infering only. See bellow.
export const flatTypes = { ...actionTypes.queue, ...actionTypes.api, ...actionTypes.tank, ...actionTypes.channel }

export type AqueduxActionType = $Keys<typeof flatTypes>

export default actionTypes
