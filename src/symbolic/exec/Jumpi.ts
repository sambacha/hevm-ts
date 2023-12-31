import { Executor } from "./Executor";
import { EVM } from "../EVM";
import { Operation } from "@/../bytecode/Operation";

export class Jumpi implements Executor {
  execute(op: Operation, evm: EVM) {
    const jumpLocation = evm.stack.pop();
    evm.stack.pop();
    evm.nextJumpLocation = jumpLocation;
  }
}
