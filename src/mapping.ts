import { 
  GoldLocked,
  GoldUnlocked,
  GoldRelocked,
  GoldWithdrawn
} from '../generated/LockedGold/LockedGold'
import { Event } from '../generated/schema'
import { log } from '@graphprotocol/graph-ts'

export function handleGoldLocked(event: GoldLocked): void {
  let event_id = event.transaction.hash.toHex() + "-" + event.transactionLogIndex.toString() // unique id
  let e = new Event(event_id)
  e.address = event.address.toHex()
  e.type = "GoldLocked"
  e.data = GoldLockedJSON(event)
  e.save();
}

export function handleGoldUnlocked(event: GoldUnlocked): void {
  
}

export function handleGoldRelocked(event: GoldRelocked): void {
  
}

export function handleGoldWithdrawn(event: GoldWithdrawn): void {
  
}

export function GoldLockedJSON(event: GoldLocked): String {
  let s = '{';
  s+='\"account\": \"' + event.params.account.toHex().toString() +'\",'
  s+='\"value\":' + event.params.value.toString()
  s+= '}'
  return s;
}