import { 
  UnlockingPeriodSet,
  GoldLocked,
  GoldUnlocked,
  GoldRelocked,
  GoldWithdrawn,
  SlasherWhitelistAdded,
  SlasherWhitelistRemoved,
  AccountSlashed
} from '../generated/LockedGold/LockedGold';
import { createData, handleEvent } from './utils/utils';

export function handleGoldLocked(event: GoldLocked): void {
  handleEvent(event,"GoldLocked");
}

export function handleGoldUnlocked(event: GoldUnlocked): void {
  handleEvent(event,"GoldUnlocked");
}

export function handleGoldRelocked(event: GoldRelocked): void {
  handleEvent(event,"GoldRelocked");
}

export function handleGoldWithdrawn(event: GoldWithdrawn): void {
  handleEvent(event,"GoldWithdrawn");
}

export function handleUnlockingPeriodSet(event: UnlockingPeriodSet): void {
  handleEvent(event,"UnlockingPeriodSet");
}

export function handleSlasherWhitelistAdded(event: SlasherWhitelistAdded): void {
  handleEvent(event,"SlasherWhitelistAdded");
}

export function handleSlasherWhitelistRemoved(event: SlasherWhitelistRemoved): void {
  handleEvent(event,"SlasherWhitelistAdded");
}

export function handleAccountSlashed(event: AccountSlashed): void {
  handleEvent(event,"AccountSlashed");
}